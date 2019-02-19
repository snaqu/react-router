import React from 'react';
import Product from '../../../components/Product/index';
import { Link } from 'react-router-dom';
const ProductPage = (props) => {
    return (
        <div>
            <h2>
                Product page
            </h2>
            <Product {...props} />
            <Link to="/products">Back to products</Link>
        </div>
    );
}

export default ProductPage;