"use strict";

const router = require("express").Router();
const serviceI = require("../services/policyallocation.service");

const constants = require("../constants/constants");

router.post("/addPolicyAllocationDetails", async (req, res) => {
  try {
    serviceI.addPolicyAllocationData(req, res);
    console.log("addPolicyAllocationData");
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({
      status: constants.USER_STATUS.FAILURE_STATUS,
      message: constants.USER_STATUS.NO_DATA,
    });
  }
});

router.get("/policyAllocationView",async (req, res) => {
  try {
    serviceI.policyAllocationView(req, res);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({
      status: constants.USER_STATUS.FAILURE_STATUS,
      message: constants.USER_STATUS.NO_DATA,
    });
  }

});
module.exports = router;
