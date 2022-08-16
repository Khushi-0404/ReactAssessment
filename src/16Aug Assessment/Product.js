import { useState , useEffect } from "react"
import { Link } from 'react-router-dom'
import React from "react";
import "./Product.css"
const Product = (props) =>{
    const [ product ,setProduct] =useState([])
    useEffect(()=>{
        console.log("inside use effect")
         setProduct(props.data)
        },[props.data])
    
    return(<>
        <nav className="nav">
        <ul>
        <li><Link className="first" to ="/Price"> Price</Link>
        </li>
        <li><Link className="second" to="/Author">Author</Link>
        </li>
      <li><Link  className="third"to ="/Rating">Rating</Link> 
      </li>
      
     
      </ul>
        </nav>
        <div className="products">
        {
            product.map((item)=>(
                <div className="Container">
                    <h2 className="title ">Product:{item.Title}</h2>
                    <img src={`${item.Image}`} className="Image" alt="img"/>
                    <p className="price">Price:{item.price}</p>
                    <p className="author">Author:{item.Author}</p>
                    <button className="btn1">Add to Cart</button>
                    <button className='btn'>Buy</button>

                   
                </div>
            ))

}</div></>
    )    
}

export default Product