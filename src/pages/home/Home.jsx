import React, { useEffect } from "react";
import styl from "./home.module.scss";
import { getHomeData } from "../../api/index"
import Header from "./components/Header";

export default function Home () {

    useEffect(() => {
        getHomeData();
    }, [])

    return (
        <div className={styl.home}>
            <Header />
        </div>
    )
}