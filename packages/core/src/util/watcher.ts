import {isFn} from "./index";

type Listener<Payload> = (payload: Payload) => void

export class Watcher<Payload = any> {
    listeners: {
        index: number
        [key: number]: Listener<Payload>
    } = {
        index: 0
    }

    on(callBack: Listener<Payload>) {
        if (isFn(callBack)) {
            let index: number = this.listeners.index + 1
            this.listeners.index++
            this.listeners[index] = callBack
            return this.listeners.index
        }
    }

    off(index: number) {
        if (this.listeners[index]) {
            delete this.listeners[index]
        }
    }

    fire(payload: Payload) {
        Object.keys(this.listeners).forEach(key => {
            const callback = this.listeners[key]
            if (isFn(callback)) {
                callback(payload)
            }
        })
    }

}