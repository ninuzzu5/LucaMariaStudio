import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, loadEnv} from 'vite';

// Plugin to serve /Img/ and /font/ from project root as static assets
function serveLocalAssets() {
  const rootDir = path.resolve(__dirname);
  return {
    name: 'serve-local-assets',
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        const url = decodeURIComponent(req.url || '');
        const normalized = url.split('?')[0];
        if (normalized.startsWith('/Img/') || normalized.startsWith('/font/')) {
          const filePath = path.join(rootDir, normalized);
          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const ext = path.extname(filePath).toLowerCase();
            const mimeTypes: Record<string, string> = {
              '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg',
              '.png': 'image/png', '.svg': 'image/svg+xml',
              '.ttf': 'font/ttf', '.woff': 'font/woff', '.woff2': 'font/woff2',
            };
            res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
            res.setHeader('Cache-Control', 'public, max-age=3600');
            fs.createReadStream(filePath).pipe(res);
            return;
          }
        }
        next();
      });
    },
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), serveLocalAssets()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
