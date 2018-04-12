import React from 'react';
import withDataSubscription from '../../hoc/DataSource';
import Product from './Product/Product';

import styles from './ProductList.css';

const query = ` {
    category(url:"/standard",tenantID:"demo"){
        breadcrumbs{
        name
        breadcrumb
        }
        products{
        name
        link
        price
        product_image
        }
    }
}`

const Products = ({ data: { category: { products } } }) => {
    const productList = products.map(product => <Product
        key={product.name}
        name={product.name}
        image={product.product_image}
        price={product.price}/>);

    return (
        <div className={styles.ProductsContainer}>
            {productList}
        </div>
    );

}

export default withDataSubscription(Products, query);