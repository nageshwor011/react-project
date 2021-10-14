import React, { useState, useEffect } from "react";
import { CartState } from "../Context/Context";
import { Scrollbars } from "react-custom-scrollbars-2";

const Cart = () => {
  const {
    state: { cart }, state,
    dispatch,
  } = CartState();
  // console.log(cart);
  const [grandTotalPrice, setGrandTotalPrice] = useState();

  const totalPrice = ()=>{
    setGrandTotalPrice(cart.reduce((accum, cur)=>{
      return  accum + Number(cur.price)* cur.qty;
      },0))
  }
  useEffect(() => {
   totalPrice();
  }, [cart])
  return (
    <>
      <div className="container">
        <h4>This is cart page</h4>

        <section className="mt-5">
          <h3>shoping cart</h3>
          <p>
            You have <span className="totalItems">{cart.length}</span> diffrent
            Items & total items avaliable in cart
          </p>
          <div className="cartItems  py-3 bg-light ">
            {/* scrool bar start */}
            <Scrollbars>
            <div className="itemWraper mx-auto">
              {cart.map((c, i) => {
                // console.log(c);
                let { image, name, price } = c;
                return (
                  <div className="itemsContainer d-flex justify-content-between align-items-center">
                    <div className="product">
                      <img
                        className="img-fluid py-1"
                        src={image}
                        alt=""
                        srcSet=""
                        width="150px"
                        height="150px"
                      />
                      {/* {ProductData.} */}
                    </div>
                    <div className="d-flex flex-column title">
                      <h5>{name}</h5>
                      <h6 className="text-muted">stock {c.inStock}</h6>
                    </div>
                    <div className="flex flex-row">
                    <select className="form-select" onChange={(e)=>{dispatch({type:"CHANGE_CART_QTY", payload:{id: c.id, qty: e.target.value}}); }}>
                      <option >select the quantity</option>
                      {
                        [...Array(c.inStock)].map((item, i)=>{
                          return( <option value={i+1} key={i}>{i+1}</option>)
                        })
                      }
                      
                    </select>
                      
                    </div>
                    <h5>
                      RS {Number(price)} <span></span>
                    </h5>
                    <i className="fal fa-times me-2" onClick={()=> dispatch({type:"REMOVE_FROM_CART", payload:c})}></i>
                  </div>
                );
              })}
            </div>
            </Scrollbars>
            {/* scrool bar end */}
          </div>

          <div className="d-flex flex-column align-items-end">
            <h5 className="total  mt-3 ">
              Grand Total RS <span>{grandTotalPrice}</span>
            </h5>
           

            <div className="d-flex flex-row justify-content-between">
              <button className="btn btn-danger mx-2" onClick={()=>dispatch({type:"DELETE_ALL"})}>Clear Cart</button>
              <button className="btn btn-info mx-2">Check out</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
