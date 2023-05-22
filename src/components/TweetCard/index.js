import { Card, Col } from "antd";
import "./index.css";

import { baseUrl } from "../../helper";

export default function TweetCard(props) {
  return (
    <Col span={24} className="tweet-card">
      <Card
        title={props.tweet.user?.name}
        extra={
          props.isDetail ? (
            <a href={`/tweets/${props.tweet.id}`}> Detail </a>
          ) : (
            props.isEdit && (
              <a
                href="#"
                onClick={() => {
                  props.setEdit(true);
                }}
              >
                {" "}
                Edit{" "}
              </a>
            )
          )
        }
        bordered={false}
        cover={
          (
            <img alt="example" src={baseUrl('/PIMG-1684731754974.jpeg')} width={"100%"} />
          )
        }
      >
        {props.tweet.tweet}
      </Card>
    </Col>
  );
}
