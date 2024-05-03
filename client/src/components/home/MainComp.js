import React, { useEffect } from 'react'
import Banner from './Banner'
import './home.css'
import Slide from './Slide';
import Cards from './Cards';
import {Link} from 'react-router-dom';
import { getProducts } from '../redux/actions/action';
import {useDispatch, useSelector} from "react-redux";


const MainComp = () => {

  const {products} = useSelector(state => state.getProductsData);
  console.log(products)

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProducts);
  }, [dispatch]);

  return (
    <div className='home_section'>
      
      <div className='banner'>
        <Banner />
      </div>
      <div className='card_section'>
        <Cards title='Appliances for your home | Up to 55% off'
          url1='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg'
          text1='Air Conditioners'
          url2='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg'
          text2='Refrigerators'
          url3='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg'
          text3='Microwaves'
          url4='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg'
          text4='Washing Machines'
          link='See more'
        />

        <Cards title='Appliances for your home | Up to 55% off'
          url1='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg'
          text1='Air Conditioners'
          url2='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg'
          text2='Refrigerators'
          url3='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg'
          text3='Microwaves'
          url4='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg'
          text4='Washing Machines'
          link='See more'
        />

        <Cards title='Appliances for your home | Up to 55% off'
          url1='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg'
          text1='Air Conditioners'
          url2='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg'
          text2='Refrigerators'
          url3='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg'
          text3='Microwaves'
          url4='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg'
          text4='Washing Machines'
          link='See more'
        />

        <div className='login_card'>
          <p>See personalized recommendations</p>
          <Link className='loginlink' to='/login'><button className='login_btn'>Login</button></Link>
          <span>New to Amazon? <a href='/register'>Register</a></span>
        </div>
      </div>
        <Slide title='Deals Of The Day' products={products}/>
        <div className="center_img">
          <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt=""/>
        </div>
        <div className='card_section'>
          <Cards title='Appliances for your home | Up to 55% off'
          url1='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg'
          text1='Air Conditioners'
          url2='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg'
          text2='Refrigerators'
          url3='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg'
          text3='Microwaves'
          url4='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg'
          text4='Washing Machines'
          link='See more'
          />

          <Cards title='Appliances for your home | Up to 55% off'
          url1='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg'
          text1='Air Conditioners'
          url2='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg'
          text2='Refrigerators'
          url3='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg'
          text3='Microwaves'
          url4='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg'
          text4='Washing Machines'
          link='See more'
          />

          <Cards title='Appliances for your home | Up to 55% off'
          url1='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg'
          text1='Air Conditioners'
          url2='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg'
          text2='Refrigerators'
          url3='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg'
          text3='Microwaves'
          url4='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg'
          text4='Washing Machines'
          link='See more'
          />

          <Cards title='Appliances for your home | Up to 55% off'
          url1='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg'
          text1='Air Conditioners'
          url2='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg'
          text2='Refrigerators'
          url3='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg'
          text3='Microwaves'
          url4='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg'
          text4='Washing Machines'
          link='See more'
          />
        </div>
        
        <Slide title='Up to 80% off' products={products}/>
        <Slide title='Based On Your Search' products={products}/>
    </div>
    
  )
}

export default MainComp
