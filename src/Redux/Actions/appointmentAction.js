import Axios from 'axios'

export const appointmentData=(email)=>async(dispatch)=>{
 try{

  const {data}=await Axios.get(`https://bridalconcept.herokuapp.com/appointmentData/${email}`);
  localStorage.setItem("appointmentInfo",JSON.stringify(data))
  dispatch({type:"Success_4_APPOINT",payload:data})
}catch(error){
dispatch({type:"FAIL_REQUEST_4_APPOINT",payload:error.response && error.response.data.message
? error.response.data.message
: error.message})
}
}