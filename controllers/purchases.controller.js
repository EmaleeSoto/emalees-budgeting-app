const express = require("express");
const purchases = express.Router();
const purchasesArray = require("../models/purchase.js");

purchases.get("/", (req, res) => {
  res.json(purchasesArray);
});

purchases.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(purchasesArray[id]);
});

module.exports = purchases;
