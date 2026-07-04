import { defineConfig } from 'tsup';

export default defineConfig({
  entry: { index: 'src/index.ts', codes: 'src/codes.ts' },
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  outDir: 'dist',
  target: ['es2022', 'node22'],
  platform: 'node',
  external: [],
  splitting: false,
  minify: false,
  treeshake: true,
  keepNames: true,
});
