import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    host: true,  // Allows access on your local network
    port: 5173,  // Same port as your Vite app (or whichever you are using)
    allowedHosts: [
      "4e7a-2401-4900-1c88-275a-1172-4557-7945-c940.ngrok-free.app",  // Ngrok host (add more if needed)
    ],
  },
})
