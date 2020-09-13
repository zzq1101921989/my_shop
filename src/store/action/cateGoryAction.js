import { getCategoryNavData, getCategoryContainerData } from "../../api/index";
import { LOADING_CATEGORY_DATA } from "../types/cateGoryType"

export const loadCateGoryDataAction = () => {

    return async (dispatch, getState) => {

        let leftRes = await getCategoryNavData();

        let { contextData, preParams } = await getCategoryContainerData("lk001");

        dispatch({
            type: LOADING_CATEGORY_DATA,
            menuData: leftRes,
            contextData,
            preParams
        })
    }
}