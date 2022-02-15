import Axios from 'axios'

export const clientData=(email)=>async(dispatch)=>{
 try{

  const {data}=await Axios.get( `https://bridalconcept.herokuapp.com/clientData/${email}`);
  localStorage.setItem("userInfo",JSON.stringify(data))
  dispatch({type:"Success_4_CLIENT",payload:data})
}catch(error){
dispatch({type:"FAIL_REQUEST_4_CLIENT",payload:error.response && error.response.data.message
? error.response.data.message
: error.message})
}
}

export const updateData=(user,email)=>async(dispatch)=>{
  try{
   const {data}=await Axios.put( `https://bridalconcept.herokuapp.com/updateData/${email}`,user);
  localStorage.setItem("userInfo",JSON.stringify(data))
   dispatch({type:"Success_4_CLIENT",payload:data})
 }catch(error){
 dispatch({type:"FAIL_REQUEST_4_CLIENT",payload:error.response && error.response.data.message
 ? error.response.data.message
 : error.message})
 }
 }


export const emailAction=(email)=>(dispatch)=>{
  dispatch({type:"email",payload:email})
}