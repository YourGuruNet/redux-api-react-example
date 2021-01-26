import React from 'react';
import { connect } from 'react-redux';

export const DECREASE = 'DECREASE';
export const INCREASE = 'INCREASE';
export const RESET = 'RESET';

export const Reset = () => {
  return { type: RESET };
};
// Setup initial states
const defaultState = {
  count: 0,
};
// Reducer setup
export const UrlReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DECREASE:
      return { ...state, count: state.count - 1 };
    case INCREASE:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

const Url = () => {
  return <div>Hello from url</div>;
};

// States
function mapStateToProps() {}
// Functions
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Url);
