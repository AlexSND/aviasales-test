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
      const sortedTickets = [...state.tickets];
      sortedTickets.sort((a, b) => a.price - b.price);

      return {
        ...state,
        sort: {
          price: true,
          duration: false,
        },
        tickets: sortedTickets,
      };
    }
    case SORT_BY_DURATION: {
      const sortedTickets = [...state.tickets];
      sortedTickets.sort((a, b) => {
        const aDuration = () => {
          let aTotalDuration = 0;
          a.segments.forEach((item) => {
            aTotalDuration += item.duration;
          });
          return aTotalDuration;
        };
        const bDuration = () => {
          let bTotalDuration = 0;
          b.segments.forEach((item) => {
            bTotalDuration += item.duration;
          });
          return bTotalDuration;
        };

        return aDuration() - bDuration();
      });

      return {
        ...state,
        sort: {
          price: false,
          duration: true,
        },
        tickets: sortedTickets,
      };
    }
    default:
      return state;
  }
};
