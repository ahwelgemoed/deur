import { defineConfig } from "tsup";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/**/*.ts"], //include all files under src
  format: ["cjs"],
  minify: isProduction,
  sourcemap: true,
  watch: !isProduction,
});
