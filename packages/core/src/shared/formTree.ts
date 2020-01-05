import {Watcher} from "../util/watcher";
import {IFiledState, IFormState, ILayoutState, IModel, IState} from "../types";
import set from 'lodash/set'
import {isStr} from "../util";

export class FormTree extends Watcher {
    private nodes: {
        [key in string]: IModel<any>
    } = {}
    private formNode: IModel<IFormState>

    constructor() {
        super()
    }

    addFiledNode(nodePath: string, node: IModel<IFiledState>) {
        if (isStr(nodePath) && nodePath) {
            this.nodes[nodePath] = node
        }
    }

    addLayoutNode(nodePath: string, node: IModel<ILayoutState>) {
        if (isStr(nodePath) && nodePath) {
            this.nodes[nodePath] = node
        }
    }

    getNode(nodePath: string) {
        if(isStr(nodePath)&&nodePath){
            return this.nodes[nodePath]
        }
    }

    addFormNode(node: IModel<IFormState>) {
        this.formNode = node
    }

    getFormNode() {
        return this.formNode
    }
}