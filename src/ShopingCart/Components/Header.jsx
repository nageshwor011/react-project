import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartState } from "../Context/Context";
import { AiOutlineDelete } from "react-icons/ai";

const Header = () => {
  const {
    state: { cart },
    dispatch, productDispatch
  } = CartState();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Shoping cart
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {/* home icon */}
              <form className="d-flex" method="get">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ width: "600px" }}
                  onChange={(e)=>{ productDispatch({type:"FILTER_BY_SEARCH", payload: e.target.value}); }}
                />
                <button className="btn btn-outline-light" type="submit">
                  Search
                </button>
              </form>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to=""
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {/* <i className="fal fa-shopping-bag text-white"></i> */}
                  <button className="btn ">
                    <FaShoppingCart
                      style={{ color: "white", fontSize: "23px" }}
                    />
                    <span className="text-white ">{cart.length}</span>
                  </button>
                </Link>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {cart.length > 0 ? (
                    <>
                      {cart.map((prod) => {
                        return (
                          <div
                            className="card d-flex flex-row"
                            style={{ width: "18rem" }}
                          >
                            <div
                              style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                              }}
                            >
                              <img
                                src={prod.image}
                                className="img-fluid mt-3"
                                alt="..."
                              />
                            </div>

                            <div className="card-body">
                              <hp className="card-title">{prod.name}</hp>
                              <div className="d-flex justify-content-between">
                                <h6 className="card-title">
                                  RS
                                   {prod.price.split(".")[0]}
                                </h6>
                                {/* here spiting and taking first element from dot */}

                                <AiOutlineDelete
                                  className="text-danger"
                                  style={{ width: "18px" }}
                                  onClick={() =>
                                    dispatch({
                                      type: "REMOVE_FROM_CART",
                                      payload: prod,
                                    })
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      <div className="text-center mt-1">
                        <Link to="/cart">
                      <button className="btn btn-primary">got to cart page</button>
                      </Link>
                      </div>
                    </>
                  ) : (
                    <li>Cart is empty</li>
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
