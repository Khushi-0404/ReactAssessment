import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import './style.css'
import Validation from "./validation";
function Admin(){
    const formLogin = () => {

        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
      }
    
      //Custom hook call
      const {handleChange, values,errors,handleSubmit} = Validation(formLogin);
    return(
        <div>
            <Navbar></Navbar>
          <div className="box">
            <div className="input-icons">
                <h3> Admin Login </h3>
            <i className="fa fa-user icon"></i>
            <input className="input-field" placeholder="Enter your Name" type="text" name="username" onChange={handleChange}/>
            {
        errors.username && <h3>{errors.username}</h3>

      }<br></br>
            <i className="fa fa-key icon"></i>
            <input className="input-field" placeholder="Enter your Password" type="text" name="password" onChange={handleChange}/><br></br>
            {
        errors.password && <h3>{errors.password}</h3>

            }
            <button className="login"><Link to="/admin/movies">Login</Link></button>
            </div>
            </div>
        </div>
    )
}
export default Admin