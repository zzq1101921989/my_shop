import {
    LOADING_HOME_DATA,
} from "../types/homeType";
import { getHomeData } from "../../api/index";

// 加载首页数据
export function initHomeData (cancelToken) {
    
    return async function (dispatch) {

        try {

            let res = await getHomeData(cancelToken);

            dispatch({
                type: LOADING_HOME_DATA,
                data: res.data.data
            })

        } catch (e) {}
        
    }
}