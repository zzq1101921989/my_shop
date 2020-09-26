import React, {Suspense} from "react";
import { Switch, Route } from "react-router-dom"
import router_list from "./router_list";
import Loading from "../components/Loading/Loading";

export default function InitRouter () {
    return (
        <Suspense fallback={<Loading/>} >
            <Switch>
                {
                    router_list.map(item => {
                        return <Route key={item.name} path={item.path} exact={item.exact} render={item.render} />
                    })
                }
            </Switch>
        </Suspense>
    )
}