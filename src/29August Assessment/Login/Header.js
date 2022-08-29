import React from 'react';
import { Link } from 'react-router-dom';
import "./LoginStyle.css"
function Header() {
    return(
        <nav className="nav">
            <div className="Login">
                <h1>Login As User<Link  className='link'to="/"><i className='fa fa-home login-icon'></i></Link></h1>
            </div>
        </nav>
    )
}
export default Header;