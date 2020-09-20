import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Loading from "../../components/Loading/Loading";
import Nav from "./components/Nav";
import FlashSale from "./components/FlashSale";
import YourLike from "./components/YourLike";
import Top from "./components/Top";
import { initHomeData } from "../../store/action/homeAction";
import { useScrollHandle, animate } from "../../utils";
import withCancelComponent from "../../hoc/withCancelComponent";
import styles from "./home.module.scss";


function Home ({cancel, cancelToken }) {

    const dispatch = useDispatch();

    let homeData = useSelector(state => state.homeReducer);

    let [showTop, setShowTop] = useState(false);

    let res = useScrollHandle();

    useEffect(() => {

        let docB = document.documentElement || document.body;

        if (homeData.loading) {
            // 请求数据
            dispatch(initHomeData(cancelToken));
        }
        // 还原滚动位置
        if (window.sessionStorage.getItem('scrollY')) {
            docB.scrollTo(0, window.sessionStorage.getItem('scrollY'));
        }
        
        return () => {
            // 取消请求
            cancel("取消请求");
            // 组件卸载记录滚动位置
            window.sessionStorage.setItem('scrollY', docB.scrollTop)
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
        !homeData.loading ? (
            <div className={styles.home}>
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