// src/sw.js
import { precacheAndRoute } from 'workbox-precaching'

// Utilisez la liste des fichiers générée automatiquement par le plugin vite-plugin-pwa
precacheAndRoute(self.__WB_MANIFEST)
