import axios from 'axios';
import { SET_TICKETS, SORT_BY_PRICE } from './types';

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

const sortByPrice = (dispatch) => dispatch({
  type: SORT_BY_PRICE,
});

export { getTickets, sortByPrice };
