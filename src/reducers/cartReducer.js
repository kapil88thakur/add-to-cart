const initialState = {
    cartList:[],
    totalQuantity:''
}
const cartReducer=(state=initialState,action)=>{

    switch(action.type){

        case 'INCREMENT': return action.productDetail;
        case 'DECREMENT': return state-1;
        case 'CART_COUNTER': return 3;
        

        case 'ADD_TO_CART': 
            let updatedquan=false;
            let id = action.productDetail.id;
            let buyingQuantity=action.buyingQuantity;
            let add_product_to_cart={
                id:action.productDetail.id,
                price:action.productDetail.price,
                title:action.productDetail.title,
                image:action.productDetail.image,
                buyingQuantity:buyingQuantity
            }
        

              state.cartList.map((item) => {
                if (item.id === id) {
                        item.buyingQuantity=item.buyingQuantity+buyingQuantity;
                        updatedquan=true;
                       
                } 
                return updatedquan;
             });

             let sum =   state.cartList.reduce(function(prev, current) {
                return prev +current.buyingQuantity
              }, 0);
              if(updatedquan===true){
                return { 
                    ...state,
                    totalQuantity:[state.cartList.reduce(function(prev, current) {
                        return prev +current.buyingQuantity
                      }, 0)],
                };
                }else{
                    return { 
                        ...state,
                        cartList: [...state.cartList, add_product_to_cart],
                        totalQuantity:[state.cartList.reduce(function(prev, current) {
                            return prev +current.buyingQuantity
                          }, action.buyingQuantity)]
                    };
                }     
           
        default: return state;
    }
}

export default cartReducer;