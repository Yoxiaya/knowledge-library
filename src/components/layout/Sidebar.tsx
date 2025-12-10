import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const menu = [
    {
        category: 'JavaScript',
        items: [
            { name: '防抖', path: '/js/debounce' },
            { name: '节流', path: '/js/throttle' },
            { name: '深拷贝', path: '/js/deepclone' },
        ],
    },
    {
        category: 'Browser',
        items: [{ name: 'Event Loop', path: '/browser/event-loop' }],
    },
    {
        category: 'React',
        items: [{ name: 'useEffect Demo', path: '/react/use-effect' }],
    },
]

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div
            className={`flex flex-col h-full ${collapsed ? 'w-16' : 'w-64'} transition-width duration-300 bg-gray-800 text-gray-100`}
        >
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
                {!collapsed && <h1 className="font-bold text-lg">知识库</h1>}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="text-gray-300 hover:text-white"
                >
                    {collapsed ? '→' : '←'}
                </button>
            </div>
            <div className="flex-1 overflow-auto p-4">
                {menu.map((block) => (
                    <div key={block.category} className="mb-6">
                        {!collapsed && (
                            <h2 className="text-sm font-semibold mb-2 text-gray-400">
                                {block.category}
                            </h2>
                        )}
                        <ul className="space-y-1">
                            {block.items.map((item) => (
                                <li key={item.path}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            'block px-2 py-1 rounded ' +
                                            (isActive
                                                ? 'bg-blue-500 text-white'
                                                : 'hover:bg-gray-700')
                                        }
                                    >
                                        {collapsed ? item.name[0] : item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}
