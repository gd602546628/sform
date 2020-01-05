import {Rule} from "./validator";

export interface IFiledState {
    nodePath: string
    dataPath: string
    value: any
    values: any
    rules: Rule[],
    errorMessage: string
}

export interface ILayoutState {
    nodePath:string
}

export interface IFormState {
    values:any
    initialValues:any
}

export interface IModelFactory<State> {
    new(state: any): IModel<State>
}

export interface IModel<State> {
    state: State
    preState: State
    controller: IState<State>
    getState: () => State
    setState: (any) => void
}

export interface IState<State> {
    computeState: (draft: State, preState: State) => void
}

export interface IStateFactory<State> {
    new(state: State): IState<State>

    defaultState: State
}

