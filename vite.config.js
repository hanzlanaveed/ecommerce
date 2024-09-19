import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  "build": {
    "env": {
      "NODE_ENV": "production"
    }
  },
  assetsInclude: ['**/*.PNG'],
  plugins: [react()],
  build: {
    assetsInlineLimit: 0, // Disable inlining for assets (e.g., images)
  },
})
