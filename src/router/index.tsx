import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import ExampleViewer from '@/pages/ExampleViewer'

// 未来可以用自动扫描实现动态导入
import Debounce from '@/examples/js/debounce'
import DebounceDoc from '@/docs/js/debounce.mdx'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'js/debounce',
                element: <ExampleViewer demo={<Debounce />} doc={<DebounceDoc />} />,
            },
        ],
    },
])
