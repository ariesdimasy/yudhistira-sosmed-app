import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import {Button, Col, Form, Input, Row } from "antd";
import { registerProcess } from "../../api/auth";
import "./index.css";

const RegisterSchema = yup.object().shape({
  name: yup
    .string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  username: yup
    .string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  phone_number: yup.number().required("required"),
  password: yup
    .string()
    .min(6, "Password must be more than 6 characters")
    .required("Required"),
  password_confirm: yup
    .string()
    .oneOf([yup.ref("password")], "Your passwords do not match.")
    .required("Required"),
});

export default function Register() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      phone_number: "",
      password: "",
      password_confirm: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {

      console.log("values => ", values);
      process.exit()
     
      registerProcess(values).then(res => {
        if(res.data.success) { 
        
          navigate("/login")
        } else { 
          alert(JSON.stringify(res.data.message))
        }
      })
      .catch(err => {
        alert(JSON.stringify(err))
      }) 
    },
  });
  return (
    <Row>
      <Col xs={24} sm={24} xl={24}>
        <h1>Register</h1>

        <Form method="post" layout="vertical" onFinish={formik.handleSubmit}>
          <Form.Item label="Name">
            <Input
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            ></Input>
            {formik.errors.name && (
              <span style={{ color: "red", textAlign: "left" }}>
                {formik.errors.name}
              </span>
            )}
          </Form.Item>

          <Form.Item label="Username">
            <Input
              type="text"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
            ></Input>
            {formik.errors.username && (
              <span style={{ color: "red", textAlign: "left" }}>
                {formik.errors.username}
              </span>
            )}
          </Form.Item>

          <Form.Item label="Email">
            <Input
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            ></Input>
            {formik.errors.email && (
              <span style={{ color: "red", textAlign: "left" }}>
                {formik.errors.email}
              </span>
            )}
          </Form.Item>

          <Form.Item label="Phone Number">
            <Input
              type="text"
              name="phone_number"
              onChange={formik.handleChange}
              value={formik.values.phone_number}
            ></Input>
            {formik.errors.phone_number && (
              <span style={{ color: "red", textAlign: "left" }}>
                {formik.errors.phone_number}
              </span>
            )}
          </Form.Item>

          <Form.Item label="Password">
            <Input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            ></Input>
            {formik.errors.password && (
              <span style={{ color: "red", textAlign: "left" }}>
                {formik.errors.password}
              </span>
            )}
          </Form.Item>

          <Form.Item label="Password Confirmation">
            <Input
              type="password"
              name="password_confirm"
              onChange={formik.handleChange}
              value={formik.values.password_confirm}
            ></Input>
            {formik.errors.password_confirm && (
              <span style={{ color: "red", textAlign: "left" }}>
                {formik.errors.password_confirm}
              </span>
            )}
          </Form.Item>
          <Form.Item label="image">
              <Input type="file" name="image"></Input>
          </Form.Item>

          <div>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
            
          </div>
          <div className="login-link">
            <a href="/login"> Already had Account ? Login here </a>
          </div>
        </Form>
      </Col>
    </Row>
  );
}
