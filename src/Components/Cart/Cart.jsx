import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    console.log(cart);
    let total = 0;
    let totalShipping = 0;
    for (const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = total*7/100;
    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart-container'>
            <h2 className='cart-title'>Order Summary</h2>
            <div className='cart-info'>
                <p>Selected items: {cart.length}</p>
                <p>Price: ${total}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax}</p>
                <h4 className='grand-total'>Grand Total: ${grandTotal}</h4>
            </div>
        </div>
    );
};

export default Cart;