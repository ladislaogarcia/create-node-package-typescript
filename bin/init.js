#!/usr/bin/env node
'use strict';

const { cpSync, mkdirSync, existsSync } = require('node:fs');
const { sep, join } = require('node:path');
const fullpath = process.argv[1];
const src = fullpath.split('bin')[0];
const folderName = src
  .split(sep)
  .filter((item) => !!item)
  .pop();
const dest = join(fullpath.split('node_modules')[0], folderName);

const createItems = () => {
  if (existsSync(dest)) {
    console.log(`Folder "${folderName}" already exists.`);
    console.log(`You must renove it or use another one.`);
    return;
  }
  try {
    mkdirSync(dest, { recursive: true });
    console.log(`Folder ${folderName} has been created`);
  } catch (error) {
    console.log(`Error creating folder ${folderName}: ${error.message}`);
    return;
  }

  try {
    cpSync(src, dest, { recursive: true });
    console.log(`Files are created`);
  } catch (error) {
    console.error(`Error copying files: ${error.message}`);
  }
};

// const src = dirname();
// const dest = process.cwd();
// cpSync(src, dest, {recursive: true});

(() => {
  createItems();
})();
