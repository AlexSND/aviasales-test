import { createSelector } from 'reselect';

const getTickets = (state) => state.tickets;
const getSort = (state) => state.sort;

const getDisplayedTickets = createSelector(getTickets, getSort, (tickets, sort) => {
  if (sort.price) {
    return [...tickets].sort((a, b) => a.price - b.price);
  }

  if (sort.duration) {
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
