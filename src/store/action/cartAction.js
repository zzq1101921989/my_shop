import { 
    ADD_CART, CLEAR_CART,
    SELECTOR_GOODS_STATE,
    SETUP_GOODS_NUMBER,
    SELECTOR_GOODS_ALL
 } from "../types/cartType"

// 添加商品
export function addGoodsToCart (goods) {
    return (dispatch) => {
        dispatch({
            type: ADD_CART,
            goods
        })
    }
}

// 清空购物车
export function clearCart () {
    return (dispatch) => {
        dispatch({
            type: CLEAR_CART,
        })
    }
}

// 商品选中
export function selectorGoods (id, selectorState) {

    return (dispatch) => {
        dispatch({
            type: SELECTOR_GOODS_STATE,
            id,
            select: selectorState
        })
    }
}

// 商品数量的修改
export function setUpGoodsNumber (id, number) {
    return (dispatch) => {
        dispatch({
            type: SETUP_GOODS_NUMBER,
            id,
            number
        })
    }
}

// 商品全选
export function selectorGoodsAll () {
    return (dispatch) => {
        dispatch({
            type: SELECTOR_GOODS_ALL,
        })
    }
}
