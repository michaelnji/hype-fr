// const dotenv = require("dotenv").config();
// Initialize Contentful client

const contentful = require("contentful");
export default function fetchUser(req, res) {
  var client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_API_KEY,
  });

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
        data: error,
      });
      console.log("Error occurred : ", error);
    });
}
