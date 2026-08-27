/* png_encode.js -- a pure Node PNG encoder over the built-in zlib module, and nothing else.
 *
 * Sub-step 4 refuses a native or browser-backed rasterizer (sharp, puppeteer, a native resvg
 * build) because it would fail sub-step 6's own fresh-clone test: this project's only two
 * dependencies are `docx` and `jsdom`, and a rasterizer that needs a platform binary or a headless
 * browser is not present in a bare clone. This encoder adds no dependency at all. Node's `zlib`
 * module supplies both pieces PNG needs: `deflateSync` for the compressed image data every IDAT
 * chunk carries, and `crc32` (built into this Node's zlib since Node 21) for the checksum every
 * chunk carries. Nothing here is a general-purpose image library. It writes exactly one PNG shape:
 * 8-bit-per-channel truecolor RGB (color type 2), no interlacing, filter type None on every
 * scanline. That is the one shape `raster_figure.js` needs, because the figures this project draws
 * are flat-color marks on a white ground, and filter type None is a correct, simple, if slightly
 * larger, encoding for that content; it is not an attempt at a general filter-selection encoder.
 *
 * What this module does not handle, stated plainly: no palette (color type 3), no grayscale, no
 * alpha channel, no interlacing, no filter types 1 through 4, no 16-bit channels, no multiple IDAT
 * chunks (one chunk carries the whole compressed stream, which is legal PNG and is small enough
 * here that splitting buys nothing). None of those are needed to encode a bar chart or a line
 * chart in solid colors on white, which is the entire brief.
 */
'use strict';
const zlib = require('zlib');

const SIGNATURE = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

function chunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);
  const crcInput = Buffer.concat([typeBuf, data]);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(zlib.crc32(crcInput) >>> 0, 0);
  return Buffer.concat([lenBuf, typeBuf, data, crcBuf]);
}

/* rgb: a Buffer of exactly width*height*3 bytes, row-major, top row first, R-G-B per pixel.
   This is the one input shape the encoder accepts; it does not accept a canvas object, a typed
   array of a different layout, or anything with an alpha channel, by design. */
function encodePNG(width, height, rgb) {
  if (!Number.isInteger(width) || !Number.isInteger(height) || width <= 0 || height <= 0) {
    throw new Error('png_encode: width and height must be positive integers.');
  }
  const expected = width * height * 3;
  if (rgb.length !== expected) {
    throw new Error('png_encode: expected ' + expected + ' RGB bytes for ' + width + 'x' + height + ', got ' + rgb.length + '.');
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;  // bit depth
  ihdr[9] = 2;  // color type: truecolor, no alpha
  ihdr[10] = 0; // compression method: the only one PNG defines
  ihdr[11] = 0; // filter method: the only one PNG defines
  ihdr[12] = 0; // interlace method: none

  const stride = width * 3;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    const rowStart = y * (stride + 1);
    raw[rowStart] = 0; // filter type None for every scanline
    rgb.copy(raw, rowStart + 1, y * stride, y * stride + stride);
  }
  const idat = zlib.deflateSync(raw, { level: 9 });

  return Buffer.concat([
    SIGNATURE,
    chunk('IHDR', ihdr),
    chunk('IDAT', idat),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

module.exports = { encodePNG };
