import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import autoprefixer from "autoprefixer";

export default defineConfig(() => {
  return {
    base: "./",
    build: {
      outDir: "build"
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer({}) // add options if needed
        ]
      },
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          silenceDeprecations: ["import", "legacy-js-api"]
        }
      }
    },
    esbuild: {
      loader: "jsx",
      include: /src\/.*\.jsx?$/,
      exclude: []
    },
    optimizeDeps: {
      force: true,
      esbuildOptions: {
        loader: {
          ".js": "jsx"
        }
      }
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@assets": fileURLToPath(new URL("./src/assets/", import.meta.url)),
        "@images": fileURLToPath(
          new URL("./src/assets/images/", import.meta.url)
        ),
        "@views": fileURLToPath(new URL("./src/views/", import.meta.url)),
        "@components": fileURLToPath(
          new URL("./src/components", import.meta.url)
        )
      },
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".scss"]
    },
    server: {
      port: 3000,
      watch: {
        usePolling: true
      },
      proxy: {
        // https://vitejs.dev/config/server-options.html
      }
    }
  };
});
