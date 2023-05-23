import axios from "axios";

const userLogin = localStorage.getItem("userLogin") ? JSON.parse(localStorage?.getItem("userLogin")) : {}

//const userLogin = JSON.parse(localStorage?.getItem("userLogin")) 

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

  //console.log("token ==> ", userLogin.name)
  return axios.post(
    process.env.REACT_APP_API_URL + "/tweet",
    {
      tweet: data.tweet,
      imageUrl: data.imageUrl,
      image:data.image,
      userId: userLogin.id,
    },
    {
      headers: {
        authorization:`Bearer ${userLogin?.token}`,
        "Content-Type":"multipart/form-data"
      },
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
