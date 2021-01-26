import React from 'react';
import Items from './Items';
// Setup initial states
const defaultState = {
  loading: true,
  products: [],
};

export const SET_LOADING = 'SET_LOADING';
export const GET_PRODUCTS = 'GET_PRODUCTS';

export const setLoading = () => {
  return { type: SET_LOADING };
};
export const getProducts = () => {
  return async function (dispatch) {
    dispatch(setLoading());
    const response = await fetch(`https://${process.env.REACT_APP_API_KEY}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '46c53b5e75msh8b1584cc59252d3p188b3ajsn83eab7e8b183',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
      },
    });

    const data = await response.json();
    dispatch({ type: GET_PRODUCTS, payload: data });
  };
};

// Reducer setup
export const UrlReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case GET_PRODUCTS:
      return { ...state, loading: false, products: action.payload };
    default:
      return state;
  }
};

const Url = () => {
  return <Items />;
};

export default Url;
