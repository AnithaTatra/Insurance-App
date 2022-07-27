'use strict';

const router = require("express").Router();
const serviceI= require("../models/user.service");
const userManageModel = require("../models/usermanagement.model");
const constants = require("../constants/constants");


router.post("/createUser", async (req, res) => {
    try {
     
      serviceI.createUser(req, res);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({
        status: constants.USER_STATUS.FAILURE_STATUS,
        message: constants.USER_STATUS.NO_DATA,
      });
    }
  
  });

  router.get("/fetchUser", async (req, res) => {
    try {
     
      serviceI.viewUser(req, res);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({
        status: constants.USER_STATUS.FAILURE_STATUS,
        message: constants.USER_STATUS.NO_DATA,
      });
    }
  
  });

  router.get("/editUserData", async (req, res) => {
    try {
     
      serviceI.editUser(req, res);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({
        status: constants.USER_STATUS.FAILURE_STATUS,
        message: constants.USER_STATUS.NO_DATA,
      });
    }
  
  });
  router.put("/updateUserData", async (req, res) => {
    try {
     
      serviceI.updateUser(req, res);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({
        status: constants.USER_STATUS.FAILURE_STATUS,
        message: constants.USER_STATUS.NO_DATA,
      });
    }
  
  });


  router.post("/userManagementLogin", async (req, res) => {
    try {
      console.log("userManagementLogin")
      serviceI.userManagementLogin(req, res);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({
        status: constants.USER_STATUS.FAILURE_STATUS,
        message: constants.USER_STATUS.NO_DATA,
      });
    }
  
  });
  router.get("/getTeamLeadCount", async (req, res) => {
    try {
     
      serviceI.TeamLeadCount(req, res);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({
        status: constants.USER_STATUS.FAILURE_STATUS,
        message: constants.USER_STATUS.NO_DATA,
      });
    }
  
  });
  module.exports = router;