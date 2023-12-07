import react,{useState} from 'react';
import { useDispatch} from 'react-redux';
import { addCartProd,cartCounter } from '../actions/index';
import { useRef } from "react";
import data from "../data";
export default function ProductListing(){
const dispatch= useDispatch();
const product=data;
const [quantity,setQuantity]=useState({
   });

function handleChange(id,e){
   

      setQuantity((prev) => {
        return { ...prev, [id]: e.target.value };
      })
      
}
console.log(quantity);
return(<>
    <div className="row product_wrapper">
      
        {product.map((prod) => (
        

            <div className="col-md-3 item_wrapper {prod.id}">
            <div className='row Prod_img'>
                <img src={prod.image}></img>
                <div className='row Prod_img'><label>{prod.title}</label></div>
                <div className='row Prod_img'><label>Price:{prod.price}</label></div>
                <div className='row Prod_img'><label>Available Quantity: {prod.inStock}</label></div>
                <div className='row Prod_img'><input value={quantity[prod.id]?quantity[prod.id]:1} type="number"  onChange={(event)=>handleChange(prod.id,event)}  name="quantity"/>
                    <button onClick={(event)=>dispatch(addCartProd(prod,quantity[prod.id]?parseInt(quantity[prod.id]):1))}> Add To Cart</button>
                    
                </div>
            </div>
        </div>
        ))}
    </div>
</>)
};