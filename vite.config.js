import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Without this, the dev server's file watcher picks up every SQLite write
    // (server/data/app.sqlite* — written on every form submission) and every
    // uploaded image (server/uploads/), triggering a full page reload/redirect
    // to "/" mid-interaction even though nothing in the frontend source changed.
    watch: {
      ignored: ["**/server/data/**", "**/server/uploads/**"],
    },
    proxy: {
      "/api": { target: "http://localhost:4000", changeOrigin: true },
      "/uploads": { target: "http://localhost:4000", changeOrigin: true },
    },
  },
})
