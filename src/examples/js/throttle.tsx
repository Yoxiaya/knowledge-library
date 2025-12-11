import { useState, useCallback } from 'react'
import { throttleTimestamp, throttleTimer } from '@/utils/throttle'

export default function ThrottleDemo() {
    const [countA, setCountA] = useState(0)
    const [countB, setCountB] = useState(0)

    const handleMoveTimestamp = useCallback(
        throttleTimestamp(() => {
            setCountA((c) => c + 1)
        }, 1000),
        [],
    )

    const handleMoveTimer = useCallback(
        throttleTimer(() => {
            setCountB((c) => c + 1)
        }, 1000),
        [],
    )

    return (
        <div className="p-4 space-y-4">
            <h2 className="text-xl font-bold">节流（Throttle）Demo</h2>

            <div className="p-4 border rounded-lg">
                <p className="font-medium mb-2">方式 A：时间戳版（立即执行）</p>
                <div
                    onMouseMove={handleMoveTimestamp}
                    className="h-24 bg-blue-100 rounded-lg flex items-center justify-center"
                >
                    Move mouse here
                </div>
                <p className="mt-2">触发次数：{countA}</p>
            </div>

            <div className="p-4 border rounded-lg">
                <p className="font-medium mb-2">方式 B：定时器版（最后一次执行）</p>
                <div
                    onMouseMove={handleMoveTimer}
                    className="h-24 bg-green-100 rounded-lg flex items-center justify-center"
                >
                    Move mouse here
                </div>
                <p className="mt-2">触发次数：{countB}</p>
            </div>
        </div>
    )
}
