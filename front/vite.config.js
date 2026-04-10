import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve }  from 'path'
import path from 'path'
import { fileURLToPath } from 'url'
const pathResolve = dir => path.resolve(__dirname, dir)


const __dirname = path.dirname(fileURLToPath(import.meta.url))
export default defineConfig({
  plugins:[
    vue(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(),'src/assets/svg')],symbolId:'icon-[name]',}),],
  server: {
    port: 8080,
    open: true,
    cors: true,
  },
  resolve: {
    alias: {
      '@': pathResolve('./src')
    }
  }
})