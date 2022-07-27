
"use strict";
const router = require("express").Router();
const serviceI = require("../models/user.service");
const rolemodel = require("../models/role.model");
const constants = require("../constants/constants");

router.post("/role", async (req, res) => {
    try {
     
      serviceI.roles(req, res);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({
        status: constants.USER_STATUS.FAILURE_STATUS,
        message: constants.USER_STATUS.NO_DATA,
      });
    }
  
  });

  router.get("/roleview", async (req, res) => {
    try {
     
      serviceI.view(req, res);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({
        status: constants.USER_STATUS.FAILURE_STATUS,
        message: constants.USER_STATUS.NO_DATA,
      });
    }
  
  });

  router.get("/editrole", async (req, res) => {
    try {
     
      serviceI.edit(req, res);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({
        status: constants.USER_STATUS.FAILURE_STATUS,
        message: constants.USER_STATUS.NO_DATA,
      });
    }
  
  });
  router.put("/updaterole", async (req, res) => {
    try {
     
      serviceI.updateRoles(req, res);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({
        status: constants.USER_STATUS.FAILURE_STATUS,
        message: constants.USER_STATUS.NO_DATA,
      });
    }
  
  });




  module.exports = router;
