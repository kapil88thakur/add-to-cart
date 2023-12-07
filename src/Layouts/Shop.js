import ProductListing from "../components/ProductListing";
import  Cart from "../components/Cart";
import {createBrowserRouter, Link, RouterProvider,createRoutesFromElements,Route} from 'react-router-dom';
export default function Shop(){

return(<>
< Link to="/home">Home</Link>
 <div className="container">
    <h1>Product Page</h1>
<div className="row page_wrapper">
    <div className="col-md-9">
        <ProductListing />
    </div>

    <div className="col-md-3">
        <Cart />
    </div>

    </div>
    </div>


</>)
} 