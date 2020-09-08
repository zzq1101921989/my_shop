import React, { useEffect, useState } from "react";
import styl from "./home.module.scss";
import { getHomeData } from "../../api/index"
import Header from "./components/Header";
import Banner from "./components/Banner";

export default function Home () {

    let [bannerData, setBannerData] = useState([]);

    useEffect(() => {
        async function HandlerData() {
            let { data } = await getHomeData();
            setBannerData(data.data.list[0].icon_list)
        };
        HandlerData();
    }, [])

    return (
        <div className={styl.home}>
            <Header />
            {
                bannerData.length > 0 ? <Banner bannerData={bannerData} /> : ''
            }
        </div>
    )
}