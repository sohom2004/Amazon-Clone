import { ProductReducers } from "./productReducers";
import {combineReducers} from "redux";

const rootReducers = combineReducers({
    getProductsData:ProductReducers
});

export default rootReducers;