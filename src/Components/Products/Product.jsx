import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props.product);
    const { img, name, price, seller, ratings } = props.product;
    const handleAddToCart=props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <p>Price ${price}</p>
                <p>Manufacturer :{seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Product;