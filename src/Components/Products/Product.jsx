import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const{img, name, price, seller, ratings}=props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>Price ${price}</p>
            <p>Manufacturer :{seller}</p>
            <p>Rating: {ratings} start</p>
            <button>Add to cart</button>
        </div>
    );
};

export default Product;