import { globSync } from 'glob';
import Path from 'path';
import { fileURLToPath } from 'url';

const __dirname = Path.dirname(fileURLToPath(import.meta.url));
const appFolder = Path.join(__dirname, '../src/app');

function getPathsByExtensions(path, extensions) {
  const extensionsSet = new Set(extensions.map((e) => `.${e.toLowerCase()}`));

  return globSync('*', {
    withFileTypes: true,
    cwd: path,
    matchBase: true,
    nocase: true,
    nodir: true,
  }).filter((p) => {
    return extensionsSet.has(Path.extname(p.name).toLowerCase());
  });
}

function relativeReplacingInDirs(path, reg, s) {
  const parts = path.relative().split('/');
  let relative = '';
  for (const part of parts) {
    relative += `${part.replace(reg, s)}/`;
  }
  return relative;
}

function findDuplicates(values) {
  const counter = {};

  values.forEach((value) => {
    const relative = value.relative();
    counter[relative] = (counter[relative] ?? 0) + 1;
  });
  return Object.entries(counter)
    .filter(([_key, count]) => 1 < count)
    .map(([key, _count]) => key);
}

function setUpRoutes() {
  const paths = getPathsByExtensions(appFolder, ['tsx']);
  const duplicates = findDuplicates(paths);

  if (0 === paths.length) {
    throw new Error('Not routes found');
  }

  if (duplicates.length) {
    throw new Error(`Duplicate routes: ${duplicates.toString()}`);
  }

  // console.log(paths);
  for (const path of paths) {
    const modulePath = path.relative();
    const routePath = relativeReplacingInDirs(path, /^_/, ':');
    const matches = routePath.match(/^(?<page>.*)(?<ext>\..*)$/i);

    console.log(modulePath);
    // console.log(routePath);
    // console.log(matches);
  }
}

setUpRoutes();
