import axios from "axios";

export function getAllTweet() {
  return axios.get(process.env.REACT_APP_API_URL + "/tweet", {
    headers: {},
  });
}

export function getDetailTweet(tweetId) {
  return axios.get(process.env.REACT_APP_API_URL + "/tweet/" + tweetId, {
    headers: {},
  });
}

export function postTweet(data) {
  return axios.post(
    process.env.REACT_APP_API_URL + "/tweet",
    {
      tweet: data.tweet,
      imageUrl: data.imageUrl,
      userId: 1,
    },
    {
      headers: {},
    }
  );
}

export function updateTweet(data) {
  return axios.put(
    process.env.REACT_APP_API_URL + "/tweet",
    {
      tweet: data.tweet,
      imageUrl: data.imageUrl,
      userId: 1,
    },
    {
      headers: {},
    }
  );
}
