import {FormTree} from "./shared/formTree";
import {FormState} from './state/formState'
import {FiledState} from './state/filedState'
import {IFiledState, IFormState, IModel} from "./types";
import {pathHelper} from "./util/path";
import {StateType} from "./enum";

export const createForm = ({initialValues = {}}) => {
    const formTree = new FormTree()
    const formState: IModel<IFormState> = new FormState({initialValues: initialValues})
    formTree.addFormNode(formState)


    function registerFiled(path) {
        const parentNode: IModel<any> = formTree.getNode(pathHelper.getParent(path))
        let dataPath = path
        /*
        *  {
        *    filed a
        *      layout a.b      a
        *         layout a.b.c        a
        *            filed a.b.c[0]     a[0]
        *               filed a.b.c[0].e   a[0].e
        *            filed a.b.c[1]
        * }
        *
        *    filed a
        *      layout a[0] a
        *        filed a[0].b
        *      layout a[1]
        *         filed a[1].b
        *
        * */
        const lastItem = pathHelper.getLastItem(path)
        if(pathHelper.isArrNode(lastItem)){

        }else{
            dataPath = parentNode.getState().dataPath+'.'+lastItem
        }
        if (parentNode && parentNode.type === StateType.layout) { //父级是layout节点
            dataPath = path
        }
        const filedState: IModel<IFiledState> = new FiledState({path: path})
        formTree.addFiledNode(path, filedState)
    }

    return {registerFiled}
}