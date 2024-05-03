import React from 'react'
import './Navbar.css';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav>
                <div className='left'>
                    <div className='navlogo'>
                        <a href='/'><img src='./amazon_PNG25.png' alt='' /></a>
                    </div>
                    <div className='address'>
                        <PlaceOutlinedIcon className='placeOutlined'/>
                        <div><p>Delivering to Asansol</p>
                            <h5>Update location</h5>
                        </div>
                    </div>
                </div>
                <div className='search'>
                    <div className='category-dropdown'>
                        All
                        <ArrowDropDownOutlinedIcon className='drop-arrow' />
                    </div>
                    <input type='text' name='' id='' placeholder='Search your products'/>
                    <div className='search-btn'>
                        <SearchIcon className='search-icon'/>
                    </div>
                </div>
                <div className='right'>
                    <div className='countrySelector'>
                        <img src='./india.png' alt='' /> <strong>EN</strong>
                        <ArrowDropDownOutlinedIcon className='drop-arrow' />
                    </div>

                    <div className='accounts-lists'>
                            <div>
                                <p>Hello, User</p>
                                <h5>Accounts & Lists</h5>
                            </div>
                            <ArrowDropDownOutlinedIcon className='drop-arrow' />
                    </div>

                    <div className='returns'>
                        <div>
                            <p>Returns</p>
                            <h5>& Orders</h5>
                        </div>
                    </div>

                    <div className='cart'>
                        <Link to='/cart' className='cartlink'>
                            <div className="cart_btn">
                                <Badge badgeContent={1} color="secondary">
                                    <ShoppingCartOutlinedIcon className='shopping-cart'/>
                                </Badge>
                                <p>Cart</p>
                            </div>
                        </Link>
                        
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
