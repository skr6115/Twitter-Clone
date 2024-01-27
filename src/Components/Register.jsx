import React from "react";
import Card  from "react-bootstrap/Card";
import "../styles/style.css";
import { CardBody } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
//import bcrypt from "bcrypt";


const Register=(props)=>{
    const {handleChange}=props;
    const [user_name, setUserName]=React.useState("");
    const [password, setPwd]=React.useState("");
    const [confirm_password, setCpwd]=React.useState("");
    
   const onSubmit= async () =>
   { try{
    // const form= new FormData();
    // form.set("userName",userName);
    // form.set("password",pwd);
    // form.set("confirm_password",cpwd);
  const response= await fetch("http://localhost:4000/signup/user",
   {method: "POST", 
    headers:{"content-type":"application/json"},
      body: JSON.stringify({
      username:user_name, 
      password:password,
      confirmpassword:confirm_password,
    }), 
  });
  const data=await response.json();
  console.log(data);
  setUserName("");
  setPwd("");
  setCpwd("");
  handleChange("LOGIN");
   }
   catch(err){
    console.log(err);
   }
  }
    return(
    <div className="container">
    <Card>
        <Card.Title style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
             <h3>Register Here</h3>
        </Card.Title>
        <CardBody>
        <InputGroup size="lg" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Username</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e)=>{setUserName(e.currentTarget.value);}}
          value={user_name}/>
        </InputGroup>
        <InputGroup size="lg" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Password</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          type="password"
          onChange={(e)=>{
            //bcrypt.hash
            setPwd(e.currentTarget.value);}}
            value={password}/>
        </InputGroup>
        <InputGroup size="lg" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Confirm password</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          type="password"
          onChange={(e)=>{
            //bcrypt.hash
            setCpwd(e.currentTarget.value);}}
            value={confirm_password}/>
        </InputGroup>
        <Button variant="primary" onClick={onSubmit} >Register</Button>
        <a href="javascript:void(0)" onClick={()=>{
          handleChange("LOGIN");
        }} style={{paddingLeft:"10px"}}>Login Now ! </a>
        </CardBody>
    </Card>
    </div>

    );};

export default Register;