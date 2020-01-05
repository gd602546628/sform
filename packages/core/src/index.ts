import {FormTree} from "./shared/formTree";
import {FormState} from './state/formState'
import {FiledState} from './state/filedState'
import {IFiledState, IFormState, IModel} from "./types";
import {pathHelper} from "./util/path";

export const createForm = ({initialValues = {}}) => {
    const formTree = new FormTree()
    const formState: IModel<IFormState> = new FormState({initialValues: initialValues})
    formTree.addFormNode(formState)



    function registerFiled(path) {
        const parentNode = formTree.getNode(pathHelper.getParent(path))
        let dataPath=path
        if(parentNode){
            const parentState = parentNode.getState()
          //  if( parentState instanceof ){}
        }
        const filedState: IModel<IFiledState> = new FiledState({path: path})
        formTree.addFiledNode(path,filedState)
    }

    return {registerFiled}
}