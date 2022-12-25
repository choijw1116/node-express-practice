const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;

const dbconnect = { //mysql접속설정
  host: "127.0.0.1",
  user: "root",
  password: "a",
  port: "3306",
  database: "practice",
};

const connection = mysql.createConnection(dbconnect); //DB커넥션 생성
connection.connect(); // db접속

//html을 렌더하기 위해 사용
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

//index.html 렌더
app.get("/", (req, res) => {
  res.render("index.html");
});

//API요청
app.get("/productlist", (req, res) => {
  connection.query("SELECT * from list", (error, rows) => {
    if (error) throw error;
    console.log("User info is: ", rows);
    res.send(rows);
  });
});

app.listen(port, () => {
  console.log("Listening on port 3000");
});

// app.post();
// app.put();
// app.delete();
