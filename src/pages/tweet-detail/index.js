import { useState } from "react";
import TweetCard from "../../components/TweetCard";
import TweetForm from "../../components/TweetForm";

export default function TweetDetail(props) {
  const tweetDetail = {
    id: 3,
    tweet: "Its crazy in outside",
    imageUrl:
      "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg",
    User: {
      email: "user3@gmail.com",
      username: "user3",
      name: "User3 Name",
    },
  };

  const [edit, setEdit] = useState(false);

  return (
    <div>
      {edit ? (
        <TweetForm tweet={tweetDetail} isEdit></TweetForm>
      ) : (
        <TweetCard tweet={tweetDetail} isEdit setEdit={setEdit}></TweetCard>
      )}
      <div style={{ marginTop: 20 }}>
        <a href="/tweets"> Back to Tweets </a>
      </div>
    </div>
  );
}
