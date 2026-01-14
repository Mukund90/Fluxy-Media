import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import sitemap from 'vite-plugin-sitemap'; // 1. Import the plugin

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    // 2. Add the sitemap plugin here
    sitemap({ 
      hostname: 'https://fluxymedia.com', // Change to your actual domain
      dynamicRoutes: [
        '/',
        '/about',
        '/services',
        '/contact',
        // Add any other pages you have in your App.tsx routes
      ] 
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));