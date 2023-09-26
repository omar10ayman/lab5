import { combineReducers } from "redux";
import favouriteReducer from "./favouritesReducers";
 const rootReducer=combineReducers({
    favourite: favouriteReducer,
 })
export default rootReducer