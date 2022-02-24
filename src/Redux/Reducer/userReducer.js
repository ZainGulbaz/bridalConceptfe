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

export const DataReducer = (state={userData:{}} , action) => {
  switch (action.type) {
    case "email":
    return { ...state,    userData:action.payload};
    
    default:
    return state;
  }
};


