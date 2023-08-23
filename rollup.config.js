const lwc = require('@lwc/rollup-plugin');
const replace = require('@rollup/plugin-replace');
const serve = require('rollup-plugin-serve');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

const __ENV__ = process.env.NODE_ENV ?? 'development';

module.exports = (args) => {
  return {
    input: 'src/main.js',

    output: {
      file: 'dist/main.js',
      format: 'esm',
    },

    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify(__ENV__),
        preventAssignment: true,
      }),
      resolve({
        browser: true
      }),
      lwc({
        exclude: [/node_modules\/js-cookie.+?\.[m|c]?[j|t]s$/g],
      }),
      commonjs({
        extensions: ['.js', '.ts', '.mjs'],
      }),
      args.watch &&
        serve({
          open: false,
          port: 3000,
        }),
    ],
  };
};
