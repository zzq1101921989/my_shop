import React from "react";
import { Icon } from "antd-mobile"

export default function Loading () {
    return (
        <div className="loadingContainer">
            <Icon type='loading' />
            <span>商城拼命加载中...</span>
        </div>
    )
}