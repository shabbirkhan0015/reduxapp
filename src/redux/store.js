import { createStore } from "redux";

import reducers from "./reducers/index";

const store = createStore(
    reducers,  // This is where you pass your root reducer or combined reducers
    {},        // This is the initial state of your Redux store
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // This is to enable Redux DevTools extension
  );
export default store;