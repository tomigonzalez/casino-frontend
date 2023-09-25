import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import categoriesReducer from "./categories/categories-reducer";
import machineReducer from "./machine/machine-reducer";
import bigwinReducer from "./bigwins/bigwins-reducer";

import storage from "redux-persist/es/storage";
import seccionesReducer from "./seccion/seccion-reducer";
import userReducer from "./user/user-reducer";
import couponsReducer from "./coupons/coupons-reducer";
import cartReducer from "./cart/cart-reducer";
import ordersReducer from "./orders/orders-reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whiteList: ["user"],
};

const rootReducer = combineReducers({
  machine: machineReducer,
  categories: categoriesReducer,
  bigwins: bigwinReducer,
  secciones: seccionesReducer,
  user: userReducer,
  coupons: couponsReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

export default persistReducer(persistConfig, rootReducer);
