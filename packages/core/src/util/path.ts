import {isStr} from "./index";

export const pathHelper = {
    getParent(path: string) {
        if (isStr(path) && path) {
            const arr = path.split('.')
            const lastItem = arr[arr.length - 1]
            const kLeft = lastItem.indexOf('[')
            if (kLeft >= 0) { // a.b.c[0].as[1] 这种情况
                arr[arr.length - 1] = lastItem.substring(0, kLeft)
                return arr.join('.')
            }
            if (arr.length === 0) {
                return
            }
            arr.pop()
            return arr.join('.')
        }
    }
}