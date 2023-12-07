//export const incNumber=(num)=>{  return  {type : "INCREMENT", payload:num }    }
//export const decNumber=()=>{      return  {type : "DECREMENT"}   }

export const addCartProd=(prod,buyingQuantity)=>{  return  {type : "ADD_TO_CART", productDetail:prod,buyingQuantity:buyingQuantity }    }
export const remCartProd=()=>{      return  {type : "REMOVE_TO_CART"}   }
export const cartCounter=()=>{      return  {type : "CART_COUNTER"}   }