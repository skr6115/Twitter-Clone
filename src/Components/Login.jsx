import React from "react";
import Card  from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";
import { CardBody } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";


const Login=(props)=>{
  const {handleChange}=props;
  const [user_name, setUserName]=React.useState("");
  const [password, setPwd]=React.useState("");
  const navig=useNavigate();
  const onSubmit= async () =>
   { try{
    // const form= new FormData();
    // form.set("userName",userName);
    // form.set("password",pwd);
    // form.set("confirm_password",cpwd);
  const response= await fetch("http://localhost:4000/login/user",
   {method: "POST", 
    headers:{"content-type":"application/json"},
      body: JSON.stringify({
      username:user_name, 
      password:password,
    }), 
  });
  const data=await response.json();
  document.cookie=`authToken=${data.authToken};SameSite=None;Secure`;
  console.log(data);
  setUserName("");
  setPwd("");
  navig(`/profile/${data.id}`);
   }
   catch(err){
    console.log(err);
   }
  }
  return(
    <div className="container">
    <Card>
        <Card.Title style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
             <h3>Please Login</h3>
        </Card.Title>
        <CardBody>
        <InputGroup size="lg" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm" >Username</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm" onChange={(e)=>{setUserName(e.currentTarget.value);}}
          value={user_name}/>
        </InputGroup>
        <InputGroup size="lg" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Password</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          type="password" onChange={(e)=>{
            //bcrypt.hash
            setPwd(e.currentTarget.value);}}
            value={password}/>
        </InputGroup>
        <Button variant="primary" onClick={onSubmit}>Login</Button>
        <a href="javascript:void(0)" onClick={()=>{
          handleChange("REGISTER");
        }} style={{paddingLeft:"10px"}}>Register here </a>
        </CardBody>
    </Card>
    </div>
);};

export default Login;