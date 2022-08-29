import React from 'react';
import { useState , useEffect } from "react"

import "./Sidebar.css"
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
const Orders = () => {
    const navigate=useNavigate()
    const logoutMethod=()=>{
        localStorage.removeItem('accesstoken')
        navigate('/')
     }
    return (
        <><div className='first'>
        <div className='container'>

            <div className='sidebar'>
            <h3 className='welcome'>Welcome!</h3>
               <Link to="/dashboard/dashboard" className='sidebar-link'><i className='fas fa-user'> My Account</i></Link><br></br>
               <Link to='/dashboard/orders' className='sidebar-link orders'><i className="fas fa-cart-arrow-down"> My Orders</i></Link><br></br>
               <Link to='/dashboard/whislist' className='sidebar-link'><i className="fa fa-heart heart"> Wishlist</i></Link><br></br>
               <Link to='/dashboard/contact' className='sidebar-link'><i className="fa fa-phone">Contact Us</i></Link>
               <i className='fa fa-sign-out sidebar-link' onClick={logoutMethod} >Logout</i>
               </div>
           </div>

           </div>
           <div className='middle'>
           <h2>My Orders </h2>
           <div className='order-items'>
           <div className="container-order">
                    
                
                <div className="img">
                    <img className="image" src="https://m.media-amazon.com/images/I/61Ov56SdKVS._AC_UL480_FMwebp_QL65_.jpg"/>
                        <h2>Price:1000</h2>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        </div></div>


                        <div className="container-order">
                    
                
                <div className="img">
                    <img className="image" src="https://m.media-amazon.com/images/I/71sDGxzNc+L._AC_UL480_FMwebp_QL65_.jpg"/>
                        <h2>Price:1200</h2>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        </div></div>


                        <div className="container-order">
                    
                
                <div className="img">
                    <img className="image" src="https://m.media-amazon.com/images/I/615pREhXdPL._AC_UL480_FMwebp_QL65_.jpg"/>
                        <h2>Price:600</h2>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        </div></div>
           </div></div>
           </>
    );
};

export default Orders;
