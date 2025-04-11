import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: "index.js",
        assetFileNames: (assetInfo) => {
          return assetInfo.name ? "index.css" : "[name].[ext]";
        },
      },
    },
  },
});
