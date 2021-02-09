/* eslint-disable */
import typescript from "rollup-plugin-typescript2";
import svg from "rollup-plugin-svg";
import scss from "rollup-plugin-scss";

export default {
  input: "./src/ui/index.ts",
  output: [
    {
      format: "es",
      file: "./src/lib/index.js",
    },
  ],
  plugins: [
    typescript({
      tsconfig: "./tsconfig.build.json",
      typescript: require("typescript"),
    }),
    svg({ base64: true }),
    scss(),
  ],
};
