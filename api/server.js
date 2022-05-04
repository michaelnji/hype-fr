const { tossr } = require("tossr");
const express = require("express");
const app = express();
const TEMPLATE = "public/index.html";
const PORT = 5000;
const OPTIONS = { inlineDynamicImports: true };

const contentful = require("contentful");
const dotenv = require("dotenv").config();

// Initialize Contentful client
var client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_API_KEY,
});

// contentful blog posts

// sends all blog posts to the client
app.get("/welcome/blog", (req, res) => {
  var blogPosts;
  client
    .getEntries()
    .then(function (entries) {
      res.send({
        success: true,
        data: entries,
      });
    })
    .catch(function (error) {
      response.send({
        success: false,
        data: undefined,
      });
      console.log("Error occurred : ", error);
    });
});

// gets a particular blog post

app.get("/welcome/blog/:id", (request, response) => {
  let post;
  client
    .getEntry(request.params.id)
    .then((entry) => {
      post = entry;
      response.send({
        success: true,
        data: post,
      });
    })
    .catch((error) => {
      console.log(error);
      response.send({
        success: false,
        data: {},
      });
    });
});

// // serve assets, if they exist
// app.use(express.static("public"));

// // otherwise serve Routify
// app.get("*", async (req, res) => {
//   res.sendFile(TEMPLATE, { root: __dirname });
// });

// // start server
// app.listen(PORT);
// // console.log("serving on port", PORT);

// Export the Express API
module.exports = app;
