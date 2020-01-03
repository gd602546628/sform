import {createModel} from "../shared/model";
import {IFiledState} from "../types";

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
    }
)