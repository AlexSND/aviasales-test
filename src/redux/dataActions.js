import axios from 'axios';
import {
  SET_TICKETS,
  SORT_BY_PRICE,
  SORT_BY_DURATION,
  SET_STOPS_FILTER,
} from './types';

const getTickets = () => (
  (dispatch) => {
    axios.get('https://front-test.beta.aviasales.ru/search')
      .then((res) => {
        axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${res.data.searchId}`)
          .then((res) => {
            dispatch({
              type: SET_TICKETS,
              payload: res.data.tickets,
            });
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
);

const sortByPrice = () => (dispatch) => dispatch({
  type: SORT_BY_PRICE,
});

const sortByDuration = () => (dispatch) => dispatch({
  type: SORT_BY_DURATION,
});

const setStopsFilter = (filterValues) => (dispatch) => dispatch({
  type: SET_STOPS_FILTER,
  payload: filterValues,
});

export {
  getTickets,
  sortByPrice,
  sortByDuration,
  setStopsFilter,
};
