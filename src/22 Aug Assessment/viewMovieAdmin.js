import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMoviesAdmin } from "../userSliceAdmin";
import { useSelector } from "react-redux";
import { removeMovie } from "../userSliceAdmin";

import {useContext, createContext ,useState} from "react";
import "./style.css"

import ReactSwitch from "react-switch"

import { Link } from "react-router-dom";
export const ThemeContext = createContext({theme:null});

const ViewMovieAdmin=()=>{
    const dispatch=useDispatch()
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
      };
    
    const {loading,usersData,statusText}=useSelector((state)=>state.user.value)
    
    const handleDelete=(userid)=>{
        dispatch(removeMovie({userid:userid}))
    }
    
    return(
        <div>


            <h1 className="head">List of Movies <button className="logout"><Link to="/">Logout</Link></button><button className="gotoadd"><Link to="/add">Add Movies</Link></button></h1>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="switch">
            <label className="theme"> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>
            <div className="user" >
            {
                usersData.map((item)=>(
                    <div className="container"id={theme} >
                        <h1>{item.mname}</h1><i className="fa fa-trash" onClick={()=>handleDelete(item.id)}></i>
                        <p> Release date:{item.releasedate}</p>
                        <p>IMBD Rating:{item.rating}/5</p>
                        
                    </div>
                ))
            }</div>
            </ThemeContext.Provider>
        </div>
    )
}
export default ViewMovieAdmin