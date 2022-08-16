import React from "react"
import { Link } from 'react-router-dom'
import './style.css'
const UserPage= ()=>{
    return(
        <div className="user">
         <Link className="first" to ="/Login/User"></Link>
            <h2 className="welcome">Welcome Ram!
            <Link className="first" to ="/Books">
            <button className="proceed">Proceed Shopping</button></Link></h2>
            <div className="profile">
                <h3 className="profile-details">Profile Details:</h3>
                <ul>
                <h4> Name:Ram</h4>
                <h4> Phone No::24345309</h4>
                <h4> Email:ram@gmail.com</h4>
                </ul>
                </div>
                <div className="delivery">
                <h3> Delivery Address:</h3>
                <ul>
                    <h4>Address:GTB Nagar Delhi</h4>
                </ul>
                </div >
                <div className="wishlist">
                <h3> WishList:</h3>
                <div className="container">
                    
                 
                <div className="img">
                    <img className="image" src="https://images-eu.ssl-images-amazon.com/images/I/51JtK7GW3RL._AC_SX368_.jpg"/>
                        <h2>Price:1000</h2>
                        <button className=" btn btn-primary">Buy Now</button></div>
                        

                    
                </div></div>
                <div className="purchase">
                <h3> Purchased Items:</h3>
                <div className="container">
                    
                
                <div className="img">
                    <img className="image" src="https://images-eu.ssl-images-amazon.com/images/I/419VeCYzkaL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"/>
                        <h2>Price:1000</h2>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        </div></div>
                
            
         
        </div></div>
    )
}
export default UserPage