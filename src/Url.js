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
    const response = await fetch(
      'https://weatherapi-com.p.rapidapi.com/forecast.json?q=Jurmala&days=3',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': `${process.env.REACT_APP_API_KEY}`,
          'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
        },
      }
    );

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
