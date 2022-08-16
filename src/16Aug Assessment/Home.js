import React from "react"
import { Link } from 'react-router-dom'
import {useContext, createContext ,useState} from "react";
import './style.css'
import ReactSwitch from "react-switch"
export const ThemeContext = createContext({theme:null});
const Home = () =>{
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
      };
    return (
        <div>
            <h1 className="head">Book Store Application</h1>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="switch">
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>
            <Link className="first" to ="/"></Link>
        
            <div className="box" id={theme} >
            <h3>Create Account:</h3>
            <div className="input-icons">
                
            <i className="fa fa-user icon"></i>
            <input className="input-field" placeholder="Enter your Name" type="text"/><br></br>
            <i className="fa fa-envelope icon"></i>
            <input className="input-field" placeholder="Enter your Email" type="text"/><br></br>
            <i className="fa fa-phone icon"></i>
            <input className="input-field" placeholder="Enter your Mobile No." type="text"/><br></br>
            <i className="fa fa-key icon"></i>
            <input className="input-field" placeholder="Enter your Password" type="text"/><br></br>

            
            <button className="signIn" ><Link className="third" to="/Login">Sign In</Link></button>
            <button className="signUp" ><Link className="third" to="/Login">Sign Up</Link></button>
            </div>
           </div>
           </ThemeContext.Provider> 
        </div>
    )
}
export default Home