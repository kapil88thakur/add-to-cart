import  Cart from "../components/Cart";
export default function Home(){

return(<>
 <div className="container">
    <h1>Home Page</h1>
<div className="row page_wrapper">
    <div className="col-md-9">
       Hi this is home page
    </div>

    <div className="col-md-3">
        <Cart />
    </div>

    </div>
    </div>


</>)
} 