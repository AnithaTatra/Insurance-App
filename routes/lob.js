'use strict';

const router = require("express").Router();
const serviceI= require("../models/user.service");
const businessModel = require("../models/business.model");
const constants = require("../constants/constants");


router.post("/addLob", async (req, res) => {
    try {
     
      serviceI.createBusiness(req, res);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({
        status: constants.USER_STATUS.FAILURE_STATUS,
        message: constants.USER_STATUS.NO_DATA,
      });
    }
  
  });

  router.get("/viewLob", async (req, res) => {
    try {
     
      serviceI.viewBusiness(req, res);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({
        status: constants.USER_STATUS.FAILURE_STATUS,
        message: constants.USER_STATUS.NO_DATA,
      });
    }
  
  });

  router.get("/editLob", async (req, res) => {
    try {
     
      serviceI.editBusiness(req, res);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({
        status: constants.USER_STATUS.FAILURE_STATUS,
        message: constants.USER_STATUS.NO_DATA,
      });
    }
  
  });
  router.put("/updateLob", async (req, res) => {
    try {
     
      serviceI.updateBusiness(req, res);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({
        status: constants.USER_STATUS.FAILURE_STATUS,
        message: constants.USER_STATUS.NO_DATA,
      });
    }
  
  });
  module.exports = router;