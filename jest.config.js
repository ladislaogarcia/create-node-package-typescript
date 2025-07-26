import { createDefaultPreset } from 'ts-jest';

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
export default {
  verbose: true,
  testMatch: [
    '**/__tests__/**/*.?(m)ts?(x)',
    '**/?(*.)+(spec|test).?(m)ts?(x)',
  ],
  detectOpenHandles: true,
  transform: {
    ...tsJestTransformCfg,
  },
};
