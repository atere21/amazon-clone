import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product'>
        <div className='product__info'>
            <h3>Get fit at home</h3>
            <p className='product__price'>
            <small>$</small>
            <strong>29.99</strong>
            </p>
            <div className='product__rating'>
              <p>⭐</p>
            </div>
        </div>
        <img src='https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg' 
         alt='product_img'/>
        <button>Add to Basket</button>
        
    </div>
  )
}

export default Product