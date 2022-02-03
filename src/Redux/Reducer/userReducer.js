export  const clientReducer=(state={userData:{}},action)=>{
  switch(action.type){
      
      case "Success_4_CLIENT":return{
        ...state,    userData:action.payload
      }
      case "FAIL_REQUEST_4_CLIENT":return{
         error:action.payload
           }
      
      default:return state
  }

}

export const DataReducer = (state , action) => {
  switch (action.type) {
    case "email":
    return action.payload.email;
    
    default:
    return 0;
  }
};


