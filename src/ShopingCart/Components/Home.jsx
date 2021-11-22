import SingleProduct from "./SingleProduct";
import React, { useState } from "react";
import { useCartState } from "../Context/Context";
import SimpleDrawer from "./SimpleDrawer";
const Home = () => {
  const {
    state: { product },
    filterState: { outOfStock, byFastDelivery, byRating, bySearch, sort },
  } = useCartState();
  console.log("fast delivery", byFastDelivery);

  // here filtering product according to user selection from home page
  const displayProductByFiltering = () => {
    let sortedProduct = product;
    if (sort) {
      sortedProduct = sortedProduct.sort((a, b) => {
        return sort === "lowToHigh" ? a.price - b.price : b.price - a.price;
      });
    }

    if (!outOfStock) {
      sortedProduct = sortedProduct.filter((cItem) => cItem.inStock);
    }
    if (byFastDelivery) {
      sortedProduct = sortedProduct.filter((cItem) => cItem.fastDelivery);
    }
    if (byRating) {
      sortedProduct = sortedProduct.filter((c) => c.rating >= byRating);
    }
    if (bySearch) {
      sortedProduct = sortedProduct.filter((c) =>
        c.name.toLowerCase().includes(bySearch)
      );
    }

    return sortedProduct;
  };

  return (
    <div className="container-fluid">
        <div className="row">
          <SimpleDrawer/>
          {displayProductByFiltering().map((cItem) => {
            // {product.map((cItem) => {
            return <SingleProduct key={cItem.id} prod={cItem} />;
          })}
        </div>
    

      {/* main row end */}
    </div>
  );
};

export default Home;
