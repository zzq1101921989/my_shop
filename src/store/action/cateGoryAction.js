import { getCategoryNavData, getCategoryContainerData } from "../../api/index";
import { LOADING_CATEGORY_DATA } from "../types/cateGoryType"

export const loadCateGoryDataAction = (cancelToken) => {

    return async (dispatch, getState) => {

        let navRes = await getCategoryNavData(cancelToken);

        let contextRes = await getCategoryContainerData("lk001", cancelToken);

        if (navRes && contextRes) {
            dispatch({
                type: LOADING_CATEGORY_DATA,
                menuData: navRes,
                contextData: contextRes.contextData,
                preParams: contextRes.preParams
            })
        }
    }
}