import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.tsx',
  external: ['react', 'react-dom'],
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  output: {
    file: 'dist/index.js',
    format: 'es',
  },
  plugins: [
    typescript({
      exclude: 'node_modules/**',
      // eslint-disable-next-line global-require
      typescript: require('typescript'),
    }),
  ],
};
