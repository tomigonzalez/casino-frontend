import { coupons } from "../../data/Coupons";
import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
  TOGLE_MENU_HIDDEN,
} from "./cart-action";

const INITIAL_STATE = {
  cart: [],
  hiddenMenu: true,
  coupons: coupons,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGLE_MENU_HIDDEN:
      // console.log(!state.hiddenMenu);
      return {
        ...state,
        hiddenMenu: !state.hiddenMenu,
      };

    case ADD_TO_CART: {
      const newItem = state.coupons.find(
        (product) => product.id === action.payload
      );

      if (!newItem) {
        console.error(
          `No se encontró ningún producto con el ID ${action.payload}`
        );
        return state;
      }

      const itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case REMOVE_ONE_FROM_CART: {
      console.log("adasd");
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }

    case REMOVE_ALL_FROM_CART: {
      console.log("adasd");
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case CLEAR_CART: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};

export default cartReducer;
