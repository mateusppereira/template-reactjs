import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import history from "routes/history";
import user from "./user";

export default combineReducers({
  user,
  router: connectRouter(history)
});
