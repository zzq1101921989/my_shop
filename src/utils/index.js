import { useEffect, useRef, useState } from "react";
import axios from "axios";

/**
 * 自定义节流 hook函数
*/
export function useThrottle (fn, timer) {

    let time = useRef({
        setTimer: null,
        fn,
    });

    useEffect(()=>{
        time.current.fn = fn
    }, [fn])

    function handler(...args) {

        if (time.current.setTimer) return; 

        time.current.setTimer = setTimeout(() => {

            time.current.fn.apply(this, args);
            
            time.current.setTimer = null;
            
        }, timer)
    }

    function clear() {
        clearTimeout(time.current.setTimer);
    }

    return {
        handler,
        clear
    }
};

/**
 * 自义定 监听页面滚动到达某值的处理函数
 */
export function useScrollHandle () {

    let docB = document.documentElement || document.body;

    let [res, setRes] = useState(false);

    let {handler, clear} = useThrottle(function () {
        setRes( docB.scrollTop >= 200 );
    }, 200);

    useEffect(() => {
        document.addEventListener("scroll", handler, false);
        document.addEventListener("touchstart", handler);
        document.addEventListener("touchmove", handler );
        document.addEventListener("touchend", handler);
        return ()=> {
            document.removeEventListener("scroll", handler);
            document.removeEventListener("touchstart", handler);
            document.removeEventListener("touchmove", handler);
            document.removeEventListener("touchend", handler);
            clear();
        }
    }, [])

    return res;
}


/*
* 获取样式兼容
*/
function getStyle(element, attr) {

    let value;

    if (attr === "scrollTop") {
        value = element.scrollTop
    } else if (element.currentStyle) {
        value = element.currentStyle[attr];
    } else {
        value = window.getComputedStyle(element, null)[attr];
    }
    return value;
}


/**
 * 运动效果
 * @param {HTMLElement} element   运动对象，必选
 * @param {JSON}        style    属性：目标值，必选
 * @param {function}    callback  可选，回调函数，链式动画
 */
export function animate (element, style, callback) {

    let speed, end, begin = 0;

    function moveRequestFrame() {

        element.timer = requestAnimationFrame(function () {

            Object.keys(style).forEach(item => {
    
                end = parseInt(style[item]);
                begin = parseInt(getStyle(element, item)) || 0;
        
                speed = (end- begin) * 0.2;
                speed = (begin < end) ? Math.ceil(speed) : Math.floor(speed);
                
                element[item] = begin + speed;
    
                if (begin === end) {
                    cancelAnimationFrame(element.timer);
                    if (callback) callback();
                } else {
                    moveRequestFrame();
                }
    
            })
        })
    }
    moveRequestFrame();
} 

/**
 * 生成 取消 axios请求的token的工具
 */
export function generateCancelToken() {

    let cancel = null;

    let cancelToken = new axios.CancelToken( c => {
        cancel = c;
    })

    return {
        cancel, 
        cancelToken
    }
}