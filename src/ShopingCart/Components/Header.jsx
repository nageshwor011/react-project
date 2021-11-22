import React, { useState } from "react";
import { useCartState } from "../Context/Context";
import { Link } from "react-router-dom";
const Header = () => {
  const [getSearchQuery, setSearchQuery] = useState("");
  const {
    state: { cart },
    filterDispatch,
  } = useCartState();
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand hide">
          Navbar
        </Link>
        <div class="d-flex align-items-center">
          <form
            action=""
            method="get"
            onSubmit={(e) => {
              e.preventDefault();
              if (getSearchQuery === "") {
                alert("please type in searchbox to search");
              } else {
                filterDispatch({
                  type: "SEARCH_PRODUCT",
                  payload: getSearchQuery,
                });
              }
            }}
            className="d-flex searchDiv"
          >
            <input
              className="searchText"
              placeholder="Search product"
              type="search"
                  name=""
                  id=""
                  onChange={(e) => {
                    return setSearchQuery(e.target.value);
                  }}
                 
            />
            <button id="searchBtn" type="submit">
              <i className="far fa-search fa-1x"></i>
            </button>
          </form>
          <Link className="btn" to="/cart" style={{ color: "white" }}>
            <i className="fas fa-shopping-cart"></i> <span className="text-danger">{cart.length}</span>
          </Link>
        </div>
        <span></span>




       
       
      </div>
    </nav>
  );
};

export default Header;
