import React, {Fragment, useEffect} from "react";
import InitRouter from "../router";
import BottomTabBar from "./TabBar";
import { useLocation } from "react-router-dom";
import PubSub from 'pubsub-js';
import { Toast } from "antd-mobile";
import { addGoodsToCart } from "../store/action/cartAction";
import { useDispatch } from "react-redux";



export default function Frame () {

    const { pathname } = useLocation();

    const dispatch = useDispatch();

    useEffect(() => {
        // 全局添加商品订阅事件
        PubSub.unsubscribe('addGoodsToCart');
        PubSub.subscribe('addGoodsToCart', function (msg, data) {
            dispatch(addGoodsToCart(data));
            Toast.info("添加购物车成功", 1)
        })
    }, [])

    if ( pathname === "/login" || pathname === "/order" || pathname === "/order/myAddress" ) {
        return (
            <InitRouter/>
        )
    }
    return (
        <Fragment>
            <BottomTabBar />
            <InitRouter/>
        </Fragment>
    )
}