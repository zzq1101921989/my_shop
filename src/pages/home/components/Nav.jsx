import React from "react";
import styl from "../home.module.scss";

export default function Nav({ navData }) {

    return (
        <div className={styl.navWrapper}>
            {
                navData.map(item => {
                    return (
                        <div key={item.public_id} className={styl.itemWrapper}>
                            <div className={styl.imageWrapper}>
                                <img 
                                    className={styl.image} 
                                    src={item.icon_url} 
                                    alt={item.public_name} 
                                />
                            </div>
                            <div className={styl.titleWrapper}>
                                <span className={styl.title}>{item.name}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}