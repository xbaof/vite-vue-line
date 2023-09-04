import { ConfigEnv, UserConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'
import eslintPlugin from 'vite-plugin-eslint'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  return {
    base: env.VITE_PUBLIC_PATH,
    root,
    plugins: [
      vue(),
      eslintPlugin(),
      viteCompression({
        verbose: true, // 是否在控制台中输出压缩结果
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
        deleteOriginFile: true // 源文件压缩后是否删除
      }),
      createHtmlPlugin({
        inject: {
          data: {
            title: env.VITE_GLOB_TITLE
          }
        }
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/')
      }
    },
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                // 去除elementPlus内部charset警告
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              }
            }
          }
        ]
      }
    },
    server: {
      host: '0.0.0.0',
      port: Number(env.VITE_PORT),
      open: Boolean(env.VITE_OPEN),
      // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
      strictPort: false,
      // 自定义代理规则
      proxy: {
        // 字符串简写写法
        '/foo': 'http://localhost:4567/foo',
        // 选项写法
        '/api': {
          target: 'http://jsonplaceholder.typicode.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        // 正则表达式写法
        '^/fallback/.*': {
          target: 'http://jsonplaceholder.typicode.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/fallback/, '')
        }
      }
    },
    build: {
      sourcemap: false,
      minify: 'terser',
      terserOptions: {
        compress: {
          // 生产环境时移除console
          drop_console: Boolean(env.VITE_DROP_CONSOLE),
          drop_debugger: true
        }
      },
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 2000
    }
  }
}
