import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

function getRootPath() {
  return resolve(process.cwd())
}

const rootPath = getRootPath()
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss(),
    Components({
      dirs: ['src/components'],
      resolvers: [NaiveUiResolver()]
    })
  ],
  resolve: {
    extensions: ['.vue', '.ts'],
    alias: {
      '@': `${rootPath}/src`
    }
  },
  server: {
    port: 80,
    open: true
  }
})
