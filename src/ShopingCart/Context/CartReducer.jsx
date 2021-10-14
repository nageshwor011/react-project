const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // return {...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    //   break;
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    //   break;
    case "DELETE_ALL":
      return { ...state, cart: [] };

    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      break;
  }
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };

    case "FILTER_BY_STOCK":
      return { ...state, byStock: !state.byStock };

    case "FILTER_BY_DELIVERY":
      return { ...state, byFastDelivery: !state.byFastDelivery };

    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };

    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };

    case "CLEAR_FILTER":
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
      };

    default:
      return { ...state };
  }
};
export { CartReducer, productReducer };
