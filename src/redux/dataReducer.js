import { SET_TICKETS, SORT_BY_PRICE } from './types';

export default (state, action) => {
  switch (action.type) {
    case SET_TICKETS:
      return {
        ...state,
        tickets: action.payload,
      };
    case SORT_BY_PRICE: {
      const sortedTickets = [...state.tickets];
      sortedTickets.sort((a, b) => a.price - b.price);

      return {
        ...state,
        tickets: sortedTickets,
      };
    }
    default:
      return state;
  }
};
