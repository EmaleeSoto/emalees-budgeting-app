const express = require("express");
const purchases = express.Router();
const purchasesArray = require("../models/purchase.js");

// INDEX
purchases.get("/", (req, res) => {
  res.json(purchasesArray);
});

purchases.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(purchasesArray[id]);
});

// CREATE
purchases.post("/", (req, res) => {
  purchasesArray.push(req.body);
  res.json(purchasesArray[purchasesArray.length - 1]);
});

module.exports = purchases;
