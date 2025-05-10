import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: [
      {
        find: 'Api',
        replacement: fileURLToPath(new URL('./src/process/api', import.meta.url)),
      },
      {
        find: 'Helpers',
        replacement: fileURLToPath(new URL('./src/process/helpers', import.meta.url)),
      },
      {
        find: 'Locales',
        replacement: fileURLToPath(new URL('./src/process/locales', import.meta.url)),
      },
      {
        find: 'Reducers',
        replacement: fileURLToPath(new URL('./src/process/reducers', import.meta.url)),
      },
      {
        find: 'Redux',
        replacement: fileURLToPath(new URL('./src/process/redux', import.meta.url)),
      },
      {
        find: 'Routes',
        replacement: fileURLToPath(new URL('./src/process/routes', import.meta.url)),
      },
      {
        find: 'Sagas',
        replacement: fileURLToPath(new URL('./src/process/sagas', import.meta.url)),
      },
      {
        find: 'Constants',
        replacement: fileURLToPath(new URL('./src/process/constants', import.meta.url)),
      },
      {
        find: 'Images',
        replacement: fileURLToPath(new URL('./src/show/assets/images', import.meta.url)),
      },
      {
        find: 'Icons',
        replacement: fileURLToPath(new URL('./src/show/assets/icons', import.meta.url)),
      },
      {
        find: 'Theme',
        replacement: fileURLToPath(new URL('./src/show/assets/theme', import.meta.url)),
      },
      {
        find: 'Components',
        replacement: fileURLToPath(new URL('./src/show/components', import.meta.url)),
      },
      {
        find: 'Containers',
        replacement: fileURLToPath(new URL('./src/show/containers', import.meta.url)),
      },
      {
        find: 'Navigator',
        replacement: fileURLToPath(new URL('./src/show/navigator', import.meta.url)),
      },
      {
        find: 'Pages',
        replacement: fileURLToPath(new URL('./src/show/pages', import.meta.url)),
      },
    ],
  },
});
