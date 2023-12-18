const express = require("express");
const app = express();
const axios = require("axios").default;

const baseURL = "https://api.twitter.com/2";
const token =
  "AAAAAAAAAAAAAAAAAAAAAPly9QAAAAAAQP4Qf6PfN0NeU4L5keo%2B7kae%2Fs0%3DEQIp2W7jkVldFBLvOOFtSJXl2vWEe3f1J1STKMTyWEbsogNYfE";
const getTweetsUrl =
  "https://api.twitter.com/2/tweets/search/recent?user.fields=profile_image_url&tweet.fields=text,public_metrics&expansions=author_id&query=";
const showcaseURL =
  "https://api.twitter.com/2/users?user.fields=profile_image_url,most_recent_tweet_id&ids=44196397,30436279,2455740283,1636590253,22938914";
const tweetsByUser = (userID) => {
  return `https://api.twitter.com/2/users/${userID}/tweets?tweet.fields=public_metrics`;
};

const twitterAPI = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${token}` },
});

const PORT = process.env.PORT || 3002;

app.use(express.json());

//search for user
app.get("/api/users/:username", async (req, res) => {
  const responseObjectArray = [];
  const userRequest = await twitterAPI.get(
    `/users/by/username/${req.params.username}?user.fields=profile_image_url`
  );
  const tweetRequest = await twitterAPI.get(
    tweetsByUser(userRequest.data.data.id)
  );
  tweetRequest.data.data.forEach((item, index) => {
    let responseObject = {
      message: item.text,
      like_count: item.public_metrics.like_count,
      retweet_count: item.public_metrics.retweet_count,
      username: userRequest.data.data.username,
      profile_image_url: userRequest.data.data.profile_image_url,
    };
    responseObjectArray.push(responseObject);
  });
  res.send(responseObjectArray).status(200);
});

// search for tweet
app.get("/api/tweet/:query", async (req, res) => {
  const tweetRequest = await twitterAPI.get(getTweetsUrl + req.params.query);

  const userIDs = tweetRequest.data.includes.users.map((item) => item.id);
  const tweetAuthorIDs = tweetRequest.data.data.map((item) => item.author_id);

  const responseObjectArray = [];
  tweetRequest.data.data.forEach((tweetData, index) => {
    const userIndex = userIDs.indexOf(tweetAuthorIDs[index]);
    const responseObject = {
      retweet_count: tweetData.public_metrics.retweet_count,
      like_Count: tweetData.public_metrics.like_count,
      username: tweetRequest.data.includes.users[userIndex].username,
      profile_image_url:
        tweetRequest.data.includes.users[userIndex].profile_image_url,
      tweet_text: tweetData.text,
    };
    responseObjectArray.push(responseObject);
  });

  res.send(responseObjectArray);
});

// showcase
app.get("/api/showcase", async (req, res) => {
  const responseObjectArray = [];
  const showcaseRequest = await twitterAPI.get(showcaseURL);
  const userIDs = showcaseRequest.data.data.map((item) => item.id);
  const usersTweetsRequest = await userIDs.map((id) =>
    twitterAPI.get(
      `https://api.twitter.com/2/users/${id}/tweets?tweet.fields=public_metrics`
    )
  );
  const tweetsRequest = res.send(usersTweetsRequest.data);
  console.log(usersTweetsRequest.data);
  res.send(usersTweetsRequest.data);
  showcaseRequest.data.data.forEach((item) => {
    const responseObject = {};
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
