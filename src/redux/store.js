import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './dataReducer';


const initialState = {
  filter: {
    oneStop: false,
    twoStops: false,
    threeStops: false,
  },
  sort: {
    price: false,
    duration: false,
  },
  tickets: [],
};

const store = createStore(reducer, initialState, compose(
  applyMiddleware(thunkMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

export default store;
