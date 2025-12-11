import { useState, useCallback } from 'react'
import { debounce, debounceImmediate } from '@/utils/debounce'

export default function DebounceDemo() {
    const [search, setSearch] = useState('')
    const [immediateValue, setImmediateValue] = useState('')

    // 非立即执行版：输入停止 500ms 后触发
    const handleInput = useCallback(
        debounce((value: string) => {
            setSearch(value)
        }, 500),
        [],
    )

    // 立即执行版：第一次输入立即触发
    const handleImmediateInput = useCallback(
        debounceImmediate((value: string) => {
            setImmediateValue(value)
        }, 500),
        [],
    )

    return (
        <div className="p-4 space-y-6">
            <h2 className="text-xl font-bold">防抖（Debounce）Demo</h2>

            {/* 非立即执行 */}
            <div className="p-4 border rounded-lg space-y-2">
                <p className="font-medium">方式 A：非立即执行（搜索输入框）</p>
                <input
                    type="text"
                    onChange={(e) => handleInput(e.target.value)}
                    placeholder="停止输入 500ms 才触发"
                    className="border p-2 rounded w-full"
                />
                <p className="mt-2 text-gray-700">触发值：{search}</p>
            </div>

            {/* 立即执行 */}
            <div className="p-4 border rounded-lg space-y-2">
                <p className="font-medium">方式 B：立即执行（leading）</p>
                <input
                    type="text"
                    onChange={(e) => handleImmediateInput(e.target.value)}
                    placeholder="第一次立即触发，后续需等待 delay"
                    className="border p-2 rounded w-full"
                />
                <p className="mt-2 text-gray-700">触发值：{immediateValue}</p>
            </div>
        </div>
    )
}
