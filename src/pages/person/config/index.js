import React from "react";

const menuData = [
    {
        icon: <i className='iconfont iconzhifu1' style={{ fontSize: '1.5rem' }}></i>,
        text: "待支付",
        url: ''
    }, {
        icon: <i className='iconfont iconzhifu' style={{ fontSize: '1.5rem' }}></i>,
        text: "代发货",
        url: ''
    }, {
        icon: <i className='iconfont iconpingjia' style={{ fontSize: '1.5rem' }}></i>,
        text: "待评价",
        url: ''
    }, {
        icon: <i className='iconfont iconjine' style={{ fontSize: '1.5rem' }}></i>,
        text: "售后/退款",
        url: ''
    },
];

const listData = [
    {
        id: 0,
        childrenData: [
            {
                icon: 'icondingdan',
                text: '我的订单',
                url: ''
            },
            {
                text: '导航',
                grid: true,
                data: menuData,
                hasLine: false,
            }
        ]
    },
    {
        id: 1,
        childrenData: [
            {
                icon: 'iconyouhuiquan',
                text: '我的优惠券',
                extra: '1张',
                url: ''
            },
            {
                icon: 'icondizhi',
                text: '我的收货地址',
                url: ''
            }
        ]
    },
    {
        id: 2,
        childrenData: [
            {
                icon: 'icondianhua',
                text: '联系客服',
                extra: '客服在线时间 07:00-22:00',
                url: ''
            },
            {
                icon: 'iconyijianfankui',
                text: '意见反馈',
                url: ''
            }
        ]
    },
]

export {
    menuData,
    listData
}