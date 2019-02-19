import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem } from './style';

const products = ['car', 'bike', 'motorcycle'];

const ProductsListPage = () => {
    const list = products.map((item) => (
        <ListItem key={item}>
            <Link to={`product/${item}`}>{item}</Link>
        </ListItem>
    ));
    return (
        <div>
            <ul>{list}</ul>
        </div>
    );
}

export default ProductsListPage;