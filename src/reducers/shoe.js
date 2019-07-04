/**
 * reducers/shoe.js
 *
 * @format
 * @flow
 */

import {
  SET_SHOE_LISTINGS,
  APPEND_SHOE_LISTINGS
} from '../actions';

const initialState = {
  listings: []
};

const shoe = (state = initialState, action) => {
  const shoes = action.shoes;

  switch (action.type) {
  case SET_SHOE_LISTINGS:
    return { listings: shoes };
  case APPEND_SHOE_LISTINGS:
    return { listings: state.listings.concat(shoes) };
  default:
    return state;
  }
};

export default shoe;
