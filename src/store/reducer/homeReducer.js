import {
    LOADING_HOME_DATA
} from "../types/homeType"

const initHomeData = {
    loading: true,
    data: {}
};

export default function homeReducer (state=initHomeData, action) {
    
    switch (action.type) {
        // 初始化首页数据
        case LOADING_HOME_DATA:
            return {
                loading: false,
                data: action.data
            }
            
        default:
            return state
    }

}
