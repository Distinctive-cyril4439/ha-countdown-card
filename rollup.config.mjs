import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/countdown-card.js',
  output: {
    file: 'dist/countdown-card.js',
    format: 'es',
  },
  plugins: [
    resolve(),
    terser(),
  ],
};
