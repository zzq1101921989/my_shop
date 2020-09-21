import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Toast } from "antd-mobile";
import { clearCart } from "../../store/action/cartAction";
import { selectorGoodsAll } from "../../store/action/cartAction";
import CartItem from "./components/CartItem";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./cart.module.scss";

export default function Cart({history}) {

    const dispatch = useDispatch();

    let cartDate = useSelector(state => state.cartReducer);

    // 是否全选
    let allSelectState = Object.keys(cartDate).length > 0 ? Object.keys(cartDate).every(item => cartDate[item].select === true) : false;

    // 计算多少件商品
    let currentGoods = Object.keys(cartDate).filter(item => cartDate[item].select === true)

    // 计算多少钱
    let addMoney = Object.keys(cartDate).reduce((total,currentValue) => {
        // 只有选中的商品才计算价钱
        if (cartDate[currentValue].select) {
            return total + Number(cartDate[currentValue].price) * Number(cartDate[currentValue].num);
        }
        return total;
    }, 0).toFixed(2);

    // 点击全选
    function selectAllGoods () {
        if (Object.keys(cartDate).length === 0) {
            Toast.info("请加购商品哦", 1)
        } else {
            dispatch(selectorGoodsAll());
        }
    }

    return (
        <div id={styles.cart}>
            {/* 购物车头部 */}
            <Header styles={styles} dispatch={dispatch} clearCart={clearCart} />
            <div className={styles.contentWrapper}>
                {/* 商品信息 */}
                <main className={styles.contentWrapperList}>
                {
                    Object.keys(cartDate).map(item => {
                        return (
                            <CartItem 
                                key={item} 
                                styles={styles} 
                                cartDate={cartDate[item]} 
                            />
                        )
                    })
                }
                </main>
                {/* 底部结算 */}
                <Footer 
                    styles={styles} 
                    allSelectState={allSelectState} 
                    selectAllGoods={selectAllGoods}
                    currentGoodsLength={currentGoods.length}
                    addMoney={addMoney}
                    history={history}
                />
            </div>
        </div>
    )
}