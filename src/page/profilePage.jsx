import React from "react";

const ProfilePage=()=>{
const [data,setData]=React.useState(undefined);
React.useEffect(()=>{
   const getData=async ()=>{
     const data=await fetch("https://dummyjson.com/products");
     const response=await data.json();
     setData(response);
     
    }
    getData();
   
},[])
console.log(data);
React.useEffect(()=>{
const script=document.createElement("script");
script.src="https://checkout.razorpay.com/v1/checkout.js";
document.body.appendChild(script);
},[]);
const invokePayment=(price,id)=>{
    console.log("price",price)
    var options={
        key:"rzp_test_ES1JeKDmoZQkun",
        amount:price*100,
        currency:"INR",
        name:"Twitter clone",
        themr:{
            color:"blue"
        }

    };
    var transaction=new window.Razorpay(options)
        transaction.open();
    
};

    return(<>
    <div style={{display:"flex",
    justifyContent:"center", alignItems:"center"}}>{ 
    data ? data.products.map((item,index)=>(<>
    <div key={index}>{item.title}</div>
    <img src={item.thumbnail} alt="image not found" width="100px" height="100px"/>
    <div>{item.price}</div>
    <button onClick={()=>{invokePayment(item.price,item.id)}}>
        Buy Rs {item.price}
    </button>
   
    </>)):""
   
    }  </div> </>);
};

export default ProfilePage;

