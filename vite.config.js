import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// export default defineConfig({
export default {
  plugins: [react()],
  build: {
    outDir: "dist",
  },
};
