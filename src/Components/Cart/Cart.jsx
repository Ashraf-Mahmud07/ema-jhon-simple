import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart){
        product.quantity = product.quantity || 1;
        total = total + product.price *product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity +product.quantity;
    }
    const tax = total*7/100;
    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart-container'>
            <h2 className='cart-title'>Order Summary</h2>
            <div className='cart-info'>
                <p>Selected items: {quantity}</p>
                <p>Price: ${total}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax}</p>
                <h4 className='grand-total'>Grand Total: ${grandTotal.toFixed(2)}</h4>
            </div>
        </div>
    );
};

export default Cart;