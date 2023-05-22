import { Button, Card, Form, Input } from "antd";
import { useFormik } from "formik";
import * as yup from "yup";
import { postTweet } from "../../api/tweet";

const TweetSchema = yup.object().shape({
  tweet: yup
    .string()
    .min(5, "too short")
    .max(150, "characters length too long")
    .required("required"),
  image_url: yup.string().url("Image must be url"),
});

export default function TweetForm(props) {
  const formik = useFormik({
    initialValues: {
      tweet: props?.tweet?.tweet || "",
      image_url: props?.tweet?.imageUrl || "",
    },
    validationSchema: TweetSchema,
    onSubmit: (values) => {
      console.log(values);
      postTweet({
        tweet:values.tweet,
        imageUrl:values.image_url
      })
      .then(res => {
        if(res.data.success) { 
          alert(res.data.message)
          
        }
      })
      .catch(err => {
        alert(JSON.stringify(err))
      })
    },
  });

  return (
    <Card>
      <Form layout="vertical" onFinish={formik.handleSubmit}>
        <Form.Item label="tweet" htmlFor="tweet">
          <Input.TextArea
            id="tweet"
            name="tweet"
            onChange={formik.handleChange}
            value={formik.values.tweet}
            showCount
            maxLength={150}
            rows={7}
          ></Input.TextArea>
          {formik.errors.tweet && (
            <span style={{ color: "red", textAlign: "left" }}>
              {formik.errors.tweet}
            </span>
          )}
        </Form.Item>

        <Form.Item label="imageUrl" htmlFor="image_url">
          <Input
            id="image_url"
            name="image_url"
            onChange={formik.handleChange}
            value={formik.values.image_url}
          ></Input>
          {formik.errors.image_url && (
            <span style={{ color: "red", textAlign: "left" }}>
              {formik.errors.image_url}
            </span>
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {props.isEdit ? "Update Tweet" : "Post Tweet"}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
