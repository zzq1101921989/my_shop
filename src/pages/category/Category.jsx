import React, {Fragment, useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
// 加载组件
import Header from "./components/Header";
import Loading from "../../components/Loading/Loading";
import Nav from "./components/Nav";
import ContextView from "./components/ContextView";
// 请求分类数据接口
import { loadCateGoryDataAction } from "../../store/action/cateGoryAction";
// 样式
import styles from "./category.module.scss";
// 高阶组件
import withCancelComponent from "../../hoc/withCancelComponent";

function Category (props) {

    let { cancel, cancelToken } = props

    let dispatch = useDispatch();

    let { cateGoryReducer: { menuData, contextData } } = useSelector(state => state);

    let [ currentMenu, setCurrentMenu ] = useState(0);

    // Menu 点击事件
    function currentHandler (index, bs) {
        if (currentMenu!==index) {
            let items = document.querySelectorAll('.category_categoryItem__GUIbL');
            setCurrentMenu(index);
            bs.scrollToElement(items[index], 300);
        }
    }

    useEffect(() => {
        if (!menuData.length && !contextData.length) {
            console.log(1111);
            dispatch(loadCateGoryDataAction(cancelToken));
        }
        return () => {
            cancel();
        }
    }, []);

    return (
       ( menuData?.length || contextData?.length ) ?
        <Fragment>
            {/* 搜索头部 */}
            <Header/>
            <div className={styles.listWrapper}>
                {/* 测导航 */}
                <Nav 
                    menuData={menuData} 
                    currentMenu={currentMenu} 
                    currentHandler={currentHandler} 
                />
                {/* 主题内容 */}
                <ContextView contextData={contextData[currentMenu]} />
            </div>
        </Fragment> : <Loading />
    )
}

export default withCancelComponent(Category);