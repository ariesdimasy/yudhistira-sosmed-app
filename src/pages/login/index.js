import React, { useState } from "react";
import { Button, Col, Form, Input, Row } from "antd";
import { redirect } from "react-router-dom"
import { loginProcess } from "../../api/auth";
import "./index.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginProcess = async (e) => {
    // e.preventDefault()
    const result = await loginProcess({ 
      email:email,
      password:password
    })
    console.log("result => ", result )
    if(result.data.success) { 
      const payload = {
        id: result.data.data.id,
        name: result.data.data.name,
        email: result.data.data.email,
        username: result.data.data.username,
        token:result.data.data.token
      }
     localStorage.setItem("userLogin",JSON.stringify(payload)) 

      redirect("/tweets")
    } else { 
      alert(JSON.stringify(result.data.message))
    }
  }

  return (
    <Row>
      {JSON.stringify({ 
        "email":email,
        "password":password
      })}
      <Col xs={24} xl={24}>
        <h1> Login </h1>
        <Form method="post" layout="vertical" onSubmit={(e) => handleLoginProcess(e)}>
          <Form.Item label="Email or Username">
            <Input
              type="text"
              value={email}
              defaultValue={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></Input>
          </Form.Item>
          <Form.Item label="Password">
            <Input
              type="password"
              value={password}
              defaultValue={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></Input>
          </Form.Item>
          <Button type="primary" onClick={handleLoginProcess} >
            Submit
          </Button>
          <div className="register-link">
            <a href="/register"> Create Account </a>
          </div>
        </Form>
      </Col>
    </Row>
  );
}
