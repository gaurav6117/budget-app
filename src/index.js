import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
const initialState = { budget: 0, expense:0, balance:0 };
function reducer(state = initialState, actions) {
  switch (actions.type) {
    case 'BUDGET': return {...state, budget: Number(actions.payload), balance:actions.payload - Number(state.expense) };
    case 'EXPENSE': return { ...state, expense:Number(actions.payload), balance:state.budget - Number(actions.payload)};
    default: return state;
  }
}
const store = createStore(reducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
