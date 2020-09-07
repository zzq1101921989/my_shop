import React, { lazy } from "react";
const Home = lazy( () => import("../pages/home/Home") )
const Cart = lazy( () => import("../pages/cart/Cart") )
const Category = lazy( () => import("../pages/category/Category") )
const Person = lazy( () => import("../pages/person/Person") )
const Login = lazy( () => import("../pages/login/Login") )

const router_list = [
    {
        path: ['/', '/index'],
        exact: true,
        render (props) {
            return <Home {...props} />
        },
        name: "首页"
    },{
        path: "/category",
        exact: true,
        render (props) {
            return <Category {...props} />
        },
        name: "分类"
    },{
        path: "/cart",
        exact: true,
        render (props) {
            return <Cart {...props} />
        },
        name: "购物车"
    },{
        path: "/my",
        exact: true,
        render (props) {
            return <Person {...props} />
        },
        name: "个人中心"
    },{
        path: "/login",
        exact: true,
        render (props) {
            return <Login {...props} />
        },
        name: "个人中心"
    },
];

export default router_list;