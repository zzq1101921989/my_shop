import React, { useEffect, useState } from "react";
import styl from "./home.module.scss";
import { getHomeData } from "../../api/index"
import Header from "./components/Header";
import Banner from "./components/Banner";
import Loading from "../../components/Loading";
import Nav from "./components/Nav";
import FlashSale from "./components/FlashSale";

export default function Home () {

    let [homeData, setData] = useState("");

    useEffect(() => {
        async function HandlerData() {
            let { data } = await getHomeData();
            setData(data)
        };
        HandlerData();
    }, [])

    console.log(homeData);

    return (
        homeData ? (
            <div className={styl.home}>
                {/* 首页头部 */}
                <Header />
                {/* 首页轮播 */}
                <Banner bannerData={homeData.data.list[0].icon_list} />
                {/* 首页导航 */}
                <Nav navData={homeData.data.list[2].icon_list} />
                {/* 限时抢购 */}
                <FlashSale flashData={homeData.data.list[3].product_list} />
            </div>
        ) : <Loading />
    )
}