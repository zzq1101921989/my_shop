import React, { useEffect } from "react";
import Swiper  from 'swiper';

import styl from "../home.module.scss";
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

// 添加插件包

export default function Banner({ bannerData }) {

    useEffect(() => {
        new Swiper('.swiper-container', {
            autoplay: true,
            loop: true,
            slidesPerView : 1,
            observer: true,
            observeSlideChildren: true,
            pagination: {
                el: '.swiper-pagination',
                bulletActiveClass: styl['my-bullet-active'],
            },
        })
       
    }, [])

    return (
        <div className="swiper-container" style={{width: "100%"}}>
            <div className="swiper-wrapper">
                {
                    bannerData?.map(item => {
                        return (
                            <div 
                                key={item.public_id} 
                                className={`swiper-slide ${styl.slide}`}
                            >
                                <img src={item.icon_url} alt={item.public_name} />
                            </div>
                        )
                    })
                }
                
            </div>
            <div className="swiper-pagination"></div>
        </div>
    )
}