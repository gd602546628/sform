import {FiledOptions, FormOptions, IFormTree} from "../types";
import {Path} from "../path";
import {EventBus} from "../eventBus";
import {FiledNode} from "./filedNode";

export class FormTree implements IFormTree {
   private nodeMap = {}
    filedNodeMap = {}
    initialValue = null
    editable = true
    eventMap = {}

    constructor(options: FormOptions) {
        this.initialValue = options.initialValue
        this.editable = options.editable
    }

    addEventListener(type: string, path: Path, callBack) {
        if (this.eventMap[type]) {
            this.eventMap[type].on(path, callBack)
        } else {
            let eventBus = new EventBus()
            eventBus.on(path, callBack)
            this.eventMap[type] = eventBus
        }
    }

    addFiledNode(options: FiledOptions) {
        let filedNode = new FiledNode(options)
        return filedNode
    }
}



