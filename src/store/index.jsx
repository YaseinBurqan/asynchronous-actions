import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
// import thunk from 'redux-thunk';
import thunk from "../middleware/middleware";

const reducers = combineReducers({
  data: reducer,
});
const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();
