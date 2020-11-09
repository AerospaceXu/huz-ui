import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/library.tsx',
  external: ['react', 'react-dom'],
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  output: {
    file: 'huz-ui/index.js',
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
