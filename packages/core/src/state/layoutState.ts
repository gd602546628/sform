import {createModel} from "../shared/model";
import {ILayoutState} from "../types";
import {StateType} from "../enum";

export const LayoutState = createModel<ILayoutState>(
    class LayoutState {
        static defaultState = {
            nodePath: '',
            dataPath:''
        }

        computeState(draft: ILayoutState, preState: ILayoutState) {
        }
    },
    StateType.layout
)