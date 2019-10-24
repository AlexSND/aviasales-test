import { SET_TICKETS, SORT_BY_PRICE, SORT_BY_DURATION } from './types';

export default (state, action) => {
  switch (action.type) {
    case SET_TICKETS: {
      const slicedArray = action.payload.slice(0, 5);
      return {
        ...state,
        tickets: slicedArray,
      };
    }
    case SORT_BY_PRICE: {
      return {
        ...state,
        sort: {
          price: true,
          duration: false,
        },
      };
    }
    case SORT_BY_DURATION: {
      return {
        ...state,
        sort: {
          price: false,
          duration: true,
        },
      };
    }
    default:
      return state;
  }
};
