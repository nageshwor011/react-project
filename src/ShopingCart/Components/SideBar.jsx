import React from "react";
import Ratings from "./Ratings";
import { CartState } from "../Context/Context";

const SideBar = () => {
  const formSubmit = (e) => {
    e.preventDefault();
  };

  const {
    productState: { byStock, byFastDelivery, byRating, searchQuery, sort },
    productDispatch,
  } = CartState();
  // console.log("by rating is ", );
  // console.log(byStock, byFastDelivery, byRating, sort, searchQuery);

  return (
    <div className=" border-2 sidebar bg-danger">
      <ul className="nav flex-column ps-3 text-white">
        <h3>Filter Products</h3>
        <form action="" onSubmit={formSubmit} method="post">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="lowToHigh"
              onChange={()=>productDispatch({type:"SORT_BY_PRICE", payload:"lowToHigh"})}
              checked={sort === "lowToHigh"? true: false}
            />
            <label className="form-check-label" htmlFor="lowToHigh">
              Price low to high
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="highToLow"
              onChange={()=>productDispatch({type:"SORT_BY_PRICE", payload:"highToLow"})}
              checked={sort === "highToLow"? true: false}
            />
            <label className="form-check-label" htmlFor="highToLow">
              Price high to low
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="outOfStock"
              onChange={()=>{productDispatch({type:"FILTER_BY_STOCK"})}}
              checked={byStock}
            />
            <label className="form-check-label" htmlFor="outOfStock">
              include Out of stock
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="fastDelivery"
             onChange={()=>productDispatch({type:"FILTER_BY_DELIVERY"})}
             checked={byFastDelivery}
            />
            <label className="form-check-label" htmlFor="fastDelivery">
              fast Delivery only
            </label>
          </div>
          {/* rating */}
          <Ratings
            rating={byRating}
            starClick={(i) => {productDispatch({type:"FILTER_BY_RATING", payload: i+1}); }}
            style={{ cursor: "pointer" }}
          />
          <button className="btn btn-light w-75 mt-3" onClick={()=>{productDispatch({type:"CLEAR_FILTER"})}}>Clear Filter</button>
        </form>
      </ul>
    </div>
  );
};

export default SideBar;
