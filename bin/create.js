#!/usr/bin/env node
'use strict';

const { cpSync } = require('node:fs');
const fullpath = process.argv[1];
const src = fullpath.split('bin')[0];
const dest = fullpath.split('node_modules')[0];

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
