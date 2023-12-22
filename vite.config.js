import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    __APP_ENV__: JSON.stringify(import.meta.env)
  },
  resolve: {
    alias: {
      "@/": path.resolve(__dirname, "src") + "/",
      "~/public/": path.resolve(__dirname, "public") + "/"
    }
  },
  base: "./" // Set the base to the root directory
});
