import { useState } from 'react'

function mockRequest(success = true, delay = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            success ? resolve('请求成功！') : reject('请求失败！')
        }, delay)
    })
}

export default function PromiseBasicDemo() {
    const [result, setResult] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSuccess = async () => {
        setLoading(true)
        setResult('')

        try {
            const res = await mockRequest(true)
            setResult(String(res))
        } catch (e) {
            setResult(String(e))
        } finally {
            setLoading(false)
        }
    }

    const handleFail = async () => {
        setLoading(true)
        setResult('')

        try {
            const res = await mockRequest(false)
            setResult(String(res))
        } catch (e) {
            setResult(String(e))
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="p-4 space-y-4">
            <h2 className="text-xl font-bold">Promise 基础用法 Demo</h2>

            <div className="space-x-3">
                <button
                    onClick={handleSuccess}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    请求成功（resolve）
                </button>
                <button onClick={handleFail} className="px-4 py-2 bg-red-500 text-white rounded">
                    请求失败（reject）
                </button>
            </div>

            {loading && <p>请求中...</p>}
            {!loading && result && <p className="text-gray-700">结果：{result}</p>}
        </div>
    )
}
