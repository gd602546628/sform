import {EventBus} from "./eventBus";
import {Path} from './path'

export interface IFormTree {
    //  new (options:FormOptions)
    nodeMap: { // 以path存储 filed 和 layout
        [key: string]: TreeNode
    }
    filedNodeMap: { // 以dataPath存储 filedNode
        [key: string]: IFiledNode
    }
    initialValue: any
    editable: boolean // 是否可编辑
    eventMap: {
        [key: string]: EventBus
    }
    addFiledNode: (options: FiledOptions) => IFiledNode
    addEventListener: (type: string, path: Path, callBack) => void
}

export type FormOptions = {
    initialValue?: any
    editable: boolean
}


export type FiledChangeCallBack = (value: any, data: IFiledState) => any

export type FiledOptions = {
    path: Path
    initialValue: any
}

export interface IFiledNode {
    //new(options: FiledOptions)

    path: Path
    dataPath: Path
    filedState: IFiledState
    getState: () => IFiledState
    setState: (data: object) => IFiledState
}

export interface IFiledState {
    visible: boolean
    value: any
    values: any[]
    initialValue: any
}

export interface ILayoutNode {
    visible: boolean
    path: string
    dataPath: string
}

export interface IEffectDescription {

}

export type TreeNode = IFiledNode | ILayoutNode