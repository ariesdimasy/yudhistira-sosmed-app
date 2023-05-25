import { Pagination } from "antd";
import TweetCard from "../TweetCard";

import "./index.css";

export default function TweetList(props) {
  // const tweetList = [
  //   {
  //     id: 1,
  //     tweet: "Lorem Ipsum sit dolor amet ",
  //     imageUrl:
  //       "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg",
  //     User: {
  //       email: "user1@gmail.com",
  //       username: "user1",
  //       name: "User1 Name",
  //     },
  //   },
  //   {
  //     id: 2,
  //     tweet: "Anum Uman modor usum sit dolor",
  //     imageUrl: "",
  //     User: {
  //       email: "user2@gmail.com",
  //       username: "user2",
  //       name: "User2 Name",
  //     },
  //   },
  //   {
  //     id: 3,
  //     tweet: "Its crazy in outside",
  //     imageUrl:
  //       "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg",
  //     User: {
  //       email: "user3@gmail.com",
  //       username: "user3",
  //       name: "User3 Name",
  //     },
  //   },
  // ];

  return (
    <div className="tweet-list">
      {props.tweetList.map((item, index) => {
        return <TweetCard tweet={item} isDetail key={index}></TweetCard>;
      })}
      <Pagination defaultCurrent={1} total={50} />
    </div>
  );
}
