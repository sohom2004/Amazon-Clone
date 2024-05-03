import React from 'react'
import './footer.css'
import Divider from '@mui/material/Divider';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

const Footer = () => {

  const ScrollToTopButton = () => {
    const handleScrollToTop = (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }};
  return (
    <div className='footer_container'>
      <div className='back_btn' onClick={ScrollToTopButton}>
        <a href='#'>Back To Top</a>
      </div>
      <div className='footer_subcontainer'>
        <div className='footer_top'>
          <div className='mini_container'>
            <h4>Get To Know Us</h4>
            <a>About Us</a>
            <a>Careers</a>
            <a>Press Releases</a>
            <a>Amazon Science</a>
          </div>
          <div className='mini_container'>
            <h4>Connect With Us</h4>
            <a>Facebook</a>
            <a>Twitter</a>
            <a>Instagram</a>
          </div>
          <div className='mini_container'>
            <h4>Make Money With Us</h4>
            <a>Sell on Amazon</a>
            <a>Sell under Amazon Accelerator</a>
            <a>Protect and Build Your Brand</a>
            <a>Amazon Global Selling</a>
            <a>Become an Affiliate</a>
            <a>Fulfillment by Amazon</a>
            <a>Advertise Your Products</a>
            <a>Amazon Pay on Merchants</a>
          </div>
          <div className='mini_container'>
            <h4>Let Us Help You</h4>
            <a>COVID-19 and Amazon</a>
            <a>Your Account</a>
            <a>Returns Centre</a>
            <a>Amazon Science</a>
            <a>100% Purchase Protection</a>
            <a>Amazon App Download</a>
            <a>Help</a>
          </div>
        </div>
        <Divider flexItem className='divider'/>
        <div className='footer_mid'>
          <div className='first'>
            <div className='nav_logo'>
              <img src='./amazon_PNG25.png' alt='' />
            </div>
            <div className='language_selector'>
              <Select defaultValue="English">
                <Option value="English">English</Option>
                <Option value="Hindi">Hindi</Option>
                <Option value="Bengali">Bengali</Option>
                <Option value="Tamil">Tamil</Option>
              </Select>
            </div>
          </div>
          <div className='country'>
            <ul>
              <li>Australia</li>
              <li>Brazil</li>
              <li>Canada</li>
              <li>China</li>
              <li>France</li>
              <li>Germany</li>
              <li>Italy</li>
              <li>Japan</li>
              <li>Mexico</li>
              <li>Netherlands</li>
              <li>Poland</li>
              <li>Singapore</li>
              <li>Spain</li>
              <li>Turkey</li>
              <li>United Arab Emirates</li>
              <li>United Kingdom</li>
              <li>United States</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer_bottom'>
        <div className='grid_links'>
          <div className='grid_element'>
            <a>AbeBooks</a>
            <br />
            <span>
              Books, art
              <br />
              & collectibles
            </span>
          </div>
          <div className='grid_element'>
            <a>Amazon Web Services</a>
            <br />
            <span>
              Scalable Cloud
              <br />
              Computing Services
            </span>
          </div>
          <div className='grid_element'>
            <a>Audible</a>
            <br />
            <span>
              Download
              <br />
              Audio Books
            </span>
          </div>
          <div className='grid_element'>
            <a>IMDB</a>
            <br />
            <span>
              Movies, TV
              <br />
              & Celebrities
            </span>
          </div>
          <div className='grid_element'>
            <a>Shopbop</a>
            <br />
            <span>
              Designer
              <br />
              Fashion Brands
            </span>
          </div>
          <div className='grid_element'>
            <a>Amazon Business</a>
            <br />
            <span>
              Everything For
              <br />
              Your Business
            </span>
          </div>
          <div className='grid_element'>
            <a>Prime Now</a>
            <br />
            <span>
              2-Hour Delivery
              <br />
              on Everyday Items
            </span>
          </div>
          <div className='grid_element'>
            <a>Amazon Prime Music</a>
            <br />
            <span>
              100 million songs, ad-free
              <br />
              Over 15 million podcast episodes
            </span>
          </div>
        </div>
        <div className='copyright'>
          <ul>
            <li>Conditions of Use & Sale</li>
            <li>Privacy Notice</li>
            <li>Interest-Based Ads</li>
          </ul>
          <span>© 1996-2024, Amazon.com, Inc. or its affiliates</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
