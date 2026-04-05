const debugModel = require("../models/debugModel");
const { getAIResponse } = require("../services/aiServices");
const asyncHandler = require("../utils/asyncHandler");

exports.debugAPI = asyncHandler(async (req, res) => {
  const { endpoint, method, requestBody, error } = req.body;

  //Validate the data
  if (!endpoint || !method) {
    return res.status(400).json({
      success: false,
      message: "Endpoint and method are required",
    });
  }

  //convert requestBody to JSON if its a string
  let parsedBody = requestBody;

  if (typeof requestBody === "string") {
    try {
      parsedBody = JSON.parse(requestBody);
    } catch (e) {
      parsedBody = {};
    }
  }
  //stimulate AI response
  const aiResponse = await getAIResponse({
    endpoint,
    method,
    requestBody: parsedBody,
    error,
  });

  //save the debug in db
  const debug = await debugModel.create({
    endpoint,
    method,
    requestBody,
    aiResponse,
    error,
  });

  //return the reponse
  res.status(200).json({
    success: true,
    message: "Debug analysis generated successfully",
    data: {
      endpoint,
      method,
      error,
      aiResponse,
    },
  });
});

exports.getSingleDebug = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const debug = await debugModel.findById(id);

  if (!debug) {
    return res.status(404).json({
      success: false,
      message: "Debug log not found",
    });
  }

  res.status(200).json({
    success: true,
    data: debug,
  });
  
});
