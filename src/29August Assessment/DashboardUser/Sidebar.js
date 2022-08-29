

import React from 'react';
import { useState , useEffect } from "react"

import "./Sidebar.css"
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'




const Sidebar = ( props) => {
    const navigate=useNavigate()
    const logoutMethod=()=>{
        localStorage.removeItem('accesstoken')
        navigate('/')
     }
     const [ product ,setProduct] =useState([])
    const [ search ,setSearch ] =useState('')
    const [ result ,setResult]=useState([])

    
    useEffect(()=>{
    console.log("inside use effect")
     setProduct(props.data)
    },[props.data])

    
     const handleChange=(event)=>{
      console.log(event.target.value)
        setSearch(event.target.value)
    }
    const handleSearch=(event)=>{
        event.preventDefault()
        let temp=[...product]
        let data=temp.filter((item)=>item.Title===search)
        setResult(data) 
    }
   
   
     
    

    return (
    <><div className='first'>
        <div className='container'>

            <div className='sidebar'>
            <h3 className='welcome'>Welcome!</h3>
               <Link to="/dashboard" className='sidebar-link my-account'><i className='fas fa-user my-account'> My Account</i></Link><br></br>
               <Link to='/dashboard/orders' className='sidebar-link'><i className="fas fa-cart-arrow-down"> My Orders</i></Link><br></br>
               <Link to='/dashboard/whislist' className='sidebar-link'><i className="fa fa-heart heart"> Wishlist</i></Link><br></br>
               <Link to='/dashboard/contact' className='sidebar-link'><i className="fa fa-phone">Contact Us</i></Link>
               <i className='fa fa-sign-out sidebar-link' onClick={logoutMethod} >Logout</i>
               </div>
           </div>

           </div>
           <div className='middle'>
            <h2>Hello User! </h2>
           <form className='dashboard-search'>
                    <input className="search" type='text' placeholder="enter product name" onChange={(e)=>handleChange(e)}></input>
                    <button  onClick={(e)=>handleSearch(e)}>Search</button>
                </form>
                
           <div className="products">
           {
               result.map((item)=>(
                   <div className="Container">
                       
                       <img src={`${item.Image}`} className="Image" alt="img"/>
                       <h2 className="title ">{item.Title}</h2>
                       <p className="price">Price:{item.price}</p>
                       <p className="rating">Rating:{item.rating}/5</p>
                       <button className="btn-2 " >Add to Cart</button>
                       <button className='btn-1'>Buy</button>

                      
                   </div>
                   
               )) 
               
           }</div>

           </div>
        
           </>
        
    );
};

export default Sidebar;