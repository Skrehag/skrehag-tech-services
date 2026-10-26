import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'dist');
await fs.mkdir(output, { recursive: true });
for (const file of ['index.html', 'styles.css', 'script.js', 'site-config.js', 'robots.txt', 'sitemap.xml', '.nojekyll']) {
  await fs.copyFile(path.join(root, file), path.join(output, file));
}
await fs.cp(path.join(root, 'assets'), path.join(output, 'assets'), { recursive: true });
console.log('Static site prepared in dist/.');
