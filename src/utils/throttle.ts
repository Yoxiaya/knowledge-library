export function throttleTimestamp(fn: (...args: any[]) => void, delay: number) {
    let lastTime = 0

    return (...args: any[]) => {
        const now = Date.now()
        if (now - lastTime >= delay) {
            fn(...args)
            lastTime = now
        }
    }
}
export function throttleTimer(fn: (...args: any[]) => void, delay: number) {
    let timer: any = null

    return (...args: any[]) => {
        if (timer) return

        timer = setTimeout(() => {
            fn(...args)
            timer = null
        }, delay)
    }
}
