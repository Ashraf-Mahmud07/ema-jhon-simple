import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    const handleAddToCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart);
    }
    console.log(cart);
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=> <Product
                    key={product.id}
                    product = {product}
                    handleAddToCart = {handleAddToCart}
                    ></Product> )
                }
            </div>
            <div className="cart-container">
                <h2 className='cart-title'>Order Summary</h2>
                <p>Selected items: {cart.length}</p>
                <p>Price: ${cart[0].price}</p>
            </div>
        </div>
    );
};

export default Shop;