/*
 Authors:
Adam Siyala (A01237596)
*/
const express = require("express");

let app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const Message = {success: "Movie was found." , failure:"Movie could not be found"}
app.get("/", (req, res) => res.render("pages/index"));

app.get("/myForm", (req, res) => res.render("pages/myForm"));

app.post("myForm", (req, res) => {
  const data = req.body
  let dataInfo = data.split(",")
  console.log(dataInfo)
  res.render("pages/myForm", {movieList})
});

app.get("/myListQueryString", (req, res) => {
  let movie = []
  for (i = 0; i < movie.length; i++) {
    let movieList = req.query.movieList
    res.send(`<span> ${movie} </span>`)
  }
});

app.get("/search/:movieName", (req, res) => {
  if (dataInfo.includes(user.input)) {
    res.render(`pages/`, {result = Message.success})
  } else {
    res.render(`pages/` , {result = Message.failure})
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000 😈");
});