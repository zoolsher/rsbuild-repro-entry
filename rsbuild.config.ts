import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  source: {
    entries: {
      "index": "./src/index.tsx",
      foo: "./src/foo.tsx",
    },
  },
  plugins: [pluginReact()],
});
