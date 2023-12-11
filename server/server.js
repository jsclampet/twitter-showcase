const express = require("express");
const app = express();
const axios = require("axios").default;

const baseURL = "https://api.twitter.com/2";
const token =
  "AAAAAAAAAAAAAAAAAAAAAPly9QAAAAAAQP4Qf6PfN0NeU4L5keo%2B7kae%2Fs0%3DEQIp2W7jkVldFBLvOOFtSJXl2vWEe3f1J1STKMTyWEbsogNYfE";

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
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
