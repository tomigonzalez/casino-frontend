import { coupons } from "../../data/Coupons";

const INITIAL_STATE = {
  coupons: coupons,
};

const couponsReducer = (state = INITIAL_STATE, action) => {
  switch (action) {
    default:
      return state;
  }
};

export default couponsReducer;
