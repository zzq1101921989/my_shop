import { LOADING_CATEGORY_DATA, ADD__CATEGORY_DATA } from "../types/cateGoryType"

let initData = {
    menuData: [],
    contextData: []
}

export default function cateGoryReducer (state = initData, action) {

    switch (action.type) {

        case LOADING_CATEGORY_DATA:

            return {
                menuData: action.menuData,
                contextData: [{ name:action.preParams, list:action.contextData } ]
            };

        case ADD__CATEGORY_DATA:
            return {
                menuData: [...state.menuData],
                contextData: [...state.contextData, { name:action.preParams, list:action.contextData } ]
            };

        default: 
            return initData;
    }
}