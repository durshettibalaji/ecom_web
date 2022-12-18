import { combineReducers } from "redux";
import { productreducer ,selectedProductsReducer } from "./productreducer";




const reducers =combineReducers({
    allProducts: productreducer,
    product:selectedProductsReducer,
});


export default reducers;