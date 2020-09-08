import http from "./http";

export async function getHomeData () {
    try {
        let res = await http.get('/homeApi');
        return res;
    } catch (e) {
        console.log(e);
    }
}