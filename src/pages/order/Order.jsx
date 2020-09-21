import React from "react";
import { NavBar, Icon, List } from 'antd-mobile';
import styles from "./order.module.scss";
import { Route } from "react-router-dom";
import MyAddress from "../order/components/myAddress/MyAddress";

export default function Order({ history }) {

    return (
        <div id={styles.wrapper} >
            <div id={styles.order}>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => history.go(-1)}
                    className={styles.orderTitle}
                >我的订单</NavBar>
                <List>
                    <List.Item
                        arrow="horizontal"
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        multipleLine
                        className={styles.myAddressEnter}
                        onClick={() => {
                            history.push("/order/myAddress")
                        }}
                    >收获地址 <List.Item.Brief>请选择您的收获地址</List.Item.Brief>
                    </List.Item>
                </List>
            </div>
            <Route path="/order/myAddress" exact render={(props) => <MyAddress {...props} />} />
        </div>
    )
}