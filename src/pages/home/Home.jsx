import React, { useEffect, useState } from "react";
import styl from "./home.module.scss";
import { getHomeData } from "../../api/index"
import Header from "./components/Header";
import Banner from "./components/Banner";
import Loading from "../../components/Loading";
import Nav from "./components/Nav";
import FlashSale from "./components/FlashSale";
import YourLike from "./components/YourLike";
import Top from "./components/Top";
import { useThrottle } from "../../utils";

export default function Home () {

    let [homeData, setData] = useState("");

    let [showTop, setShowTop] = useState(false);

    // 节流
    let scrollHandle = useThrottle(function () {
        if ( window.scrollY > 300 ) {
            setShowTop(true);
        } else {
            setShowTop(false);
        }
    }, 500);

    useEffect(() => {
        // 请求数据
        async function HandlerData() {
            let { data } = await getHomeData();
            setData(data)
        };
        HandlerData();

        window.addEventListener("scroll", scrollHandle , false);

        return () => {
            window.removeEventListener("scroll", scrollHandle);
        }
    }, [])

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
                {/* 猜你喜欢 */}
                <YourLike articleData={homeData.data.list[4].product_list} />
                {/* 返回顶部 */}
                {
                    showTop ? <Top /> : ''
                }
            </div>
        ) : <Loading />
    )
}