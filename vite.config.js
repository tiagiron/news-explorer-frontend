import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/news-explorer-frontend/",
  server: {
    port: 3000, // Change the port number to 3000
  },
});
