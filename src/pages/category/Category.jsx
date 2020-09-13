import React, {Fragment, useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header";
import Loading from "../../components/Loading";
import Nav from "./components/Nav";
import styles from "./category.module.scss";
// import { getCategoryNavData, getCategoryContainerData } from "../../api/index";
import ContextView from "./components/ContextView";
import { loadCateGoryDataAction } from "../../store/action/cateGoryAction"

export default function Category () {

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

        // async function getCategoryData () {
        //     let leftRes = await getCategoryNavData();
        //     let { contextData, preParams } = await getCategoryContainerData("lk001");
        //     dispatch({
        //         type: "LOADING_CATEGORY_DATA",
        //         menuData: leftRes,
        //         contextData,
        //         preParams
        //     })
        // }

        if (!menuData.length && !contextData.length) {

            // getCategoryData();

            dispatch(loadCateGoryDataAction());
        }
    }, []);

    return (
        menuData?.length || contextData?.length ?
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