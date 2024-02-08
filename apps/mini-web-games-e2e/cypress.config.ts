import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run mini-web-games:serve',
        production: 'nx run mini-web-games:preview',
      },
      ciWebServerCommand: 'nx run mini-web-games:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
