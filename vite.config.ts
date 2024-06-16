import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  css: {
    preprocessorOptions: {
      css: {
        fileName: "styles.css", // Output CSS file name
      },
    },
  },
  build: {
    assetsDir: "src/assets",
    outDir: "dist",
    rollupOptions: {
      input: {
        home: "index.html",
        admissions: "admissions.html",
        programs: "explore-programs.html",
        tuition: "tuition-and-cost.html",
        studentServices: "student-support-services.html",
        successStories: "success-stories.html",
      },
      output: {
        entryFileNames: "js/[name].js", // Output JS file name with chunk names
        chunkFileNames: "js/[name]-[hash].js", // Output chunk names with hashes
        assetFileNames: "assets/[name]-[hash][extname]", // Output assets with hashes
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("src/pages")) {
            return "pages";
          }
          if (id.includes("src/components")) {
            return "components";
          }
          if (id.includes("src/utils")) {
            return "utils";
          }
          // Customize more as needed
        },
      },
    },
  },
  server: {
    fs: {
      strict: false,
    },
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
});
