const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;

//connexion à la db
connectDB();

const app = express();

//Middlewares
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "content-type");
  next();
});

//Employees routes
app.use("/employees", require("./routes/employees.routes"));

//Lancement du serveur
app.listen(port, () => {
  console.log("Le serveur a démarré sur le port : " + port);
});
