import {Rule} from "./validator";

export interface IFiledState {
    nodePath: string
    dataPath: string
    value: any
    values: any
    rules: Rule[],
    errorMessage: string
}

export interface IModelFactory<S> {
    new(state: S): IModel<S>
}

export interface IModel<S> {
    state: S
    preState: S
    controller: IState
    getState: () => S
    setState: (any) => void
}

export interface IState {
    computeState: (draft: IFiledState, preState: IFiledState) => void
}

export interface IStateFactory<State> {
    new(state: State): IState

    defaultState: State
}

