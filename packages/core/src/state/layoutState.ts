import {createModel} from "../shared/model";
import {ILayoutState} from "../types";

export const LayoutState = createModel<ILayoutState>(
    class LayoutState {
        static defaultState={
            nodePath:''
        }
        computeState(draft:ILayoutState,preState:ILayoutState){}
    }
)