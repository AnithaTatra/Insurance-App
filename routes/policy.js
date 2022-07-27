"use strict";

const router = require("express").Router();
const serviceI = require("../services/policy.service");
const policyModel =require("../models/policy.model");

const constants = require("../constants/constants");

router.post("/addPolicyDetails", async (req, res) => {
  try {
    serviceI.addPolicyData(req, res);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({
      status: constants.USER_STATUS.FAILURE_STATUS,
      message: constants.USER_STATUS.NO_DATA,
    });
  }
});



router.get("/getPolicyInfoDetails", async (req, res) => {
  try {
   
    serviceI.policyInfoDetails(req, res);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({
      status: constants.USER_STATUS.FAILURE_STATUS,
      message: constants.USER_STATUS.NO_DATA,
    });
  }

});


router.get("/getSinglePolicyInfoDetails", async (req, res) => {
  try {
   
    serviceI.policyInfogetSingleDetails(req, res);
  } catch (error) {
    console.log(error.message);
    return res.status(400).jon({
      status: constants.USER_STATUS.FAILURE_STATUS,
      message: constants.USER_STATUS.NO_DATA,
    });
  }

});

router.put("/updatPolicyData", async (req, res) => {
  try {
   
    serviceI.PolicyDataupdate(req, res);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({
      status: constants.USER_STATUS.FAILURE_STATUS,
      message: constants.USER_STATUS.NO_DATA,
    });
  }

});
router.get("/getNotRsponding", async (req, res) => {
  try {
   
    serviceI.NotRespondingCount(req, res);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({
      status: constants.USER_STATUS.FAILURE_STATUS,
      message: constants.USER_STATUS.NO_DATA,
    });
  }

});

router.get("/getCallBackCount", async (req, res) => {
  try {
   
    serviceI.CallBackCount(req, res);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({
      status: constants.USER_STATUS.FAILURE_STATUS,
      message: constants.USER_STATUS.NO_DATA,
    });
  }

});

router.get("/getNotIntrestedCount", async (req, res) => {
  try {
   
    serviceI.NotIntrestedCount(req, res);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({
      status: constants.USER_STATUS.FAILURE_STATUS,
      message: constants.USER_STATUS.NO_DATA,
    });
  }

});


router.get("/RenewedCount", async (req, res) => {
  try {
    serviceI.getRenewedCount(req, res);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({
      status: constants.USER_STATUS.FAILURE_STATUS,
      message: constants.USER_STATUS.NO_DATA,
    });
  }

});
module.exports = router;
