import { defineConfig, loadEnv } from 'vite'
import { setupConfig } from './build/vite'
import { resolve } from 'path'

export function getRootPath(...dir) {
  return resolve(process.cwd(), ...dir)
}

const rootPath = getRootPath()

// https://vitejs.dev/config/
export default defineConfig(ConfigEnv => {
  const viteEnv = loadEnv(ConfigEnv.mode, process.cwd())
  return {
    ...setupConfig(viteEnv),
    resolve: {
      extensions: ['.vue', '.ts'],
      alias: {
        '@': `${rootPath}/src`
      }
    },
  }

})
