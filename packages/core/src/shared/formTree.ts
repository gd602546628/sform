import {Watcher} from "../util/watcher";
import {IModel, IState} from "../types";

const set = require('lodash/set')

export class FormTree extends Watcher {
    private nodes = {}
    private filedNodes = {}
    private initialValue = {}
    private formNode: IState

    constructor() {
        super()
    }

    addFiledNode({nodePath,dataPath, state}) {

    }

    addLayoutNode({nodePath,state}) {

    }

    addFormNode(state: IState) {
        this.formNode = state
    }
}