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
import { useScrollHandle, animate } from "../../utils";
import withCancelComponent from "../../hoc/withCancelComponent";

function Home (props) {

    let {cancel, cancelToken } = props;

    let [homeData, setData] = useState("");

    let [showTop, setShowTop] = useState(false);

    let res = useScrollHandle();

    useEffect(() => {
        // 请求数据
        try {
            async function HandlerData() {
                let res = await getHomeData(cancelToken);
                if ( res ) setData(res.data)
            };
            HandlerData();
        } catch (e) {
            console.log(e);
        }
        return () => {
            // 取消请求
            cancel("取消请求");
        }
    }, []);

    useEffect(() => {
        /* 显示隐藏返回顶部组件 */
        setShowTop(res);
    }, [ res ]);

    // 返回顶部按钮点击
    function backButtonClick () {
        let docB = document.documentElement || document.body;
        animate(docB, {scrollTop: 0})
    }

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
                    showTop ? <Top handler={backButtonClick} /> : ''
                }
            </div>
        ) : <Loading />
    )
}

export default withCancelComponent(Home);