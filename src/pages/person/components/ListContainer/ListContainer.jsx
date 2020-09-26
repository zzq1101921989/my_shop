import React from "react";
import { List } from "antd-mobile";
import styles from "../../person.module.scss";
import ListItem from "../ListItem/ListItem";
import GridItem from "../GridItem/GridItem";

function ListContainer(props) {

    const { childrenData } = props;

    return (
        <List className={styles.personList} >
            {
                childrenData.map(item => {
                    return !item.grid ? <ListItem key={item.text} {...item} /> 
                    : 
                    <GridItem key={item.text} {...item} />
                })
            }
        </List>
    )
}

export default React.memo(ListContainer);