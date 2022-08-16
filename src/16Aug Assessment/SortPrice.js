import react from "react"
import { useState , useEffect } from "react"
import Items from "./BookData"
import './Product.css'
const SortPrice=(props)=>{
    const [ product ,setProduct] =useState([])
    
    const [ result ,setResult]=useState([])
    useEffect(()=>{
        console.log("inside use effect")
         setProduct(props.data)
        },[props.data])
    
    useEffect(()=>{
        console.log("inside use effect")
        const temp=[...product]
        const sorteddata=temp.sort((a,b)=>(a.price)-(b.price))
        setResult(sorteddata)
        },[result])
return(
<>
            <h1 className="head">Sorting based on Price</h1>
            <div className="products">
                    {
                        result.map((item)=>(
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
                    
    
)}
export default SortPrice