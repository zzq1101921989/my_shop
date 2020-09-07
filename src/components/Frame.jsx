import React, {Fragment} from "react";
import InitRouter from "../router";
import BottomTabBar from "./TabBar";
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
            <BottomTabBar />
            <InitRouter/>
        </Fragment>
    )
}