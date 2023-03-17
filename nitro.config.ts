import { defineNitroConfig } from 'nitropack';

export default defineNitroConfig({
  routeRules: {
    '/api/**': {
      cors: true,
      headers: { 'access-control-allow-methods': 'GET,POST,OPTIONS' },
    },
  },
});
