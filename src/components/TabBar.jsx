import React, { useRef, useCallback } from "react";
import { TabBar } from 'antd-mobile';
import { useLocation, useHistory } from "react-router-dom";
const homeIcon = require('../static/images/home_default.png');
const homeSelectIcon = require('../static/images/home_selected.png');
const categoryIcon = require('../static/images/category_default.png');
const categorySelectIcon = require('../static/images/category_selected.png');
const cartIcon = require('../static/images/shoppingcart_default.png');
const cartSelectIcon = require('../static/images/shoppingcart_selected.png');
const personIcon = require('../static/images/mine_default.png');
const personSelectIcon = require('../static/images/mine_selected.png');

export default function BottomTabBar() {

    const { pathname } = useLocation();
    const history = useHistory();

    const TabBarList = useRef([
        {
            path: ["/", '/index'],
            title: '首页',
            icon: homeIcon,
            selectedIcon: homeSelectIcon,
        }, {
            path: ['/category'],
            title: '分类',
            icon: categoryIcon,
            selectedIcon: categorySelectIcon,
        }, {
            path: ['/cart'],
            title: '购物车',
            icon: cartIcon,
            selectedIcon: cartSelectIcon,
        }, {
            path: ['/person'],
            title: '个人中心',
            icon: personIcon,
            selectedIcon: personSelectIcon,
        }
    ])

    const selectHandle = useCallback( (targetPathArr, pathname) => {
        let res = targetPathArr.find( item => {
                    return item === pathname
                }) 
        if ( res ) {
            return true;
        }
        return false;
    }, [])

    return (
        <TabBar
            unselectedTintColor="#949494"
            tintColor="#75a342"
            barTintColor="white"
        >
            {
                TabBarList.current.map(item => {
                    return (
                        <TabBar.Item
                            icon={ { uri: item.icon } }
                            selectedIcon={{ uri: item.selectedIcon }}
                            selected = { selectHandle(item.path, pathname) }
                            title={item.title}
                            key={item.title}
                            onPress={() => {
                                if ( !selectHandle(item.path, pathname) ) {
                                    history.push(item.path[0])
                                }
                            }}
                        >
                        </TabBar.Item>
                    )
                })
            }
        </TabBar>
    )
}