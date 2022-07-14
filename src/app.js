const request = require("request");
const express = require("express");
const path = require("path");
// const publicDirectory = path.join(__dirname, "../public");
const app = express();
// app.use(express.static(publicDirectory));

const options = {
  url: "https://newsapi.org/v2/top-headlines?country=eg&apiKey=ee5d69afdf5e4e6d87d727fdbe05b9c5",
  headers: {
    "User-Agent": "my pc",
  },
  json: true,
};
const port = process.env.PORT || 5000;
app.set("view engine", "hbs");

request(options, (error, response) => {
  if (error) {
    console.log("error find");
  } else if (response.body.message) {
    console.log(response.body.message);
  } else {
    app.get("/", (req, res) => {
      res.render("index", {
        data: response.body.articles,
      });
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
