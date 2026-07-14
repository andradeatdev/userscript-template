import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";

const header = `
// ==UserScript==
// @name               Template script
// @namespace          https://greasyfork.org/users/821661
// @version            0.1
// @description        template script
// @author             hdyzen
// @match              https://example.com/*
// @icon               https://www.google.com/s2/favicons?domain=example.com
// @grant              none
// ==/UserScript==
`.trimStart();

export default {
  input: "src/index.ts",
  output: {
    file: "dist/script.user.js",
    format: "cjs",
    strict: false,
    banner: header,
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      retainLines: true,
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-typescript"],
      extensions: [".js", ".ts"],
    }),
  ]
};