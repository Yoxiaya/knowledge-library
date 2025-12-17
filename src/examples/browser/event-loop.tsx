import React, { useState, useEffect } from 'react'

// 用于演示的函数：宏任务、微任务
const runEventLoopDemo = () => {
    const list: number[] = []
    const p = new Promise<number>((resolve) => {
        list.push(4)
        resolve(5)
    })
    function func1() {
        list.push(1)
    }
    function func2() {
        setTimeout(() => {
            list.push(2)
        }, 0)
        func1()
        list.push(3)
        p.then((res) => {
            list.push(res)
        }).then(() => {
            list.push(6)
        })
    }
    func2()
    return list
}

const EventLoopDemo: React.FC = () => {
    const [events, setEvents] = useState<number[]>([])

    useEffect(() => {
        // 运行 EventLoop Demo
        const list = runEventLoopDemo()
        setEvents(list)
    }, [])

    return (
        <div>
            <h2>JavaScript EventLoop 可视化演示</h2>
            <div>
                <p>执行顺序：</p>
                <ul>
                    {events.map((event, index) => (
                        <li key={index}>{event}</li>
                    ))}
                </ul>
            </div>
            <p>
                上面列出了宏任务和微任务的执行顺序。首先执行宏任务（如
                `setTimeout`），然后执行微任务（如 `Promise`）。
                事件循环会等待所有微任务执行完再执行下一个宏任务。
            </p>
        </div>
    )
}

export default EventLoopDemo
