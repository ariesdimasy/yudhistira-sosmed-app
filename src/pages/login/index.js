import React, { useState } from "react";
import { Button, Col, Form, Input, Row } from "antd";
import "./index.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Row>
      <Col xs={24} xl={24}>
        <h1> Login </h1>
        <Form layout="vertical">
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
          <Button type="primary" htmlType="submit">
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
