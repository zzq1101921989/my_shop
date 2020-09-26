import React, { useState } from "react";
import { NavBar, Icon } from 'antd-mobile';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ItemAddress from "./components/itemAddress/ItemAddress";
import styles from "./myAddress.module.scss";


const addressData = [
    {
        id: 1,
        name: '小詹',
        tel: 1234567890,
        detailAddress: '广东省广州市天河区'
    }, {
        id: 2,
        name: '小强',
        tel: 1234567890,
        detailAddress: '广东省广州市天河区222'
    }
]

export default function MyAddress({ history, location }) {

    let [currentAddress, setAddress] = useState(1);

    function setCurrentAddressHandler (id) {
        if (id !== currentAddress) {
            setAddress(id)
        }
    }

    return (
        <TransitionGroup
            appear={true}
            component={null}
        >
            <CSSTransition
                in={location.pathname === "/order/myAddress"}
                timeout={100}
                classNames="message-fade"
            >
                <div id={styles.myAddress} >
                    {/* 头部导航 */}
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => history.go(-1)}
                    >收货地址</NavBar>
                    {/* 地址信息 */}
                    {
                        addressData.map(item => {
                            return <ItemAddress 
                                key={item.id} 
                                {...item} 
                                currentAddress={currentAddress} 
                                setAddress={setCurrentAddressHandler} 
                            />
                        })
                    }
                </div>
            </CSSTransition>
        </TransitionGroup >
    )
}