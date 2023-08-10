import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [react(), VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'apple-touch-icon-180x180.png', 'maskable-icon-512x512.svg'],
        manifest: {
            id: 'io.github.windheart.twa',
            name: 'My PWA',
            short_name: 'MyPWA',
            description: 'My Awesome PWA',
            theme_color: '#ffffff',
            icons: [
                {
                    src: 'pwa-64x64.png',
                    sizes: '64x64',
                    type: 'image/png'
                },
                {
                    src: 'pwa-192x192.png',
                    sizes: '192x192',
                    type: 'image/png'
                },
                {
                    src: 'pwa-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                    purpose: 'any'
                },
                {
                    src: 'maskable-icon-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                    purpose: 'maskable'
                }
            ],
            "display_override": [
                "window-controls-overlay",
                "standalone",
                "browser"
            ],
            "edge_side_panel": {
                "preferred_width": 400
            },
            "orientation": "any",
            "handle_links": "preferred",
            "launch_handler": {
                "client_mode": "navigate-existing"
            },
            "dir": "ltr",
            "prefer_related_applications": false
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
