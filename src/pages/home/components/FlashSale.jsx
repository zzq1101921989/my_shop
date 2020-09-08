import React from "react";
import FlashItem from "./FlashSaleItem";
import styl from "../home.module.scss";

export default function FlashSale ({flashData}) {

    return (
        <div className={styl.flashWrapper}>
            <div className={styl.flashTitleWrapper}>
                <div className={styl.flashTitle}>限时抢购</div>
                <span className={styl.actionStateText}>07:00场</span>
                <div className={styl.actionStateTextEnd}>已结束</div>
                <span className={styl.more}>更多</span>
            </div>
            <div className={styl.flashItemsWrapper}>
                {
                    flashData.map(item => {
                        return <FlashItem key={item.id} {...item} />
                    })
                }
            </div>
        </div>
    )
}