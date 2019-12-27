import {FiledOptions, IFiledNode, IFiledState} from "../types";

class FiledState implements IFiledState {
    visible = false
    value = undefined
    values = []
    initialValue = undefined

    constructor() {
    }
}

export class FiledNode implements IFiledNode {
    path
    dataPath
    filedState

    constructor(options: FiledOptions) {
        this.filedState = new FiledState()
    }

    getState() {
        return this.filedState
    }

    setState() {
        return this.filedState
    }
}