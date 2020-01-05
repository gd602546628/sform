import {IModel, IModelFactory, IState, IStateFactory} from "../types";
import {Watcher} from "../util/watcher";


export function createModel<State>(Factory: IStateFactory<State>): IModelFactory<State> {
    return class Model extends Watcher<State> implements IModel<State> {
        state: State
        preState: State
        controller: IState<State>

        constructor(state) {
            super()
            this.state = {...Factory.defaultState, ...state}
            this.preState = {...Factory.defaultState, ...state}
            this.controller = new Factory(this.state)
        }

        getState() {
            return this.state
        }

        setState(state) {
            this.fire(state)
        }
    }
}