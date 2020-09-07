import React, {Fragment} from "react";
import InitRouter from "../router";
import { useLocation } from "react-router-dom";

export default function Frame () {

    const { pathname } = useLocation();

    if ( pathname === "/login" ) {
        return (
            <InitRouter/>
        )
    }
    return (
        <Fragment>
            <div>这是导航</div>
            <InitRouter/>
        </Fragment>
    )
}