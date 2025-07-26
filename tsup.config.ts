import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  format: ['cjs', 'esm'],
  outExtension({ format }) {
    const extensions = {
      cjs: 'cjs',
      esm: 'mjs',
      iife: 'js',
    };
    const fileExt = extensions[format] ?? ` ${format}.js`;
    return {
      js: `.${fileExt}`,
    };
  },
});
