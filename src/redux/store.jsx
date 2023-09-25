// import rootReducer from "./root-reducer";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import persistStore from "redux-persist/es/persistStore";

// const initialState = {};
// const middleware = [thunk];

// export const store = createStore(
//   rootReducer,
//   initialState,
//   applyMiddleware(...middleware)
// );

// export const persistor = persistStore(store);
import rootReducer from "./root-reducer";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

const middleware = [thunk];

export const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});

export const persistor = persistStore(store);
