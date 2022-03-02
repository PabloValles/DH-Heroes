const express = require("express");
const path = require("path");

const app = express();

/**
 * Solución para los archivos staticos (css,img)
 */
app.use(express.static("public"));

app.get("/", (req, res) => {
  let htmlPath = path.resolve(__dirname, "./views/index.html");
  res.sendFile(htmlPath);
});
app.get("/babbage", (req, res) => {
  let htmlPath = path.resolve(__dirname, "./views/babbage.html");
  res.sendFile(htmlPath);
});
app.get("/berners-lee", (req, res) => {
  let htmlPath = path.resolve(__dirname, "./views/berners-lee.html");
  res.sendFile(htmlPath);
});
app.get("/clarke", (req, res) => {
  let htmlPath = path.resolve(__dirname, "./views/clarke.html");
  res.sendFile(htmlPath);
});
app.get("/hamilton", (req, res) => {
  let htmlPath = path.resolve(__dirname, "./views/hamilton.html");
  res.sendFile(htmlPath);
});
app.get("/hopper", (req, res) => {
  let htmlPath = path.resolve(__dirname, "./views/hopper.html");
  res.sendFile(htmlPath);
});
app.get("/lovelace", (req, res) => {
  let htmlPath = path.resolve(__dirname, "./views/lovelace.html");
  res.sendFile(htmlPath);
});
app.get("/turing", (req, res) => {
  let htmlPath = path.resolve(__dirname, "./views/turing.html");
  res.sendFile(htmlPath);
});

// Levantamos el server
app.listen(3030, (req, res) => {
  console.log("server is runing");
});
