// wheere we connect all the reducers and middleware

import { createStore,  combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools } from 'redux-devtools-extension'
import { productDeatilsReducer, productListReducer } from "./reducers/productReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDeatilsReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )

export default store
