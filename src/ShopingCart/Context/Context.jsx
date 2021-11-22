import React, { createContext, useContext, useReducer } from 'react'
import Reducers,{FilterReducer} from './Ruducers';
import Products from './Products';
const CartContext = createContext();
const Context = ({children}) => {
    
       

    const initialState = {product:Products, cart:[]};
    const [state, dispatch] = useReducer(Reducers, initialState)
    // console.log("product data ",Products);
    
    // this reducer is for filtering the product
    const currentFilterState = {outOfStock: false, byFastDelivery:false, byRating:0, bySearch:''}
    const [filterState, filterDispatch] = useReducer(FilterReducer, currentFilterState );
    return (
        <>
        <CartContext.Provider value={{state, dispatch, filterState, filterDispatch}}>
            {children}
        </CartContext.Provider>    
        </>
    )
}
const useCartState = ()=>{
    return useContext(CartContext);
}

export default Context
export {CartContext, useCartState}
