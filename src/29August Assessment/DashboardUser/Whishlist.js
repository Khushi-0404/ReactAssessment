import React from 'react';
import { useState , useEffect } from "react"

import "./Sidebar.css"
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
const Wishlist = (props) => {
    const navigate=useNavigate()
    const logoutMethod=()=>{
        localStorage.removeItem('accesstoken')
        navigate('/')
     }
     const {close, changeBuy}=props
    return (
        <><div className='first'>
        <div className='container'>

            <div className='sidebar'>
            <h3 className='welcome'>Welcome!</h3>
               <Link to="/dashboard/dashboard" className='sidebar-link '><i className='fas fa-user '> My Account</i></Link><br></br>
               <Link to='/dashboard/orders' className='sidebar-link'><i className="fas fa-cart-arrow-down"> My Orders</i></Link><br></br>
               <Link to='/dashboard/whislist' className='sidebar-link wishlist'><i className="fa fa-heart heart"> Wishlist</i></Link><br></br>
               <Link to='/dashboard/contact' className='sidebar-link'><i className="fa fa-phone">Contact Us</i></Link>
               <i className='fa fa-sign-out sidebar-link' onClick={logoutMethod} >Logout</i>
               </div>
           </div>

           </div>
           <div className='middle'>
            <h2>Your Cart! </h2>
            {
                    close.map((item)=>(
                     <div className="Container">
                       
                       <img src={`${item.Image}`} className="Image" alt="img"/>
                       <h2 className="title ">{item.Title}</h2>
                       <p className="price">Price:{item.price}</p>
                       <p className="rating">Rating:{item.rating}/5</p>
                            
                        
                            <button className="button" onClick={()=>changeBuy(item.id)}>Remove</button>
                            
                            
                        </div>
                    ))
                }
        </div></>
    );
};

export default Wishlist;
