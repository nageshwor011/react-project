import React from "react";

const Reducers = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c, i) => c.id !== action.payload),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: []
      };
    case "INCREASE_QTY":
      return {
        ...state,
        cart: state.cart.map((c, i) => {
          if (c.id === action.payload) {
            return {...c, qty: c.qty +1}
          }
          return c;
        }),
      };
    case "DECREASE_QTY":
      return {
        ...state,
        cart: state.cart.map((c, i) => {
          if (c.id === action.payload) {
            return {...c, qty: c.qty >1? c.qty -1 : c.qty}
          }
          return c;
        }),
      };

    default:
      break;
  }
};
const FilterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return {...state, sort: action.payload};
      
    case "FILTER_BY_STOCK":
      return {...state, outOfStock: !state.outOfStock};
    case "FAST_DELIVERY":
      return {...state, byFastDelivery: !state.byFastDelivery};
    case "SORT_BY_RATING":
       return {...state, byRating: action.payload};
    case "SEARCH_PRODUCT":
      return {...state, bySearch: action.payload}
    case "CLEAR_FILTER":
      return {outOfStock: false, byRating:0, bySearch: "", byFastDelivery: false}
    default:
      return {...state}
      break;
  }
  
}



export default Reducers;
export {FilterReducer};
