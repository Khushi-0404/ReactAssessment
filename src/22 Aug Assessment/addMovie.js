import { useState } from "react"
import { useDispatch } from "react-redux"
import { addMovie } from "../userSliceAdmin"
import { Link } from "react-router-dom"
import Validation from "./validation"
import './style.css'
const AddMovie=()=>{
    
    const [mname,setMname]=useState('')
    const [date,setDate]=useState('')
    const [rating,setRating]=useState('')
    const dispatch=useDispatch()
    const createMovie=()=>{
        dispatch(addMovie({mname:mname,releasedate:date,rating:rating}))
    }
    const handleChanges=(e,key)=>{
        if(key==='mname'){
            setMname(e.target.value)
        }
        if(key==='date'){
            setDate(e.target.value)
        }
        if(key==='rating'){
            setRating(e.target.value)
        }
    }
    return(
        <div>
           
           <h2 className="head">Add Movie<button className="back"><Link to="/admin/movies">Back</Link></button></h2>
            <form className="form">
                Movie name:<input type='text'className="moviename" onChange={(e)=>handleChanges(e,'mname')}></input>
                Release Date:<input type='text'className="date" onChange={(e)=>handleChanges(e,'date')} ></input>
                Rating:<input type='text' className="rating" onChange={(e)=>handleChanges(e,'rating')} ></input>
                
            </form>
            <Link to="/admin/movies"><button className="add" onClick={createMovie}>Add Movie</button></Link>
            
        </div>
    )
}
export default AddMovie