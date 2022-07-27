'use strict';

const constants = require("../constants/constants");
const policyallocationSchema = require("../models/policyallocation.model");

async function addPolicyAllocationData(req, res) {
  let policyallocationData = new policyallocationSchema(req.body);
  console.log("req.body..", req.body)
  let result = await policyallocationData.save();
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.POLICY_ALLOCATION_SUCCESS,
    result: result,
  });
}




async function policyAllocationView(req, res) {
  let policyallocationSchemaData = new policyallocationSchema();
  let policyallocationSchemaResult = await policyallocationSchema.find();
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.POLICY_ALLOCATION_DATA_SUCCESS,
    result: policyallocationSchemaResult,
  });
}
module.exports = {
  addPolicyAllocationData,
  policyAllocationView
}