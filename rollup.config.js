import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import babel from "rollup-plugin-babel"
import pkg from "./package.json"

export default [
  {
    entry: "index.js",
    dest: pkg.browser,
    format: "umd",
    external: Object.keys(pkg.dependencies || {}),
    moduleName: "ReactFetching",
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: ["node_modules/**"],
      }),
    ],
  },
  {
    entry: "index.js",
    external: ["react", "react-json-fetch"],
    targets: [
      { dest: pkg.main, format: "cjs" },
      { dest: pkg.module, format: "es" },
    ],
    plugins: [
      babel({
        exclude: ["node_modules/**"],
      }),
    ],
  },
]
