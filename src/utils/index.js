import { useEffect, useRef } from "react"

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

    return function (...args) {

        if (time.current.setTimer) return; 

        time.current.setTimer = setTimeout(() => {
            time.current.fn.apply(this, args);
            time.current.setTimer = null;
        }, timer)
    }
}