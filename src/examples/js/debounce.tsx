import { useState } from 'react'

function debounce(fn: Function, delay = 500) {
    let timer: number | null = null
    return (...args: any[]) => {
        if (timer) clearTimeout(timer)
        timer = window.setTimeout(() => fn(...args), delay)
    }
}

export default function DebounceDemo() {
    const [value, setValue] = useState('')

    const handleInput = debounce((v: string) => {
        setValue(v)
    }, 500)

    return (
        <div>
            <input
                placeholder="输入触发 debounce"
                className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => handleInput(e.target.value)}
            />
            <p className="mt-3 text-gray-700">防抖结果：{value}</p>
        </div>
    )
}
