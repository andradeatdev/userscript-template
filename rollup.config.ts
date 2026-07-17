import path from "node:path";
import { fileURLToPath } from "node:url";
import alias from "@rollup/plugin-alias";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import metablock from "rollup-plugin-userscript-meta";

export default {
	input: "src/index.ts",
	output: {
		file: "dist/script.user.js",
		format: "esm",
		strict: false,
	},
	watch: {
		clearScreen: false,
	},
	plugins: [
		metablock({
			name: "Example",
			version: "1.0.0",
			match: ["https://example.com/*"],
		}),
		alias({
			entries: [
				{
					find: "@",
					replacement: path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src"),
				},
			],
		}),
		replace({
			preventAssignment: true,
			values: {
				__VERSION__: JSON.stringify("1.6.0"),
			},
		}),
		resolve({ extensions: [".js", ".ts"], browser: true }),
		commonjs(),
		babel({
			babelHelpers: "bundled",
			retainLines: true,
			exclude: "node_modules/**",
			presets: ["@babel/preset-env", "@babel/preset-typescript"],
			extensions: [".js", ".ts"],
		}),
	],
};
