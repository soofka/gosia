import { promises as fs } from 'fs';
import { minify } from 'html-minifier';

const buffer = await fs.readFile('src/index.html');
const raw = buffer.toString();
const minified = minify(raw, {
  collapseWhitespace: true,
  minifyCSS: true,
  minifyJS: true,
  removeComments: true,
  removeEmptyAttributes: true,
  removeEmptyElements: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
});

try {
  await fs.mkdir('dist');
} catch(e) {}

await fs.writeFile('dist/index.html', minified);
await fs.copyFile('src/swetr.jpg', 'dist/swetr.jpg');

console.log('Minification completed.');