import React from "react";
import styles from "../category.module.scss";

export default function ProductItem ({ products }) {

    return (
        products.map( item => {
            return (
                <div key={item.id} className={styles.productWrapper}>
                    <div className={styles.infoWrapper}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.LazyLoad + " " + styles.isVisible }>
                                <img className={styles.image} src={item.small_image} alt={item.spec} />
                            </div>
                        </div>
                        <div className={styles.nameWrapper}>
                            <div className={styles.name}>
                                <span className={styles.nameTag + " " + styles.nameText }>{item.name}</span>
                            </div>
                            <div className={styles.spec}>{item.spec}</div>
                            <div className={styles.tagsWrapper}>
                                <div className={styles.H1B9Rvu}></div>
                            </div>
                        </div>
                        <div className={styles.priceWrapper}>
                            <div className={styles.price}>{item.price}</div>
                            <div className={styles.iconCartWrapper}>
                                <svg viewBox="0 0 52 52" className={styles.icon + " " + styles.iconCart } >
                                    <defs>
                                        <radialGradient cx="27.0288363%" cy="10.3693483%" fx="27.0288363%"
                                                        fy="10.3693483%" r="93.8427229%"
                                                        id="radialGradient-1">
                                            <stop stopColor="#4ECA75" offset="0%"></stop>
                                            <stop stopColor="#39B460" offset="100%"></stop>
                                        </radialGradient>
                                    </defs>
                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g transform="translate(-678.000000, -2742.000000)">
                                            <g transform="translate(678.000000, 2742.000000)">
                                                <rect fill="url(#radialGradient-1)" x="0" y="0"
                                                    width="51.8699976" height="51.8699976"
                                                    rx="25.9349988"></rect>
                                                <path fill="#FFFFFF"
                                                    d="M20.3666667,39 C19.1700497,39 18.2,38.0299503 18.2,36.8333333 C18.2,35.6367164 19.1700497,34.6666667 20.3666667,34.6666667 C21.5632836,34.6666667 22.5333333,35.6367164 22.5333333,36.8333333 C22.5333333,38.0299503 21.5632836,39 20.3666667,39 Z M33.3666667,38.1333333 C32.1700497,38.1333333 31.2,37.1632836 31.2,35.9666667 C31.2,34.7700497 32.1700497,33.8 33.3666667,33.8 C34.5632836,33.8 35.5333333,34.7700497 35.5333333,35.9666667 C35.5333333,37.1632836 34.5632836,38.1333333 33.3666667,38.1333333 Z"></path>
                                                <path stroke="#FFFFFF" strokeWidth="2.6"
                                                    strokeLinecap="round"
                                                    d="M12.1333333,13.8666667 L13.6768756,13.8666667 C15.4621209,13.8666667 16.9554584,15.222463 17.1274221,16.9994069 L18.2224287,28.314386 C18.4068512,30.2200702 20.1012175,31.6154285 22.0069016,31.431006 C22.0111286,31.4305969 22.0153548,31.4301801 22.0195802,31.4297555 L33.2997819,30.296256 C34.7947282,30.1460352 36.0227397,29.0499108 36.3411182,27.581556 L37.8958814,20.4110205 C38.0987345,19.4754663 37.5047629,18.5526049 36.5692087,18.3497518 C36.3853963,18.3098964 36.1963225,18.3002236 36.0094025,18.3211126 L22.8968424,19.7864909"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    )
}