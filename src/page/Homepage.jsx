import React from "react";
import Login from "../Components/Login";
//import { Step } from "../constants/constants";
import Register from "../Components/Register";
import { useNavigate } from "react-router-dom";
const Homepage=()=>{
    const [step,setStep]=React.useState("LOGIN");
const navig=useNavigate();
const [response,setResponse]=React.useState("undefined");
React.useEffect(()=>{
 
 async function getAuthData()
 {try{const cookie = document.cookie.split("=");
 if(cookie.length > 0)   
 {console.log(cookie);
    const data= await fetch("http://localhost:4000/user/auth/check",{
        headers :{
            authorization :cookie[1],
        },
    });
    const response=await data.json();
    setResponse(response);
    navig(`profile/${response.id}`);
    
} else {
    navig('/');
    setResponse("data");
}
    
 }catch(err){
    navig('/');
    setResponse("data");
 }}
 
    getAuthData();

},[]);
if(!response)
{
   return(<h1 style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100vw", height:"100vh"}}>Loading....</h1>)
}
return (<>
{step==="LOGIN"?
(<Login handleChange={(state)=>{setStep(state);}}/>):
(<Register handleChange={(state)=>{ setStep(state);}} />)}
</>);
};
export default Homepage;