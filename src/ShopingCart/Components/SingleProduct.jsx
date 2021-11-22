import React, { useState } from "react";
import Ratings from "./Ratings";
import {Button } from "@material-ui/core";
import Stack from '@mui/material/Stack';
import { useCartState } from "../Context/Context";

const SingleProduct = ({ prod }) => {
  // const [rate, setRate] = useState(3);
  const {
    state: { cart },
    dispatch,
    state,
  } = useCartState();
  return (
    <>
      <div
        className="card col-sm-10 col-md-6 col-lg-4 my-2 mx-auto"
        style={{ width: "18rem" }}
      >
        <img src={prod.image} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{prod.name}</h5>
          <h5 className="card-title">RS {prod.price}</h5>
          <p className="card-text">{prod.fastDelivery === true? <span>fast delivery</span>: <span>delivery in 4 days</span> } </p>
          <p className="card-text">{prod.inStock >=1? <span>In stock {prod.inStock}</span> : <span style={{color:"red", fontWeight:'bold'}}>Out Of Stock</span>}</p>
          {/* <Ratings rate={prod.rating} increaseRate={(p) => setRate(p + 1)} /> */}
          <Ratings rate={prod.rating} />
          {
            // some check weather id is present or not
            cart.some((p) => p.id === prod.id) ? (
              <Button
              variant="contained"
                color="error"
                className=" text-capitalize bg-danger text-white"
                onClick={() => dispatch({type:"REMOVE_FROM_CART", payload:prod.id})}
              >
                Remove from cart
              </Button>
            ) : prod.inStock > 0 ? (
              <Button variant="contained" color="primary"
                className="text-capitalize"
                onClick={() => dispatch({ type: "ADD_TO_CART", payload: prod })}
              >
                add to cart
              </Button>
            ) : (
              <Button disabled variant="contained">
                out of stock
              </Button>
            )
          }
        </div>
      </div>
     
    </>
  );
};

export default SingleProduct;
