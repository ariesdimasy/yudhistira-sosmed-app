import { Pagination } from "antd";
import TweetCard from "../TweetCard";

import "./index.css";

export default function TweetList() {
  const tweetList = [
    {
      id: 1,
      tweet: "Lorem Ipsum sit dolor amet ",
      imageUrl: "",
    },
    {
      id: 2,
      tweet: "Anum Uman modor usum sit dolor",
      imageUrl: "",
    },
    {
      id: 3,
      tweet: "Its crazy in outside",
      imageUrl: "",
    },
  ];

  return (
    <div className="tweet-list">
      {tweetList.map((item) => {
        return <TweetCard tweet={item.tweet}></TweetCard>;
      })}
      <Pagination defaultCurrent={1} total={50} />
    </div>
  );
}
