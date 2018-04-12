import React from 'react';

import styles from './Product.css'
const Product = ({price, image, name}) => {

    return (
        <article className={styles.ProductItem}>
            <h2 className={styles.ProductItem__Heading}>{name}</h2>
            <img src={image} alt='product'/>
            <h4 className={styles.ProductItem__Heading}>{price}</h4>
        </article>
    );

}

export default Product;