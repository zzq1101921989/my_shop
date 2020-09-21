import React, { useCallback } from "react";
import { Modal } from "antd-mobile";
import { useDispatch } from "react-redux";
import { 
    addGoodsToCart, 
    selectorGoods,
    setUpGoodsNumber
} from "../../../store/action/cartAction";

export default function CartItem({ styles, cartDate }) {

    const dispatch = useDispatch();

    // 选中当前商品
    let selectorCurrentGoods = useCallback( function  () {
        dispatch(selectorGoods(cartDate.id, !cartDate.select))
    }, [])

    // 设置当前商品的购买数量
    function setUpGoodsNumberHandler (type) {

        if (type === "add") {

            dispatch(setUpGoodsNumber(cartDate.id, ++cartDate.num));

        } else if (type === "minus") {

            if (cartDate.num === 1) {

                Modal.alert('温馨提示', '确定删除该商品?', [
                    {
                        text: '取消',
                        onPress: () => {
                        }
                    },
                    {
                        text: '确定',
                        onPress: () => {
                            dispatch(setUpGoodsNumber(cartDate.id, --cartDate.num));
                        }
                    },
                ])
            } else {
                dispatch(setUpGoodsNumber(cartDate.id, --cartDate.num));
            }
        }
    }

    return (
        <section>
            <div className={styles.shopCartListCon}>
                <div className={styles.left}>
                    <span 
                        className={styles.cartCheckBox + " " + (cartDate.select ? styles.checked : '')}
                        onClick={selectorCurrentGoods}
                    ></span>
                </div>
                <div className={styles.center}>
                    <img src={cartDate.small_image} alt={cartDate.spec} />
                </div>
                <div className={styles.right}>
                    <span>{cartDate.spec}</span>
                    <div className={styles.bottomContent}>
                        <p className={styles.shopPrice}>&yen;{cartDate.price}</p>
                        <div className={styles.shopDeal}>
                            <span 
                                onClick={() => {
                                    setUpGoodsNumberHandler("minus")
                                }} 
                            >-</span>
                            <input disabled type="number" value={cartDate.num} />
                            <span
                                onClick={() => {
                                    setUpGoodsNumberHandler("add")
                                }} 
                            >+</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}