import React from "react";
import { Button, Col, Form, Input, Row, } from "antd"
import { useFormik } from "formik";
import * as yup from "yup";

const ActivationSchema = yup.object().shape({
    activationCode:yup.string()
        .length(6,"activation Code must length of 6")
        .required("activation Code is required"),
    email:yup.string()
        .email("email not valid format")
        .required("Email is required")
}) 

export default function Activation() {

    const formik = useFormik({
        initialValues:{
            email:"",
            activationCode:""
        },
        validationSchema:ActivationSchema,
        onSubmit:(values) => {
            alert("activationCode submit")
            console.log("values => ", values)
        }
    })

    return (<Row>
        <Col span={24}>
            <h1> Activation Code </h1>
            <Form onFinish={formik.handleSubmit} layout="vertical">
                <Form.Item label="Activation Code">
                    <Input 
                        type="text" 
                        name="activationCode" 
                        id="activationCode"
                        onChange={formik.handleChange}
                        value={formik.values.activationCode}
                    ></Input>
                    {formik.errors.activationCode && (
                        <span style={{ color: "red", textAlign: "left" }}>
                        {formik.errors.activationCode}
                        </span>
                    )}
                </Form.Item>
                <Form.Item label="email" hidden={true}>
                    <Input 
                        type="email" 
                        name="email" 
                        id="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    ></Input>
                </Form.Item>
                {formik.errors.email && (
                    <div style={{ color: "red", textAlign: "left" }}>
                    {formik.errors.email}
                    </div>
                )}
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </Col>
    </Row>)
}