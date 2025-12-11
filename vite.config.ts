import { defineConfig } from 'vite'
import path from 'path'
import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react-swc'
import remarkGfm from 'remark-gfm'

// https://vite.dev/config/
export default defineConfig({
    plugins: [mdx({ remarkPlugins: [remarkGfm] }), react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
