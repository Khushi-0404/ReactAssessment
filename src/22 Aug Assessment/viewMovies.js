import { useEffect } from "react";
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { fetchMovies } from "../userSliceCustomer";
import { useSelector } from "react-redux";
import {useContext, createContext ,useState} from "react";
import "./style.css"

import ReactSwitch from "react-switch"
export const ThemeContext = createContext({theme:null});

const ViewMovies=()=>{
    const dispatch=useDispatch()
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
      };
    
    const {loading,usersData}=useSelector((state)=>state.user.value)
    
    return(
        <div>
            <h1 className="head" >List of Movies<button className="logout"><Link to="/">Logout</Link></button></h1>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="switch">
            <label className="label"> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>
            <div className="user">
            {
                usersData.map((item)=>(
                    <div className="container" id={theme}>
                        <h1>{item.mname}</h1>
                        <p> Release date:{item.releasedate}</p>
                        <p>IMBD Rating:{item.rating}/5</p>
                    </div>
                ))
            }</div>
            </ThemeContext.Provider>
        </div>
    )
}
export default ViewMovies