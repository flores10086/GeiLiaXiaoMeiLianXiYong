import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { reslove } from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
const pathResolve = dir => reslove(__dirname,dir)

export default defineConfig({
  plugins:[vue(),
            createSvgIconsPlugin({
              iconDirs: [reslove(process.cwd(),'src/assets/svg')],
              symbolId:'icon-[dir]-[name]',
            }),
          ],
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