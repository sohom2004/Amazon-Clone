import React from 'react'
import './cards.css';

const Cards = (props) => {
  return (
    <div className='cards'>
      <h3>{props.title}</h3>
      <div className='img_elements'>
        <div className='img_div'>
                  <a>
                      <img src={props.url1} alt='product_image' />
                      <p>{props.text1}</p>
                  </a>
                  <a>
                      <img src={props.url2} alt='product_image' />
                      <p>{props.text2}</p>
                  </a>
        </div>
        <div className='img_div'>
                  <a>
                      <img src={props.url3} alt='product_image' />
                      <p>{props.text3}</p>
                  </a>
                  <a>
                      <img src={props.url4} alt='product_image' />
                      <p>{props.text4}</p>
                  </a>
        </div>
              <div className='card_footer'>
                  <a>{props.link}</a>
              </div>
      </div>
      
    </div>
  )
}

export default Cards
