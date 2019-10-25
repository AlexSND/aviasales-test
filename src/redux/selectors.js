import { createSelector } from 'reselect';

const getTickets = (state) => state.tickets;
const getSort = (state) => state.sort;
const getStopsFilters = (state) => state.filters.stops;

const getFilteredTickets = createSelector(getTickets, getStopsFilters, (tickets, stopFilters) => {
  if (stopFilters.length > 0) {
    return [...tickets].filter((ticket) => {
      let check = false;
      stopFilters.forEach((stopsAmount) => {
        if (stopsAmount === ticket.segments[0].stops.length
          || stopsAmount === ticket.segments[1].stops.length) {
          check = true;
        }
      });
      return check;
    });
  }

  return tickets;
});

const getDisplayedTickets = createSelector(getFilteredTickets, getSort, (tickets, sort) => {
  if (tickets && tickets.length > 1 && sort.price) {
    return [...tickets].sort((a, b) => a.price - b.price);
  }

  if (tickets && tickets.length > 1 && sort.duration) {
    return [...tickets].sort((a, b) => {
      const aDuration = () => {
        let aTotalDuration = 0;
        a.segments.forEach((item) => { aTotalDuration += item.duration; });
        return aTotalDuration;
      };
      const bDuration = () => {
        let bTotalDuration = 0;
        b.segments.forEach((item) => { bTotalDuration += item.duration; });
        return bTotalDuration;
      };

      return aDuration() - bDuration();
    });
  }

  return tickets;
});

export default getDisplayedTickets;
