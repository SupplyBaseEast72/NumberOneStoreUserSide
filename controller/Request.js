const requestRouter = require("express").Router();
const Request = require("../models/RequestModel");

// get a list of all the requests
requestRouter.get("/", async (req, res) => {
  const requests = await Request.find({});
  res.status(200).send(requests);
});

// add a new request
requestRouter.post("/", async (req, res) => {
  const newRequest = new Request(req.body);
  const savedRequest = await newRequest.save();

  res.status(201).send(savedRequest);
});

module.exports = requestRouter;
