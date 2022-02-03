import {createStore,compose,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"

import {clientReducer,DataReducer} from "../Reducer/userReducer";



 const initialState={
  clientData:{
         userData:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")) :null,
    
     },
    
 }
 const reducer=combineReducers({
    clientData:clientReducer,emailDataReducer:DataReducer
     })
 const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)))
 export default store;