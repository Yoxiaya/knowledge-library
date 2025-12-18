import { NavLink } from 'react-router-dom';
import { menu } from '@/config/silderBarMenu';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // 需要安装 lucide-react: npm install lucide-react

export default function Sidebar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // 侧边栏内容组件
    const SidebarContent = () => (
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
                <h1 className="font-bold text-lg">知识库</h1>
                {/* 移动端关闭按钮 */}

                <button
                    className="lg:hidden p-2 rounded-md hover:bg-gray-700"
                    onClick={closeMobileMenu}
                    aria-label="关闭菜单"
                >
                    <X size={24} />
                </button>
            </div>
            <div className="flex-1 overflow-auto p-4">
                {menu.map((block) => (
                    <div key={block.category} className="mb-6">
                        <h2 className="text-sm font-semibold mb-2 text-gray-400">
                            {block.category}
                        </h2>
                        <ul className="space-y-1">
                            {block.items.map((item) => (
                                <li key={item.path}>
                                    <NavLink
                                        to={item.path}
                                        onClick={closeMobileMenu}
                                        className={({ isActive }) =>
                                            'block px-2 py-1 rounded ' +
                                            (isActive
                                                ? 'bg-blue-500 text-white'
                                                : 'hover:bg-gray-700')
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <>
            {/* 移动端菜单按钮 - 固定在左上角 */}
            {!isMobileMenuOpen && (
                <button
                    className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white shadow-lg"
                    onClick={toggleMobileMenu}
                    aria-label="打开菜单"
                >
                    <Menu size={24} />
                </button>
            )}

            {/* 移动端遮罩层 */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={closeMobileMenu}
                    aria-hidden="true"
                />
            )}

            {/* 侧边栏 - 响应式设计 */}
            <div
                className={`
                    fixed lg:relative
                    top-0 left-0 lg:left-auto
                    h-full
                    w-64 lg:w-64
                    transition-transform duration-300 ease-in-out lg:transition-width
                    bg-gray-800 text-gray-100
                    z-40
                    ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                `}
            >
                <SidebarContent />
            </div>
        </>
    );
}
