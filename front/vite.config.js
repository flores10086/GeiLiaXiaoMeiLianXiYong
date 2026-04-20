import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// 1. 修改导入方式：使用具名导入 { resolve } 和 { fileURLToPath }
import { resolve } from 'path'
import { fileURLToPath } from 'url'

// 2. 手动模拟 __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve(__filename, '..') // 获取当前文件所在的目录

// 3. 保持你的路径处理函数逻辑不变
const pathResolve = (dir) => resolve(__dirname, dir)

export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
      symbolId: 'icon-[name]',
    }),
  ],
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  },
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

