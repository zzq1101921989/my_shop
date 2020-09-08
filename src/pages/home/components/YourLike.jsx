import React from "react";
import styl from "../home.module.scss";
import YourLikeItem from "./YourLikeItem";

export default function YourLike ({articleData}) {

    return (
        <div className={styl.yourLikeWrapper}>
            <div className={styl.yourLikeTitleWrapper}>
                <div className={styl.middleLine}></div>
                <div className={styl.yourLikeTitle}>猜你喜欢</div>
            </div>
            {
                articleData.map(item => {
                    return <YourLikeItem key={item.id} {...item}  />
                })
            }
        </div>
    )
}