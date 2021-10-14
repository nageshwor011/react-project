import React from "react";
import Ratings from "./Ratings";
import {CartState} from "../Context/Context";

//here array get destructure and a object obj is taken out 
const SingleProduct = ({prod}) => {
  const {state:{cart}, dispatch} = CartState()
  
  
  return (
    <>
      <div className="col-lg-4 gy-3 col-md-6 col-10 mx-auto" key={prod.id}>
        <div className="card" style={{ width: "18rem" }}>
          <img src={prod.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{prod.name}</h5>
            <h6>RS {prod.price}</h6>
            {prod.fastDelivery ? (
              <p className="card-text">Fast Delivery </p>
            ) : (
              <p className="card-text">Delivery in 4 days </p>
            )}

            <div className="rating">
              <Ratings rating={prod.rating} />
            </div>
            { // some method check some thing present in array or not
              cart.some(insideCartProduct=>insideCartProduct.id === prod.id)? <button className="btn btn-danger  text-capitalize" onClick={()=>dispatch({type:"REMOVE_FROM_CART", payload:prod})} >Remove from cart</button> : (prod.inStock <= 0 ? (
                <button className="btn btn-secondary disabled text-capitalize">
                  Currently out of stock
                </button>
              ) : (
                <button className="btn btn-primary  text-capitalize" onClick={()=>{dispatch({type:"ADD_TO_CART", payload:prod});console.log("added in cart ", cart);}}>
                 
                  Add to cart
                </button>
              ))
            }

           
          </div>
        </div>
      </div>

      {/*  scard */}
    </>
  );
};

export default SingleProduct;
