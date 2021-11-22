import React, { useState, useEffect } from "react";
// import AddIcon from '@mui/icons-material/Add';
import { Scrollbars } from "react-custom-scrollbars-2";
import { useCartState } from "../Context/Context";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useCartState();
  const [grandTotal, setGrandTotalPrice] = useState([]);

  const total = () => {
    const { totalPrice, totalProductInCart } = cart.reduce(
      (accum, cItem) => {
        const { price, qty } = cItem;
        let subTotalPrice = Number(price) * qty;
        accum.totalPrice = accum.totalPrice + subTotalPrice;
        accum.totalProductInCart = accum.totalProductInCart + qty;
        return accum;
      },
      { totalPrice: 0, totalProductInCart: 0 }
    );
    setGrandTotalPrice([totalPrice, totalProductInCart]);
  // console.log("total price is", totalPrice+"     qty"+ totalProductInCart);

  };

  
  useEffect(() => {
      total();
  }, [cart])

  // console.log("total price is", total.price);
  return (
    <div className="container">
      <h1 className="text-center">This is cart page</h1>
      <section className="mt-5">
        <h3>shoping cart</h3>
        <p>
          You have <span className="totalItems">{cart.length}</span> diffrent
          Items & { grandTotal[1]} total items avaliable in cart
        </p>
        <div className="cartItems  py-3 bg-light ">
          {/* scrool bar start */}
          <Scrollbars>
            <div className="itemWraper mx-auto">
              {cart.map((c, i) => {
                // console.log(c);
                let { image, name, price, qty, id } = c;
                return (
                  <div
                    className="itemsContainer d-flex justify-content-between align-items-center"
                    key={c.id}
                  >
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
                      <h5 className="Producttitle">{name}</h5>
                    </div>
                    <div className="flex flex-row">
                      {/* <AddIcon/> */}
                      <button
                        className="text-black m2-2 btn"
                        onClick={() =>
                          dispatch({ type: "DECREASE_QTY", payload: id })
                        }
                      >
                        -
                      </button>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder={qty}
                        style={{ width: "50px" }}
                      />
                      <button
                        className="text-black btn "
                        onClick={() =>
                          dispatch({ type: "INCREASE_QTY", payload: id })
                        }
                      >
                        +
                      </button>
                    </div>
                    <h5 className="price">
                      RS <span className="price">{price}</span>
                    </h5>
                    <i
                      className="fal fa-times me-2"
                      onClick={() =>
                        dispatch({ type: "REMOVE_FROM_CART", payload: id })
                      }
                    ></i>
                  </div>
                );
              })}
            </div>
          </Scrollbars>
          {/* scrool bar end */}
        </div>

        <div className="d-flex flex-column align-items-end">
          <h5 className="total  mt-3 ">
            Grand Total RS <span>{grandTotal[0]}</span>
          </h5>

          <div className="d-flex flex-row justify-content-between">
            <button className="btn btn-danger mx-2" onClick={()=> dispatch({type:"CLEAR_CART"})}>Clear Cart</button>
            <button className="btn btn-info mx-2">Check out</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
