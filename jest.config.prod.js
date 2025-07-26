/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testMatch: [
    '**/__tests__/**/*.?([mc])js?(x)',
    '**/?(*.)+(spec|test).?([mc])js?(x)',
  ],
  detectOpenHandles: true,
};

module.exports = config;
