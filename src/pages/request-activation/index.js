import React from "react";
import { Button, Col, Form, Input, Row } from "antd"
import { useFormik } from "formik";
import * as yup from "yup";

const RequestActivationSchema  = yup.object().shape({
    email:yup.string()
    .email("Email not valid ")
    .required("Email is required"),
})

function RequestActivation() {

    const formik = useFormik({
        initialValues:{
            email:""
        },
        validationSchema:RequestActivationSchema,
        onSubmit:(values) => {
            console.log("values => ", values)
            alert("request activation submit")
        }
    });

    return (
        <Row>
            <Col span={24}>
                <h1> Request Activation </h1>
                <Form 
                    layout="vertical" 
                    onFinish={formik.handleSubmit}
                >
                    <Form.Item label="Email Activation">
                        <Input 
                            type="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        ></Input>
                    </Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >Submit</Button>
                </Form>
            </Col>
        </Row>
    )
}

export default RequestActivation;