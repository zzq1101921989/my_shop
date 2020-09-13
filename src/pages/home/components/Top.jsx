import React from "react";
import styl from "../home.module.scss";

export default function Top({handler}) {
    return (
        <div 
            className={styl.toTopIconWrapper}
            onClick={handler}
        >
            <svg viewBox="0 0 88 88" className={styl.icon + " " + styl.toTopIcon}>
                <g fill="none" fillRule="evenodd">
                    <circle cx="44" cy="44" r="43.5" stroke="#CCC" fill="#FFF"></circle>
                    <rect width="28" height="3" x="30" y="27" fill="#AFAFAF" rx="1.5"></rect>
                    <path fill="#AFAFAF" d="M42.5 38.056V63.75c0 .83.666 1.501 1.5 1.501.828 0 1.5-.668 1.5-1.5V37.428l6.942 6.942a1.499 1.499 0 1 0 2.121-2.122l-9.185-9.185-.002-.001-.002-.002a1.495 1.495 0 0 0-2.121 0l-.002.002-.002.001-9.185 9.185a1.499 1.499 0 1 0 2.122 2.122l6.314-6.315z"></path>
                </g>
            </svg>
        </div>
    )
}