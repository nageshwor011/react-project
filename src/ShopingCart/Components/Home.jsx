import React from "react";
import { CartState } from "../Context/Context";
import SideBar from "./SideBar";
import SingleProduct from "./SingleProduct";

const Home = () => {
  //object destructuring state
  //again state is destructuring simply double destructuring
  const {
    state: { products },
    productState: { byStock, byFastDelivery, byRating, searchQuery, sort },
  } = CartState();
  console.log("tot rating ", byRating);

  const transformProduct = () => {
    let sortedProcucts = products;

    if (sort) {
      sortedProcucts = sortedProcucts.sort((a, b) => {
        return sort === "lowToHigh" ? a.price - b.price : b.price - a.price;
      });
    }
    if(!byStock){
      sortedProcucts = sortedProcucts.filter((prod)=>{ return prod.inStock})
    }
    if(byFastDelivery){
      sortedProcucts  = sortedProcucts.filter((prod)=> prod.fastDelivery)
    }
    if(byRating){
      sortedProcucts = sortedProcucts.filter((prod)=>prod.rating === byRating)
    }
    if(searchQuery){
      sortedProcucts = sortedProcucts.filter((prod)=> prod.name.toLowerCase().includes(searchQuery));
    }
    console.log(sortedProcucts);
    return sortedProcucts;
  };

  return (
    <div className="container-fluid">
      <div className="d-flex my-2">
        <div className="sidebar my-3 one">
          <SideBar />
        </div>
        <div className="row">
          {transformProduct().map((prod) => {
            return <SingleProduct key={prod.id} prod={prod} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
