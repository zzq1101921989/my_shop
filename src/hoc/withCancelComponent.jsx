import React from "react";
import { generateCancelToken } from "../utils/index"

export default function withCancelComponent ( WithComponent ) {

    return function () {

        const { cancel, cancelToken } = generateCancelToken();

        return <WithComponent cancel={cancel} cancelToken={cancelToken} />
    }
}