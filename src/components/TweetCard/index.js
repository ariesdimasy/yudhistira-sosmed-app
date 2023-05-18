import { Card, Col } from "antd";
import "./index.css";

export default function TweetCard(props) {
  return (
    <Col span={24} className="tweet-card">
      <Card
        title="Card title"
        extra={<a href="#"> Edit </a>}
        bordered={false}
        cover={
          <img
            alt="example"
            src="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg"
            width={"100%"}
          />
        }
      >
        {props.tweet}
      </Card>
    </Col>
  );
}
