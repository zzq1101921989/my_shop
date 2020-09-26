import React from "react";
import { List } from "antd-mobile";

function ListItem(props) {

    const { icon, text, extra="" } = props;

    return (
        <List.Item
            thumb={<i className={`iconfont ${icon}`} style={{ fontSize: '1.5rem', color: '#efb336' }}></i>}
            arrow="horizontal"
            extra={extra}
            onClick={() => { }}
        >{text}</List.Item>
    )
}

export default React.memo(ListItem);