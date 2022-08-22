import { Link } from "react-router-dom"
import './style.css'
function Navbar(){
    return(
        <div className="nav">
    
      <ul>
       
        <li><Link className="first" to ="/"><i className="fa fa-home icon"></i></Link>
        </li>
        <li><Link className="second" to="/admin">Admin</Link>
        </li>
      <li><Link  className="third"to ="/customer">Customer</Link> 
      </li>
      </ul></div>
    )
}
export default Navbar