const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions.js");

// INDEX
transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

transactions.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(transactionsArray[id]);
});

// CREATE
transactions.post("/", (req, res) => {
  transactionsArray.push(req.body);
  res.json(transactionsArray[transactionsArray.length - 1]);
});

// UPDATE
transactions.put("/:id", (req, res) => {
  const { id } = req.params;
  transactionsArray[id] = req.body;
  res.send(transactionsArray[id]);
});

// DELETE
transactions.delete("/:id", (req, res) => {
  const { id } = req.params;
  const deletedItem = transactionsArray.splice(id, 1);
  res.send(deletedItem);
});

module.exports = transactions;
