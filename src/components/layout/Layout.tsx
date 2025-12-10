import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className="flex h-screen bg-gray-100 text-gray-900">
            <Sidebar />
            <main className="flex-1 p-8 overflow-auto">
                <Outlet />
            </main>
        </div>
    )
}
