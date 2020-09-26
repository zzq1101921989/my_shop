import React from "react";
import styles from "./person.module.scss";
import { NavBar} from "antd-mobile";
import { listData } from "./config/index";
import ListContainer from "./components/ListContainer/ListContainer";


export default function Person() {

    return (
        <div className={styles.person}>
            {/* 个人中心头部 */}
            <NavBar
                mode="dark"
                className={styles.personHeader}
            >我的</NavBar>
            {/* 个人基本信息 */}
            <div className={styles.personInfo}>
                <div className={styles.personInfoImg}>
                    <img src={require('./images/5b50219088120.jpg')} alt="图片" />
                </div>
                <div className={styles.info}>
                    <span>小詹来买菜</span>
                    <span>手机号:888888888</span>
                </div>
            </div>
            {/* 订单、导航栏、优惠、收获地址、联系客服、意见反馈 */}
            {
                listData.map(item => {
                    return <ListContainer key={item.id} {...item} />
                })
            }
        </div>
    )
}