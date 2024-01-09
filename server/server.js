const path = require("path");
const express = require("express");
const app = express();
const axios = require("axios").default;

const token =
  "AAAAAAAAAAAAAAAAAAAAAPly9QAAAAAAQP4Qf6PfN0NeU4L5keo%2B7kae%2Fs0%3DEQIp2W7jkVldFBLvOOFtSJXl2vWEe3f1J1STKMTyWEbsogNYfE";
const getTweetsUrl =
  "https://api.twitter.com/2/tweets/search/recent?user.fields=profile_image_url&tweet.fields=text,public_metrics&expansions=author_id&query=";
const tweetsByUser = (userID) => {
  return `https://api.twitter.com/2/users/${userID}/tweets?tweet.fields=public_metrics&exclude=replies`;
};

const apiClient = axios.create({
  baseURL: "https://api.twitter.com/2",
  headers: { Authorization: `Bearer ${token}` },
});

const PORT = process.env.PORT || 3002;

app.use(express.static("../front-end/dist"));
app.use(express.json());

//search for user
app.get("/api/users/:username", async (req, res) => {
  const responseObjectArray = [];
  const userRequest = await apiClient.get(
    `/users/by/username/${req.params.username}?user.fields=profile_image_url`
  );
  const tweetRequest = await apiClient.get(
    tweetsByUser(userRequest.data.data.id)
  );
  tweetRequest.data.data.forEach((item, index) => {
    let responseObject = {
      username: userRequest.data.data.username,
      profile_image_url: userRequest.data.data.profile_image_url,
      tweet_text: item.text,
      retweet_count: item.public_metrics.retweet_count,
      like_count: item.public_metrics.like_count,
    };
    responseObjectArray.push(responseObject);
  });

  res.send(responseObjectArray);
});

// search for tweet
app.get("/api/tweets/:query", async (req, res) => {
  const tweetRequest = await apiClient.get(getTweetsUrl + req.params.query);

  const userIDs = tweetRequest.data.includes.users.map((item) => item.id);
  const tweetAuthorIDs = tweetRequest.data.data.map((item) => item.author_id);

  const responseObjectArray = [];
  tweetRequest.data.data.forEach((tweetData, index) => {
    const userIndex = userIDs.indexOf(tweetAuthorIDs[index]);
    const responseObject = {
      username: tweetRequest.data.includes.users[userIndex].username,
      profile_image_url:
        tweetRequest.data.includes.users[userIndex].profile_image_url,
      tweet_text: tweetData.text,
      retweet_count: tweetData.public_metrics.retweet_count,
      like_count: tweetData.public_metrics.like_count,
    };
    responseObjectArray.push(responseObject);
  });

  res.send(responseObjectArray);
});

// showcase
app.get("/api/showcase", async (req, res) => {
  const userIDs = [
    "44196397",
    "22938914",
    "226428094",
    "4416456732",
    "29873662",
  ];

  const randomIndex = (num) => Math.floor(Math.random() * num);
  const selectedUser = userIDs[randomIndex(5)];

  const usersTweetsRequest = await apiClient.get(
    `https://api.twitter.com/2/users?ids=${selectedUser}&user.fields=profile_image_url`
  );

  const tweetDataRequest = await apiClient.get(tweetsByUser(selectedUser));
  const tweet =
    tweetDataRequest.data.data[randomIndex(tweetDataRequest.data.data.length)];

  const userObject = {
    username: usersTweetsRequest.data.data[0].username,
    profile_image_url: usersTweetsRequest.data.data[0].profile_image_url,
    tweet_text: tweet.text,
    retweet_count: tweet.public_metrics.retweet_count,
    like_count: tweet.public_metrics.like_count,
  };

  res.send(userObject);
});

//CATCHALL serve up frontend
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "front-end", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
