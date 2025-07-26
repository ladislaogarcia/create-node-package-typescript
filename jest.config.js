import { createDefaultPreset } from 'ts-jest';

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
export default {
  verbose: true,
  testMatch: [
    '**/__tests__/**/*.?([mc])js?(x)',
    '**/?(*.)+(spec|test).?([mc])js?(x)',
  ],
  detectOpenHandles: true,
  transform: {
    ...tsJestTransformCfg,
  },
};
