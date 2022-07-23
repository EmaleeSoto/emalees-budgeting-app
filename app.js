const express = require("express");
const app = express();
const cors = require("cors");

const purchasesController = require("./controllers/purchases.controller.js");

app.use(express.json()); // returns middleware that only parses JSON

// this allows any app/site from anywhere access your API. This is a great way to start to get things up and running. Later, add restrictions, as needed.
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/purchases", purchasesController);

//Test

module.exports = app;
