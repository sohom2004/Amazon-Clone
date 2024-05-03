import React from 'react'
import Carousel from 'react-material-ui-carousel';
import './banner.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const data = [
    "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
    " https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
]

const Banner = () => {
  return (
    <Carousel className='carousel' 
    autoPlay={true} 
    animation='slide' 
    indicators={false} 
    cycleNavigation={true}
    navButtonsAlwaysVisible={true}
    NextIcon={<ArrowForwardIosIcon className='nav-icon'/>}
    PrevIcon={<ArrowBackIosIcon className='nav-icon'/>}
    navButtonsProps={{className:'nav-btn',
        style:{
            backgroundColor: "rgba(255,255,255,0)",
            color:"black",
            borderRadius: 0,
            height: "250px",
            width: "70px",
            marginTop: "-108px",
        }
    }}>
        {
            data.map((img, i)=>{
                return <img src={img} className='banner_image' />
            })
        }
    </Carousel>
  )
}

export default Banner
