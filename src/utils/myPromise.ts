type Status = 'pending' | 'fulfilled' | 'rejected'

export class MyPromise {
    private status: Status = 'pending'
    private value: any = null
    private reason: any = null

    private onFulfilledCallbacks: Function[] = []
    private onRejectedCallbacks: Function[] = []

    constructor(executor: (resolve: Function, reject: Function) => void) {
        const resolve = (value: any) => {
            if (this.status === 'pending') {
                this.status = 'fulfilled'
                this.value = value
                this.onFulfilledCallbacks.forEach((fn) => fn(value))
            }
        }

        const reject = (reason: any) => {
            if (this.status === 'pending') {
                this.status = 'rejected'
                this.reason = reason
                this.onRejectedCallbacks.forEach((fn) => fn(reason))
            }
        }

        try {
            executor(resolve, reject)
        } catch (err) {
            reject(err)
        }
    }

    then(onFulfilled?: Function, onRejected?: Function) {
        if (this.status === 'fulfilled') {
            onFulfilled && onFulfilled(this.value)
        }

        if (this.status === 'rejected') {
            onRejected && onRejected(this.reason)
        }

        if (this.status === 'pending') {
            if (onFulfilled) this.onFulfilledCallbacks.push(onFulfilled)
            if (onRejected) this.onRejectedCallbacks.push(onRejected)
        }
    }
}
