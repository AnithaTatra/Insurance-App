'use strict';

const router = require("express").Router();
const serviceI= require("../models/user.service");
const locationModel = require("../models/location.model");
const constants = require("../constants/constants");


router.post("/addLocation", async (req, res) => {
    try {
     
      serviceI.createLocation(req, res);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({
        status: constants.USER_STATUS.FAILURE_STATUS,
        message: constants.USER_STATUS.NO_DATA,
      });
    }
  
  });

  router.get("/viewLocation", async (req, res) => {
    try {
     
      serviceI.viewLocation(req, res);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({
        status: constants.USER_STATUS.FAILURE_STATUS,
        message: constants.USER_STATUS.NO_DATA,
      });
    }
  
  });

  router.get("/editLocation", async (req, res) => {
    try {
     
      serviceI.editLocation(req, res);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({
        status: constants.USER_STATUS.FAILURE_STATUS,
        message: constants.USER_STATUS.NO_DATA,
      });
    }
  
  });
  router.put("/updateLocation", async (req, res) => {
    try {
     
      serviceI.updateLocations(req, res);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({
        status: constants.USER_STATUS.FAILURE_STATUS,
        message: constants.USER_STATUS.NO_DATA,
      });
    }
  
  });
  module.exports = router;