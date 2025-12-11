export function debounce(fn: (...args: any[]) => void, delay: number) {
    let timer: any = null

    return function (...args: any[]) {
        if (timer) clearTimeout(timer)

        timer = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}
export function debounceImmediate(fn: (...args: any[]) => void, delay: number) {
    let timer: any = null

    return (...args: any[]) => {
        const isFirst = !timer

        if (timer) clearTimeout(timer)

        timer = setTimeout(() => {
            timer = null
        }, delay)

        if (isFirst) {
            fn(...args)
        }
    }
}
