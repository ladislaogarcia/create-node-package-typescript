#!/usr/bin/env node
'use strict';

const { cpSync } = require('node:fs');
const { sep, join } = require('node:path');
const fullpath = process.argv[1];
console.log('fullpath', fullpath);
const src = fullpath.split('bin')[0];
const folderName = src
  .split(sep)
  .filter((item) => !!item)
  .pop();
const dest = join(fullpath.split('node_modules')[0], folderName);

const createItems = () => {
  try {
    cpSync(src, dest, { recursive: true });
    console.log(`Files are created`);
  } catch (error) {
    console.error(`Error copying files: ${error.message}`);
  }
};

(() => {
  createItems();
})();
