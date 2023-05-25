import React from "react";
import { useSearchParams } from "react-router-dom"; 
import { Button, Col, Form, Input, Row } from "antd"
import { useFormik } from "formik";
import * as yup from "yup";
import { forgotPassword } from "../../api/auth";


const ForgotPasswordSchema = yup.object().shape({
    email:yup.string()
            .email("Email is not valid format")
            .required("email is required"),
    password:yup.string()
        .min(8,"Password too short")
        .required("Password is required"),
    passwordConfirm:yup.string()
        .min(8,"Confirm Password is too short")
        .required("Password Confirm is required")
})

export default function ForgotPassword(props) {

    const [params] = useSearchParams()

    const formik = useFormik({
        initialValues:{
            email:params.get("email"),
            password:"",
            passwordConfirm:""
        },
        validationSchema:ForgotPasswordSchema,
        onSubmit:(values) => {
            forgotPassword({
                email:values.email,
                password:values.password,
                passwordConfirm:values.passwordConfirm
            })
            .then(res => {
                if(res.data.success) { 
                    alert("password successfully updated")
                } else { 
                    alert("password update failed")
                }
            })
        }
    })

    return (<Row>
        <Col span={24}>
            <h1> Forgot Password </h1>
            <Form layout="vertical" onFinish={formik.handleSubmit}>
                <Form.Item label="New Password">
                    <Input 
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
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
                        name="passwordConfirm"
                        value={formik.values.passwordConfirm}
                        onChange={formik.handleChange}
                    >
                    </Input>
                    {formik.errors.passwordConfirm && (
                        <span style={{ color: "red", textAlign: "left" }}>
                            {formik.errors.passwordConfirm}
                        </span>
                    )}
                </Form.Item> 
                <Form.Item label="email" hidden>
                    <Input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    >
                    </Input>
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