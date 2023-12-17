const express = require("express");
const app = express();
const axios = require("axios").default;

const baseURL = "https://api.twitter.com/2";
const token =
  "AAAAAAAAAAAAAAAAAAAAAPly9QAAAAAAQP4Qf6PfN0NeU4L5keo%2B7kae%2Fs0%3DEQIp2W7jkVldFBLvOOFtSJXl2vWEe3f1J1STKMTyWEbsogNYfE";
const getTweetsUrl =
  "https://api.twitter.com/2/tweets/search/recent?user.fields=profile_image_url&tweet.fields=text,public_metrics&expansions=author_id&query=";
const showcaseURL =
  "https://api.twitter.com/2/users?expansions=pinned_tweet_id&user.fields=profile_image_url,most_recent_tweet_id&ids=44196397,30436279,2455740283,1636590253,22938914";
const tweetsByUser = (userID) => {
  return `https://api.twitter.com/2/users/${userID}/tweets`;
};

const twitterAPI = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${token}` },
});

const PORT = process.env.PORT || 3001;

app.use(express.json());

//search for user
app.get("/api/users/:username", (req, res) => {
  twitterAPI
    .get(
      `/users/by/username/${req.params.username}?user.fields=profile_image_url`
    )
    .then(({ data }) => {
      res.send(data.data);
      twitterAPI.get(tweetsByUser(data.data.id)).then((result) => {
        console.log(result.data.data);
      });
    });
});

// search for tweet
app.get("/api/tweet/:query", (req, res) => {
  const responseObjectArray = [];
  twitterAPI.get(getTweetsUrl + req.params.query).then(({ data }) => {
    let responseObject = {};
    userIDs = data.includes.users.map((item) => item.id);
    tweetAuthorIDs = data.data.map((item) => item.author_id);

    data.data.forEach((tweetData, index) => {
      const userIndex = userIDs.indexOf(tweetAuthorIDs[index]);
      responseObject = {
        retweet_count: JSON.stringify(tweetData.public_metrics.retweet_count),
        like_Count: JSON.stringify(tweetData.public_metrics.like_count),
        username: JSON.stringify(data.includes.users[userIndex].username),
        profile_image_url: JSON.stringify(
          data.includes.users[userIndex].profile_image_url
        ),
        tweet_text: JSON.stringify(tweetData.text),
      };

      responseObjectArray.push(responseObject);
    });

    res.send(responseObjectArray);
  });
});

// showcase
app.get("/api/showcase", (req, res) => {
  const responseObjectArray = [];
  twitterAPI.get(showcaseURL).then(({ data }) => {
    console.log(data);
    const userIDs = data.data
      .map((item) => item.most_recent_tweet_id)
      .join(",");
    console.log(data.data.map((item) => item.most_recent_tweet_id).join(","));
    res.send(data);

    data.data.forEach((item) => {
      const responseObject = {};
      responseObject.username = item.username;
      responseObject.profile_image_url = item.profile_image_url;
      // twitterAPI
      //   .get("https://api.twitter.com/2/tweets/" + item.most_recent_tweet_id)
      //   .then((response) => {
      //     console.log(response.data);
      //   });
      twitterAPI
        .get("https://api.twitter.com/2/tweets?ids=" + userIDs)
        .then((response) =>
          console.log(
            "<<<<<<<<<<<< ALL USER IDS TWEETS RESPONSE",
            response.data
          )
        );
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
