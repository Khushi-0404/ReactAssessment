import React, {useState, useEffect} from 'react';
import './RegisterStyle.css'
import {Link} from "react-router-dom"
import axios from 'axios'
import {useNavigate } from 'react-router-dom'

function RegistrationForm() {
  const navigate=useNavigate()
  
const initialValues = { firstName: "", lastName:"", email: "",phone:"", password: "" ,confirmPassword:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [status,setStatus]=useState(false)
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (Object.keys(formErrors).length === 0){
    setIsSubmit(true)
    
    }
    else{
      setIsSubmit(false)
    }
    
  };
  

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      handleRegister()
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "Firstname is required!";
    }
    if (!values.lastName) {
        errors.lastName = "Lastname is required!";
      }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if(!values.phone){
        errors.phone="Phone No. is required";
    }else if (values.phone.length < 10){
        errors.phone = "Phone No. consists 10 digit number";
    }else if (values.phone.length > 10){
      errors.phone = "Phone No. consists 10 digit number";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if(!values.confirmPassword){
        errors.confirmPassword="This section is required"
    }else if(values.password!==values.confirmPassword){
        errors.confirmPassword="It should be same as password"
    }

    return errors;
  };
  function handleRegister() {
    axios.post("http://localhost:5000/register",formValues).then(response => {
      console.log(response)
      console.log(response.data);
      setStatus(response.data.status)
      setFormValues(response.data)
      alert("Account created Enjoy Shopping")
      
    });
  }

    
    
    



    
    

    return(
        <div>
        {status?navigate('/loginoption'):
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-body">
                <div className="firstname">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" value={formValues.firstName} name="firstName"
                    onChange={handleChange} id="firstName" placeholder="First Name"/>
                    
                </div>
                <p className='error'>{formErrors.firstName}</p>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text"  id="lastName"className="form__input" value={formValues.lastName} name="lastName"  onChange = {(e) => handleChange(e)} placeholder="LastName"/>
                </div>
                <p className='error'>{formErrors.lastName}</p>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={ formValues.email}  name="email" onChange = {(e) => handleChange(e)} placeholder="Email"/>
                </div>
                <p className='error'>{formErrors.email}</p>
                <div className="phone">
                    <label className="form__label" for="email">Phone No. </label>
                    <input  type="phone" id="phone" className="form__input" value={formValues.phone}  name="phone"onChange = {(e) => handleChange(e)} placeholder="Phone No."/>
                </div>
                <p className='error'>{formErrors.phone}</p>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={formValues.password} name="password" onChange = {(e) => handleChange(e)} placeholder="Password"/>
                </div>
                <p className='error'>{formErrors.password}</p>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" value={formValues.confirmPassword} name="confirmPassword" onChange = {(e) => handleChange(e)} placeholder="Confirm Password"/>
                </div>
                <p className='error'>{formErrors.confirmPassword}</p>
            </div>
            <div class="footer">
                <button  type="submit" class="registe-btn"  >Register</button>
                <button  type="submit" class="account-btn" ><Link to="/loginoption">Already have account</Link></button>
            </div>
        </form>}
</div>
       
    )       
}

export default RegistrationForm