import { useState } from 'react';
import { MyPromise } from '@/utils/myPromise';

export default function PromiseHandwrittenDemo() {
    const [log, setLog] = useState('');

    const runPromise = () => {
        setLog('');

        const p = new MyPromise((resolve) => {
            setTimeout(() => {
                resolve('手写 Promise 完成！');
            }, 800);
        });

        p.then((res: any) => {
            setLog(String(res));
        });
    };

    return (
        <div className="p-4 space-y-4">
            <h2 className="text-xl font-bold">手写 Promise Demo</h2>

            <button onClick={runPromise} className="px-4 py-2 bg-indigo-500 text-white rounded">
                运行手写 Promise
            </button>

            {log && <p className="text-gray-700">结果：{log}</p>}
        </div>
    );
}
