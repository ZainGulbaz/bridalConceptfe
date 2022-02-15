export  const appointmentReducer=(state={appointmentInfo:[]},action)=>{
  switch(action.type){
      
      case "Success_4_APPOINT":return{
        ...state,    appointmentInfo:action.payload
      }
      case "FAIL_REQUEST_4_APPOINT":return{
         error:action.payload
           }
      
      default:return state
  }

}