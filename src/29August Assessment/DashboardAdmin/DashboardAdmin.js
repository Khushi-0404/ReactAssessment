import React from 'react';
import { useState , useEffect } from "react"
import axios from 'axios'
import "../DashboardUser/Sidebar.css"
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'




const DashboardAdmin = ( props) => {
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
               <Link to="/dashboard" className='sidebar-link my-account'><i className='fas fa-user my-account'> My Account</i></Link><br></br>
               <Link to='/newadmin' className='sidebar-link'><i className="fa fa-home ">Add User</i></Link>
               <Link to='/dashboard/contact' className='sidebar-link'><i className="fa fa-phone">Contact Us</i></Link>
               <i className='fa fa-sign-out sidebar-link' onClick={logoutMethod} >Logout</i>
               </div>
           </div>

           </div>
           <div className='middle'>
            <h2>Hello Admin! </h2>
           
           

           </div>
        
           </>
        
    );
};

export default DashboardAdmin;