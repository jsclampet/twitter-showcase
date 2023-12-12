const express = require("express");
const app = express();
const axios = require("axios").default;

const baseURL = "https://api.twitter.com/2";
const token =
  "AAAAAAAAAAAAAAAAAAAAAPly9QAAAAAAQP4Qf6PfN0NeU4L5keo%2B7kae%2Fs0%3DEQIp2W7jkVldFBLvOOFtSJXl2vWEe3f1J1STKMTyWEbsogNYfE";
const getTweetsUrl =
  "https://api.twitter.com/2/tweets/search/recent?user.fields=profile_image_url&tweet.fields=text,public_metrics&expansions=author_id&query=";

const apiClient = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${token}` },
});

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get("/api/users/:username", (req, res) => {
  console.log(req.params.username || "get request");
  apiClient
    .get(`/users/by/username/${req.params.username}`)
    .then(({ data }) => {
      console.log(data.data);
      res.send(data.data);
    });
});

app.get("/api/tweet/:query", (req, res) => {
  const responseObject = {};
  const responseObjectArray = [];
  apiClient.get(getTweetsUrl + req.params.query).then(({ data }) => {
    data.data.forEach((dataItem, index) => {
      responseObject.retweet_count = JSON.stringify(
        dataItem.public_metrics.retweet_count
      );
      responseObject.like_Count = JSON.stringify(
        dataItem.public_metrics.like_count
      );
      responseObject.username = JSON.stringify(
        data.includes.users[index].username
      );
      responseObject.profile_image_url = JSON.stringify(
        data.includes.users[index].profile_image_url
      );
      responseObject.like_Count = JSON.stringify(
        dataItem.public_metrics.like_count
      );
      responseObject.tweet_text = JSON.stringify(dataItem.text);
      responseObjectArray.push(responseObject);
    });
    console.log(responseObjectArray);
    res.send(responseObjectArray);
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
