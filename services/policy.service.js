'use strict';

const constants = require("../constants/constants");
const policySchema = require("../models/policy.model");


async function addPolicyData(req,res){
    let policyData = new policySchema(req.body);
   console.log("req.body..",req.body)
  let result = await policyData.save();
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.POLICY_SUCCESS,
    result: result,
  });

}

async function policyInfoDetails(req, res) {
  let policyNoData = new policySchema();
  let policyDataResult = await policySchema.find();
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.USER_SUCCESS,
    result: policyDataResult,
  });
}


async function policyInfogetSingleDetails(req, res) {
  let policyNoData = new policySchema();
  let policyDataResult = await policySchema.findOne({allocated_user:req.query.allocated_user});
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.USER_SUCCESS,
    result: policyDataResult,
  });
}

async function PolicyDataupdate(req,res){
  let updatePolicyData = await policySchema.findOneAndUpdate({task_id:req.body.task_id},req.body,{new:true}).exec();
console.log("updatePolicyData...",updatePolicyData);
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.ROLE_SUCESS,
    result: updatePolicyData,
  });
}

async function NotRespondingCount(req, res) {
  let fetchResult = await policySchema.find({task_status:'Not Responding'}).exec();
  console.log("fetchResult....",fetchResult)
  var count = Object.values(fetchResult).length;

  console.log("Result....",count)
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.USER_SUCCESS,
    result: fetchResult,
  });

}

async function CallBackCount(req, res) {
  let fetchResult = await policySchema.find({task_status:'Call Back'}).exec();
  console.log("fetchResult....",fetchResult)
  var count = Object.values(fetchResult).length;

  console.log("Result....",count)
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.USER_SUCCESS,
    result: fetchResult,
  });

}


async function NotIntrestedCount(req, res) {
  let fetchResult = await policySchema.find({task_status:'Not Intrested'}).exec();
  console.log("fetchResult....",fetchResult)
  var count = Object.values(fetchResult).length;
  console.log("Result....",count)
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.USER_SUCCESS,
    result: fetchResult,
  });

}


async function getRenewedCount(req, res) {
  let fetchResult = await policySchema.find({task_status:'Renewed'}).exec();
  console.log("fetchResult....",fetchResult)
  var count = Object.values(fetchResult).length;
  console.log("Result....",count)
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.USER_SUCCESS,
    result: fetchResult,
  });

}
module.exports={
    NotRespondingCount,
    CallBackCount,
    getRenewedCount,
    NotIntrestedCount,
    addPolicyData:addPolicyData,
    policyInfoDetails,
    policyInfogetSingleDetails,
    PolicyDataupdate
}