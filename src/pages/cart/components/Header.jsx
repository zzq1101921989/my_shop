import React from "react";
import { Modal } from "antd-mobile";

export default function Header({styles, dispatch, clearCart}) {
    return (
        <header className={styles.titleWrapper}>
            <h4><strong>购物车</strong></h4>
            <button
                className={styles.clearCart}
                onClick={() => {
                    Modal.alert('清空', '确定清空购物车?', [
                        {
                            text: '取消',
                            onPress: () => {
                                console.log("111")
                            }
                        },
                        {
                            text: '确定',
                            onPress: () => {
                                dispatch(clearCart());
                            }
                        },
                    ])
                }}
            >清空购物车</button>
        </header>
    )
}