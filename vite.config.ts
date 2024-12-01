import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { createRoutesFromFolders } from '@remix-run/v1-route-convention';

declare module '@remix-run/node' {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true
      },
      ignoredRouteFiles: ['**/.*'],
      routes(defineRoutes) {
        return createRoutesFromFolders(defineRoutes);
      }
    }),
    tsconfigPaths()
  ],
  server: {
    port: 3000
  }
});
