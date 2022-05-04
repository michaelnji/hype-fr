// const dotenv = require("dotenv").config();
// Initialize Contentful client
const contentful = require("contentful");

export default function fetchUser(req, res) {
  var client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_API_KEY,
  });
  let post;
  client
    .getEntry(req.params.id)
    .then((entry) => {
      post = entry;
      res.send({
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
}
