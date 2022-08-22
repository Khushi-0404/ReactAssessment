import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import Customer from "./Customer";
import ViewMovies from "./viewMovies";
import ViewMovieAdmin from "./viewMovieAdmin";
import AddMovie from "./addMovie";
function App(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path='/admin' element={<Admin></Admin>}></Route>
                <Route path ="/customer" element={<Customer></Customer>}></Route>
                <Route path='/customer/movies' element={<ViewMovies></ViewMovies>}></Route>
                <Route path='/admin/movies' element={<ViewMovieAdmin></ViewMovieAdmin>}></Route>
                <Route path='/add' element={<AddMovie></AddMovie>}></Route>
                </Routes></BrowserRouter>
        </div>
    )
}
export default App