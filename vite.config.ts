import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import zipPack from "vite-plugin-zip-pack";

export default defineConfig({
  plugins: [
    preact(),
    zipPack({
      outDir: "dist",
      outFileName: "over_new_tab.zip",
    }),
    zipPack({
      outDir: "dist",
      inDir: ".",
      outFileName: "sources.zip",
      filter: (fileName: string, filePath: string) => {
        if (
          filePath.startsWith("node_modules") ||
          filePath.startsWith("dist") ||
          filePath.startsWith(".vscode") ||
          filePath.startsWith(".git")
        )
          return false;
        if (fileName === ".env") return false;
        return true;
      },
    }),
  ],
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
    },
  },
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
