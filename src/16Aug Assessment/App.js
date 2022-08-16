import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Items from "./BookData";
import Home from "./Home";
import Login from "./Login";
import Product from "./Product";
import SearchAuthor from "./SearchAuthor";
import UserPage from "./UserPage";
import SortPrice from './SortPrice'
import SortRating from './SortRating'

function App(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path ="/" element={<Home></Home>}></Route>
                <Route path ="/Login" element={<Login></Login>}></Route>
                <Route path ="/Login/User" element={<UserPage></UserPage>}></Route>
                <Route path="/Books" element={<Product data={Items}></Product>}></Route>
                <Route path ="/Author" element={<SearchAuthor data={Items}></SearchAuthor>}></Route>
                <Route path ="/Price" element={<SortPrice data={Items}></SortPrice>}></Route>
                <Route path ="/Rating" element={<SortRating data={Items}></SortRating>}></Route>
                
            </Routes>
                </BrowserRouter>
        </div>
    )
}
export default App