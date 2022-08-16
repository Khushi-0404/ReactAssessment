import React from "react"
import { Link } from 'react-router-dom'
import './style.css'
const Login = ()=>{
return(
    <div><h1 className="head">Login</h1>
        <Link className="first" to ="/Login"></Link>
              <div className="box">
            <div className="input-icons">
                <h3>Login </h3>
            <i className="fa fa-user icon"></i>
            <input className="input-field" placeholder="Enter your Name" type="text"/><br></br>
            <i className="fa fa-key icon"></i>
            <input className="input-field" placeholder="Enter your Password" type="text"/><br></br>
            
            <button className="login" ><Link className="third" to="/Login/User">Login</Link></button>
            </div>
           </div>
    </div>
)
}
export default Login