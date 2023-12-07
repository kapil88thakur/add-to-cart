import {useSelector,useDispatch } from 'react-redux';
import { cartCounter } from '../actions/index';
import {useState } from 'react';
import product from "../data";


export default function Cart(){


    const cartList= useSelector((state)=>state.cartReducer);
  
  

    console.log(cartList);
return(<>
<div className="row cartList">
<h1>{cartList.totalQuantity}</h1>

{ cartList.cartList.map((key) => (
   

<div>


  <img src={key.image} /> 
   <p>{key.title}</p> 
    <p>{key.buyingQuantity}</p>
    <p>{key.price}</p>
    
</div>
      
      
      
    
) ) }

</div>
    



</>)



}