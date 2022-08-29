import React, {useState} from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Cookies from 'universal-cookie'
import './LoginStyle.css'

function LoginForm() {
    const cookies = new Cookies();
    const navigate=useNavigate()
    
    const [email, setEmail] = useState(null);
    
    const [password,setPassword] = useState(null);
    const [status,setStatus]=useState(false)

    const handleInputChange = (e,key) => {
        
        if(key=== "email"){
            setEmail(e.target.value);
        }
        
        if(key === "password"){
            setPassword(e.target.value);
        }
        

    }

    const handleSubmit  = (e) => {
        console.log(email,password);
        e.preventDefault()
        axios.post('http://localhost:5000/loginadmin',{email:email,password:password}).
        then((res)=>{
            cookies.set('accesstoken',res.data.accesstoken,{sameSite:'strict',path:'/',maxAge:30})
            setStatus(res.data.status)}).catch((e)=>console.log(e))
            console.log(status)
           
        
    }
    

    return(
        <> 
           {status?navigate("/dashboardadmin"):
        <div className="form">
            <div className="form-body">
                
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} 
                    onChange = { (e)=>handleInputChange(e ,"email")} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password}
                     onChange = {(e)=> handleInputChange(e,"password")} placeholder="Password"/>
                </div>

            </div>
            <div class="footer">
                <button onClick={(e)=>handleSubmit(e)}type="submit" class="btn">Login</button>
            </div>
            
        </div>}
        
        </>

    )       
}

export default LoginForm