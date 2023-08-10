import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [react(), VitePWA({
        // includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
        manifest: {
            name: 'My Awesome App',
            short_name: 'MyApp',
            description: 'My Awesome App description',
            theme_color: '#ffffff',
            icons: [
                {
                    "src": "android/android-launchericon-512-512.png",
                    "sizes": "512x512",
                    "type": "image/png"
                },
                {
                    "src": "android/android-launchericon-192-192.png",
                    "sizes": "192x192",
                    "type": "image/png"
                },
            ]
        }
    })],
    build: {
        outDir: 'docs',
    },
    server: {
        port: 3000,
    },
    preview: {
        port: 3001,
    },
})
