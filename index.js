const express = require("express");
const fakedata = require("./data/fakedata");
const app = express();
const port = 3000;

//html을 렌더하기 위해 사용
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

//index.html 렌더
app.get("/", (req, res) => {
  res.render("index.html");
});

//fakedata JSON형태 보여주기
app.get("/productList", (req, res) => {
  res.send(fakedata);
});

app.listen(port, () => {
  console.log("Listening on port 3000");
});

// app.post();
// app.put();
// app.delete();
