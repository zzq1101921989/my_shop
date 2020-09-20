import React from "react";

export default function Footer({ styles, allSelectState, selectAllGoods, currentGoodsLength, addMoney }) {

    return (
        <div className={styles.tabBar}>
            <div className={styles.tabBarLeft}>
                <span 
                    className={styles.cartCheckBox + " " + (allSelectState ? styles.checked : '')}
                    onClick={selectAllGoods}
                ></span>
                <span style={{
                    fontSize: '16px'
                }}>全选</span>
                <div className={styles.selectAll}>
                    合计：<span className={styles.totalPrice}>{addMoney}</span>
                </div>
            </div>
            <div className={styles.tabBarRight}>
                <span className={styles.pay}>{`去结算(${currentGoodsLength})`}</span>
            </div>
        </div>
    )
}