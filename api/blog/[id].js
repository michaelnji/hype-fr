// const dotenv = require("dotenv").config();
// Initialize Contentful client
const contentful = require("contentful");

export default function fetchBlogPost(req, res) {
  const { id } = req.query;
  var client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_API_KEY,
  });
  let post;
  client
    .getEntry(id)
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
        data: error,
      });
    });
}
