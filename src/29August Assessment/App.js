import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Sidebar from "./DashboardUser/Sidebar"
import Contact from "./DashboardUser/Contact";
import Orders from "./DashboardUser/Orders";
import Wishlist from "./DashboardUser/Whishlist";
import Items from "./DashboardUser/Products";
import Register from "./Register/Register";
import LoginAdmin from "./LoginAdmin/LoginAdmin";
import LoginOption from "./LoginOption";
import DashboardAdmin from "./DashboardAdmin/DashboardAdmin";
import NewRegister from "./NewAdmin/NewRegister";
function App(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register></Register>}></Route>
                <Route path="/loginoption" element={<LoginOption></LoginOption>}></Route>
                <Route path="/loginuser" element={<Login></Login>}></Route>
                <Route path="/dashboard/*" element={<Sidebar data={Items}></Sidebar>}></Route>
                 <Route path="/dashboard/contact" element={<Contact/>} ></Route>
                 <Route path="/dashboard/orders" element={<Orders/>} ></Route>
                 <Route path="/dashboard/whislist" element={<Wishlist/>} ></Route>
                 <Route path="/loginadmin" element={<LoginAdmin/>}></Route>
                 <Route path="/dashboardadmin" element={<DashboardAdmin></DashboardAdmin>}></Route>
                 <Route path='/newadmin' element={<NewRegister></NewRegister>}></Route>

                </Routes></BrowserRouter>
        </div>
    )
}
export default App