import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handleRemoveFromCart }) => {
    const {id,img, name, price, quantity } = product;
    
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='item-details'>
                <p className='item-title'>{name}</p>
                <p>Price: $<span className='orange-text'>{price}</span></p>
                <p>Order Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <button onClick={() => handleRemoveFromCart(id)} className='btn-delete'>
                <FontAwesomeIcon className='btn-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;