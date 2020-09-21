import React from "react";
import { Icon } from 'antd-mobile';
import styles from "./itemAddress.module.scss";

export default function ItemAddress({id, name, tel, detailAddress, currentAddress, setAddress }) {

    return (
        <section className={styles.addressItem} >
            <div 
                className={styles.addLeft} 
                onClick={()=>{
                    setAddress(id)
                }}
            >
                <Icon 
                    type={id === currentAddress ? 'check-circle' : 'check-circle-o'} 
                    size='xs' 
                    color="#108ee9"
                   
                />
                <div className={styles.text}>
                    <span>{name} {tel}</span>
                    <p>{detailAddress}</p>
                </div>
            </div>
            <Icon 
                type='ellipsis' 
                size='xs' 
                color="#108ee9"
                onClick={()=>{
                }}
            />
        </section>
    )
}