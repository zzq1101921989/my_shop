import http from "./http";

// 请求首页数据
export async function getHomeData (cancelToken) {
    try {
        let res = await http.get('/homeApi', {
            cancelToken,
        });
        return res;
    } catch (e) {
        console.log(e);
    }
}

// 请求分类侧边栏数据
export async function getCategoryNavData() {

    try {
        
        let res = await http.get('/homeApi/categories');
        
        return res.data.data;

    } catch (e) {

        console.log(e);

    }
}

// 请求分类主体数据
export async function getCategoryContainerData(preParams) {
    
    try {
        let res = await http.get('/homeApi/categoriesdetail/' + preParams);
        
        return {
            contextData: res.data.data,
            preParams
        };

    } catch (e) {
        console.log(e);
    }
}