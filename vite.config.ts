import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    VitePWA({
      manifest: {
      // toutes les options du manifeste ici
      name: 'PomodoroTimer',
      short_name: 'App',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/PomodoroTask/192.png',
          sizes: '192x192',
          type: 'image/png',
        },

      ],
    },
    workbox: {
      // toutes les options workbox ici
    }, })],
  base:'/PomodoroTask/'
})
