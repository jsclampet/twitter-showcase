const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body.name || "get request");
  res.send("RESPONSE");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
