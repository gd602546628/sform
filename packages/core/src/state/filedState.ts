import {createModel} from "../shared/model";
import {IFiledState} from "../types";
import {StateType} from "../enum";

export const FiledState = createModel<IFiledState>(
    class FiledState {
        static defaultState = {
            nodePath: '',
            dataPath: '',
            value: undefined,
            values: [],
            errorMessage: '',
            rules: []
        }

        constructor(state: IFiledState) {

        }

        computeState(draft: IFiledState, preState: IFiledState) {

        }
    },
    StateType.filed
)