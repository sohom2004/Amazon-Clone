import React from 'react';
import './cart.css';
import Options from './Options';
import Subtotal from './Subtotal';

const Cart = () => {
  return (
    <div className='cart_section'>
      <div className='cart_left'>
        <h1>Shopping Cart</h1>
        <p>Select all items</p>
        <span className='price'>Price</span>
        <hr/>
        <div className='cart_product'>
            <div className='prod_img'>
                <img src='https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70' alt=''/>
            </div>
            <div className='prod_section'>
              <div className='prod_description'>
                <h3>Molife Sense 500 Smartwatch  (Black Strap, Freesize)</h3>
              </div>
              <h3>Smart Watches</h3>
              <span className='usually'>Usually dispatched in 8 days</span>
              <span>Eligible for FREE shipping</span>
              <img alt='' src='https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png'/>
              <Options/>
            </div>
            <h3 className='price_num'>₹4049.00</h3>
            
        </div>
        <hr />
        <Subtotal />
      </div>
      <div className='cart_right'>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="rightimg" />
        <div className='right_part'>
          <span style={{color: '#007185'}}>Your order is eligible for FREE Delivery.</span>
          <span>Select this option at checkout. Details</span>
          <h3 style={{fontWeight:'500'}}>Subtotal (1 items) : <span style={{fontWeight:'700', color:'#111', fontSize: '17px'}}>₹4049.00</span></h3>
          <button className='proceed_to_buy'>Proceed to Buy</button>
          <div className='emi'>
            EMI available
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Cart
