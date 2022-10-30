// first part
// let http = require("http");

// let ourApp = http.createServer(function (req, res) {
//   if (req.url == "/") {
//     return res.end("home page");
//   }
//   if (req.url == "/about") {
//     return res.end("about page");
//   }
//   return res.end("page not found");
// });

// ourApp.listen(8080);

// second part

let express = require("express");

let ourApp = express();

ourApp.use(express.urlencoded({ extended: false }));

ourApp.get("/", function (req, res) {
  res.send(`
  <form action="/answer" method="POST">
  <p>Whats color is the sky in a clear and sunny day?</p>
  <input type="text" name="SkyColor" autocomplete="off" />
  <button>Submit Answer</button>
  </form>`);
});

ourApp.post("/answer", function (req, res) {
  console.log(req.body);
  if (req.body.SkyColor.toUpperCase() == "BLUE") {
    res.send(`
<p>Congratulations! your answer is correct.</p>
<a href="/">back to homepage</a>
`);
  } else {
    res.send(`
    <p>Sorry! that is incorrect.</p>
    <a href="/">back to homepage</a>
    `);
  }
});
ourApp.get("/answer", function (req, res) {
  res.send("Are you lost? There is nothing to see");
});

ourApp.listen(8080);
