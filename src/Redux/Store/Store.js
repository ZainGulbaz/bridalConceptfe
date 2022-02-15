import {createStore,compose,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"

import {clientReducer,DataReducer} from "../Reducer/userReducer";
import {appointmentReducer} from "../Reducer/appointmentReducer";


 const initialState={
  clientData:{
         userData:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")) :null,
    
     },
     appointData:{
        appointmentInfo:localStorage.getItem("appointmentInfo")?JSON.parse(localStorage.getItem("appointmentInfo")) :[],
   
    },
    
 }
 const reducer=combineReducers({
    clientData:clientReducer,emailDataReducer:DataReducer,appointData:appointmentReducer
     })
 const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)))
 export default store;