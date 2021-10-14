import React, { createContext, useContext, useReducer } from "react";
import faker from "faker";
import { CartReducer, productReducer } from "./CartReducer";

const CartContext = createContext();

const Context = ({ children }) => {
  faker.seed(99);
  // product data
  const product = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

  //   console.log(product);
  const initialState = { products: product, cart: [] };
  const [state, dispatch] = useReducer(CartReducer, initialState);
  // reducers for filtering the products
  const currentState = {byStock: false, byFastDelivery: false, byRating:0, searchQuery:""};
  const [productState, productDispatch] = useReducer(productReducer, currentState );

  return (
    <CartContext.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </CartContext.Provider>
  );
};
// normal function that return useState
const CartState = () => {
  return useContext(CartContext);
};

export default Context;
export { CartState, CartContext };
