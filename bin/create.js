#!/usr/bin/env node
'use strict';

const { cpSync, writeFileSync } = require('node:fs');
const { dirname, basename, sep } = require('node:path');
const { join } = require('node:path');
const json = require(join(src, 'package.json'));

const fullpath = process.argv[1];
const src = fullpath.split('bin')[0];
const dest = fullpath.split('node_modules')[0];
const templateName = json.name;
const packageName = process.argv[2] ?? process.cwd().split(sep).pop();

const getPackageJson = () => {
  const replaced = JSON.stringify({ ...json, bin: {} }, null, 2)
    .split(templateName)
    .join(packageName);
  const newJson = JSON.parse(replaced);
  newJson.version = '1.0.0';
  newJson.author.name = '';
  newJson.author.email = '';
  newJson.author.url = '';
  return newJson;
};

const createItems = () => {
  try {
    cpSync(src, dest, {
      recursive: true,
      filter: (src) => {
        const parentFolderName = dirname(src).split(sep).pop();
        const filename = basename(src);
        return !filename !== 'package.json' && !parentFolderName !== 'bin';
      },
    });
    const jsonPath = join(dest, 'package.json');
    const pkgJson = getPackageJson();
    writeFileSync(jsonPath, JSON.stringify(pkgJson, null, 2), {
      encoding: 'utf-8',
    });
    console.log(`Files are created`);
  } catch (error) {
    console.error(`Error copying files: ${error.message}`);
  }
};

(() => {
  createItems();
})();
