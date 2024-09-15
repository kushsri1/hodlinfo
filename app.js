const express = require("express");
const app = express();
const hodlinfoRoutes = require("./router/hodlinfoRoute.js");
const path = require("path");
const ejsMate = require("ejs-mate");

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);

app.use("/", hodlinfoRoutes);

app.listen(8080, ()=> {
    console.log("app is listening to port 8080");
})