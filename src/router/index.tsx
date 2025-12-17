import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import ExampleViewer from '@/pages/ExampleViewer'

// 未来可以用自动扫描实现动态导入
import Debounce from '@/examples/js/debounce'
import DebounceDoc from '@/docs/js/debounce.mdx'
import Throttle from '@/examples/js/throttle'
import ThrottleDoc from '@/docs/js/throttle.mdx'
import PromiseHandwrittenDemo from '@/examples/js/promise-handwritten'
import PromiseBasic from '@/examples/js/promise-basic'
import PromiseDoc from '@/docs/js/promise.mdx'
import EventLoopDemo from '@/examples/browser/event-loop'
import EventLoopDoc from '@/docs/browser/eventloop.mdx'
import ReduxExample from '@/examples/react/redux'
import ReduxDoc from '@/docs/react/redux.mdx'

import NotFound from '@/pages/NotFound'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'js/debounce',
                element: <ExampleViewer demo={<Debounce />} doc={<DebounceDoc />} />,
            },
            {
                path: 'js/throttle',
                element: <ExampleViewer demo={<Throttle />} doc={<ThrottleDoc />} />,
            },
            {
                path: 'js/promise',
                element: <ExampleViewer demo={<PromiseBasic />} doc={<PromiseDoc />} />,
            },
            {
                path: 'js/promise-handwritten',
                element: <ExampleViewer demo={<PromiseHandwrittenDemo />} doc={<PromiseDoc />} />,
            },
            {
                path: 'browser/event-loop',
                element: <ExampleViewer demo={<EventLoopDemo />} doc={<EventLoopDoc />} />,
            },
            {
                path: 'react/redux',
                element: <ExampleViewer demo={<ReduxExample />} doc={<ReduxDoc />} />,
            },
        ],
    },

    {
        path: '*',
        element: <NotFound />,
    },
])
