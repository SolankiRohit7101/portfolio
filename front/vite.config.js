import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://portfolio-xagb.onrender.com/",
        secure: true,
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
