// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  build: {
    assetsDir: "assets",
    rollupOptions: {
      input: {
        home: "/index.html",
        admissions: "/admissions.html",
      },
    },
  },
  server: {
    fs: {
      strict: false,
    },
  },
});
