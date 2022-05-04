// const dotenv = require("dotenv").config();
// Initialize Contentful client
const contentful = require("contentful");

export default function fetchUser(req, res) {
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
      res.send({
        success: false,
        data: undefined,
      });
      console.log("Error occurred : ", error);
    });
}
