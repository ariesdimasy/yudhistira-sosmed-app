import { useEffect, useState } from "react";
import { getAllTweet } from "../../api/tweet";

import TweetForm from "../../components/TweetForm";
import TweetList from "../../components/TweetList";

export default function Tweet() {

  const [tweets, setTweets] = useState([])

  useEffect(() => {
    getAllTweet()
    .then(res => {
      if(res.data.success) { 
        setTweets(res.data.data)
      } else { 
        alert(JSON.stringify(res.data.message))
      }
    })
    .catch(err => {
      alert(JSON.stringify(err))
    })
  },[])

  return (
    <div>
      <h1> Post Tweet </h1>
      <TweetForm></TweetForm>
      <TweetList tweetList={tweets}></TweetList>
    </div>
  );
}
