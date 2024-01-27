import React from "react";

const useContext=React.createContext(null);
const UserProvider=(props)=>{
    const [response,setResponse]=React.useState(undefined);
    React.useEffect(()=>{
        console.log("value",document.cookie)
        const getdata= async ()=>{
            data=await fetch(`http://localhost/users/${props.id}`, {
                headers:{
                    authorization: document.cookie.split("=")[1],
                },
            });
            response=await data.json();
            setResponse(response);
        }
        getdata();
},[]);
return (
    <useContext.Provider value={response}>
        {React.Children}
    </useContext.Provider>
)

}
export default UserProvider;
