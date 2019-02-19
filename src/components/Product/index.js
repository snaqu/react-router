import React from 'react';

const Product = (props) => {
    return (
        <div>
            <p>
                {props.match.params.id}
            </p>
        </div>
    );
}

export default Product;