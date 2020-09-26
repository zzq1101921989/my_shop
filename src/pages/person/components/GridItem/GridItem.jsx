import React from "react";
import { Grid } from "antd-mobile";

function GridItem(props) {

    const { data, hasLine } = props;

    return (
        <Grid
            data={data}
            hasLine={hasLine}
            onClick={(el, index) => {
                console.log(el, index)
            }}
        ></Grid>
    )
}

export default React.memo(GridItem);