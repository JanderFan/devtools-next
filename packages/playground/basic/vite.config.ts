import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import commonjs from '@rollup/plugin-commonjs'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    commonjs(),
    VueDevTools({
      launchEditor: 'code',
    }),
    Unocss(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
      ],
    }),
    inspect(),
  ],
  server: {
    port: 3000,
  },
})
