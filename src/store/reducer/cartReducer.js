import { 
    ADD_CART, CLEAR_CART,
    SELECTOR_GOODS_STATE,
    SETUP_GOODS_NUMBER,
    SELECTOR_GOODS_ALL
 } from "../types/cartType";

const initCartData = {};

export default function cartReducer (state = initCartData, action) {

    switch (action.type) {
        // 添加商品
        case ADD_CART:

            if (state[action.goods.id]) {

                state[action.goods.id].num++

            } else {

                state[action.goods.id] = {
                    id: action.goods.id,
                    name:action.goods.name,
                    price: action.goods.price,
                    small_image: action.goods.small_image,
                    spec: action.goods.spec,
                    num: 1,
                    select: false
                }
            }
            return {...state};

        // 清空所有商品
        case CLEAR_CART:
            return state = {}

        // 选中当前商品
        case SELECTOR_GOODS_STATE:
            state[action.id].select = action.select;
            return {...state};

        // 修改商品选购数量
        case SETUP_GOODS_NUMBER:

            if (action.number == 0) {
                delete state[action.id];
            } else {
                state[action.id].num = action.number;
            }
            return {...state};

        // 全选所有商品
        case SELECTOR_GOODS_ALL:
            // 查看当前商品是否全部选中
            let allSelect = Object.keys(state).every(item => state[item].select === true);

            Object.keys(state).forEach(item => {
                state[item].select = allSelect ? (!state[item].select) : true
            })
            return {...state};

        default:
            return state
    }
}