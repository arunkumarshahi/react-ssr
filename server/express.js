const express = require("express");
const fs = require("fs");
const path = require("path");
const React = require("react");
const ReactDOMServer = require("react-dom/server");

// create express application
const app = express();
import AppComp from "../src/components/app";
// serve static assets
app.get(
  /\.(js|css|map|ico)$/,
  express.static(path.resolve(__dirname, "../dist"))
);

// for any other requests, send `index.html` as a response
app.use("*", (req, res) => {
  // read `index.html` file
  let indexHTML = fs.readFileSync(
    path.resolve(__dirname, "../dist/index.html"),
    {
      encoding: "utf8",
    }
  );

  let appHTML = ReactDOMServer.renderToString(<AppComp />);
  indexHTML = indexHTML.replace(
    '<div id="app"></div>',
    `<div id="app">${appHTML}</div>`
  );
  // set header and status
  res.contentType("text/html");
  res.status(200);

  return res.send(indexHTML);
});

// run express server on port 9000
app.listen(process.env.PORT, () => {
  console.log("Express server started at http://localhost:" + process.env.PORT);
});
