import http from "./http";

export async function getHomeData () {
    try {
        let res = await http.get('/homeApi');
        console.log(res.data);
        return res;
    } catch (e) {
        console.log(e);
    }
}