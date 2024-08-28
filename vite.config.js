import { defineConfig, loadEnv } from 'vite';
import path from 'path'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    root: path.resolve(__dirname, 'frontend'),
    base: '/', 
    test: {
      globals: true,
      environment: "jsdom",
      coverage: {
        enabled: true,
        reporter: ['text', 'html']
      }
    },
    build: {
      
      outDir: path.resolve(__dirname, 'frontend', 'dist'),
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'frontend', 'index.html'),
          profile: path.resolve(__dirname, 'frontend', 'src', 'profile.html'),
          spanish: path.resolve(__dirname, 'frontend', 'src', 'learn-spanish.html'),
          yoruba: path.resolve(__dirname, 'frontend', 'src', 'learn-yoruba.html'),
          login: path.resolve(__dirname, 'frontend', 'src', 'login.html'),
          signup: path.resolve(__dirname, 'frontend', 'src', 'sign_up.html'),
      }
    },
    emptyOutDir: true,
}
}
});
