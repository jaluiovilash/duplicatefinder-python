import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// ✅ Vite Configuration
export default defineConfig({
  plugins: [
    react(), // Enables React with SWC for faster builds
  ],

  // 🏗️ Build settings
  build: {
    outDir: "dist", // Output directory for the build
    sourcemap: true, // Optional: helps debug production builds
  },

  // ⚙️ Dev server configuration
  server: {
    open: true, // Automatically opens the app in the browser
    port: 8080, // Development server port
    host: true, // Makes it accessible on local network (optional)
  },

  // 🧭 Path alias for cleaner imports
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
