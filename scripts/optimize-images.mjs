// One-off image optimization pass. Re-encodes each shipped image in place,
// keeping its exact pixel dimensions and file format, using visually lossless
// settings. A file is only overwritten if the re-encode is actually smaller.
import { readFileSync, writeFileSync, statSync, readFileSync as read } from 'node:fs'
import sharp from 'sharp'

const files = read('/tmp/used_images.txt', 'utf8').split('\n').map((s) => s.trim()).filter(Boolean)

const fmt = (n) => (n / 1024).toFixed(0) + ' KB'
let before = 0
let after = 0

for (const file of files) {
  const input = readFileSync(file)
  before += input.length
  const img = sharp(input, { failOn: 'none' })
  const meta = await img.metadata()
  const ext = file.toLowerCase().split('.').pop()

  let out
  if (ext === 'jpg' || ext === 'jpeg') {
    out = await sharp(input).jpeg({ quality: 82, mozjpeg: true, progressive: true }).toBuffer()
  } else {
    // PNG: pngquant-style palette quantization (libimagequant) at high quality,
    // with max zlib compression. Preserves alpha and is visually lossless.
    out = await sharp(input)
      .png({ quality: 90, palette: true, effort: 10, compressionLevel: 9, dither: 1.0 })
      .toBuffer()
    // For truecolor photos where palette output is somehow larger, fall back to
    // a lossless truecolor re-compress and keep whichever is smaller.
    if (out.length >= input.length) {
      const lossless = await sharp(input)
        .png({ palette: false, effort: 10, compressionLevel: 9 })
        .toBuffer()
      if (lossless.length < out.length) out = lossless
    }
  }

  if (out.length < input.length) {
    writeFileSync(file, out)
    after += out.length
    console.log(`OPT  ${fmt(input.length)} -> ${fmt(out.length)}  (${meta.width}x${meta.height})  ${file}`)
  } else {
    after += input.length
    console.log(`keep ${fmt(input.length)}  ${file}`)
  }
}

console.log(`\nTOTAL  ${fmt(before)} -> ${fmt(after)}  (saved ${fmt(before - after)}, ${((1 - after / before) * 100).toFixed(1)}%)`)
