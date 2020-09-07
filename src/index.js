import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";

import RootComponent from "./rootcomponent/app";
import allReducersCombined from './reducer/reducer-combineall';

const reduxStore = createStore(allReducersCombined)
console.log("Store is created....");
console.log(reduxStore);


ReactDOM.render(
  <Provider store={reduxStore}>
      <RootComponent></RootComponent>
  </Provider>
 ,
  document.getElementById('root')
);

