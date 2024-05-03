import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//import { products } from './productData';
import { Divider } from '@mui/material';
import './slide.css';
import { NavLink } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Slide = ({ title, products }) => {
  return (
    <div className='deals_day'>
      <div className='products_deal'>
        <h3>{title}</h3>
        <button className='view_btn'>View All</button>
      </div>

      <Divider className='divider' />
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        showDots={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass='custom-dot-list-style'
        containerClass='carousel-container'
        itemClass='carousel-item-padding-40-px'
        keyBoardControl={true}
      >
        {
          products.map((e) => {
            return (
              <NavLink className="slide_class" to={`/product/${e.id}`}>
                <div className='product_slider'>
                  <div className='product_img'>
                    <img src={e.url} alt='product_image' />
                  </div>
                  <p className='item_name'>{e.title.shortTitle}</p>
                  <p className='item_desc'>{e.title.longTitle}</p>
                  <p className='tagline'>{e.tagline}</p>
                </div>
              </NavLink>

            )
          })
        }
      </Carousel>
    </div>
  )
}

export default Slide
