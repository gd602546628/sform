import {createModel} from "../shared/model";
import {IFormState} from "../types";
import {StateType} from "../enum";

export const FormState = createModel<IFormState>(
    class FormState {
        static defaultState = {
            initialValues: undefined,
            values: undefined
        }

        computeState(draft: IFormState, preState: IFormState) {
        }
    },
    StateType.form
)