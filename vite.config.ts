import { defineConfig } from 'vite';
import path from 'path';
import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react-swc';
import remarkGfm from 'remark-gfm';
// @ts-ignore
import remarkPrism from 'remark-prism';

export default defineConfig({
    plugins: [mdx({ remarkPlugins: [remarkGfm, remarkPrism] }), react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
