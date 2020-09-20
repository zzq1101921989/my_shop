import React from "react";
import { Icon } from "antd-mobile";
import styles from "./Loading.module.scss";

export default function Loading () {
    return (
        <div className={styles.loadingContainer}>
            <Icon type='loading' />
            <span>商城拼命加载中...</span>
        </div>
    )
}