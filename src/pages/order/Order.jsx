import React, { useState } from "react";
import { NavBar, Icon, List, DatePicker, TextareaItem } from 'antd-mobile';
import { Route } from "react-router-dom";
import { createForm } from "rc-form";
import MyAddress from "../order/components/myAddress/MyAddress";
import styles from "./order.module.scss";

function Order(props) {

    const { history, form: {getFieldProps} } = props;

    let [date, setDate] = useState(null);

    return (
        <div id={styles.wrapper} >
            <div id={styles.order}>
                {/* 我的订单头部 */}
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => history.go(-1)}
                    className={styles.orderTitle}
                >我的订单</NavBar>
                {/* 收获地址 */}
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
                {/* 配送时间 */}
                <List className={styles.myList} >
                    <DatePicker
                        mode="date"
                        extra="请选择配送时间"
                        value={date}
                        className={styles.myAddressEnter}
                        onChange={date => {
                            setDate(date)
                        }}
                    >
                        <List.Item arrow="horizontal">配送时间</List.Item>
                    </DatePicker>
                </List>
                {/* 物品件数 */}
                <List className={styles.myList} >
                    <List.Item
                        extra="共6件"
                        arrow="horizontal"
                    >
                        <img src={require('./images/detail1.jpg')} alt="图片" style={{ width: '2rem', height: '2rem' }} />
                        <img src={require('./images/detail1.jpg')} alt="图片" style={{ width: '2rem', height: '2rem' }} />
                        <img src={require('./images/detail1.jpg')} alt="图片" style={{ width: '2rem', height: '2rem' }} />
                    </List.Item>
                </List>
                {/* 支付方式 */}
                <List className={styles.myList} >
                    <List.Item
                        extra="微信"
                        arrow="horizontal"
                    >
                        支付方式
                    </List.Item>
                </List>
                {/* 备注信息 */}
                <TextareaItem
                    title="备注"
                    placeholder="请填写备注信息"
                    data-seed="logId"
                    autoHeight
                    clear
                    {...getFieldProps('inputClear', {
                        onChange(value){
                            console.log(value);
                        }
                    })}
                ></TextareaItem>
                {/* 结算订单 */}
                <div className={styles.payOrderContainer}>
                    <div>
                        <span className={styles.all}>合计:</span>
                        <span className={styles.money}>￥15.00</span>
                    </div>
                    <button className={styles.payOrder} >结算订单</button>
                </div>
            </div>
            {/* 地址选择路由组件 */}
            <Route path="/order/myAddress" exact render={(props) => <MyAddress {...props} />} />
        </div>
    )
}

export default createForm()(Order);