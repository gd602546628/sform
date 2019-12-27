export class EventBus {
    private events = {}

    public on<T>(type: string, callback: (data: T) => void) {
        if (!this.events[type]) {
            this.events[type] = [callback]
        } else {
            this.events[type].push(callback)
        }
    }

    public emit<T>(type: string, data: T) {
        if (Array.isArray(this.events[type])) {
            this.events[type].forEach(callback => {
                callback(data)
            })
        }
    }
}