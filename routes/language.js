'use strict';

const router = require("express").Router();
const serviceI= require("../models/user.service");
const languageModel = require("../models/language.model");
const constants = require("../constants/constants");


router.post("/addLanguage", async (req, res) => {
    try {
     
      serviceI.createLanguage(req, res);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({
        status: constants.USER_STATUS.FAILURE_STATUS,
        message: constants.USER_STATUS.NO_DATA,
      });
    }
  
  });

  router.get("/viewLanguage", async (req, res) => {
    try {
     
      serviceI.viewLanguage(req, res);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({
        status: constants.USER_STATUS.FAILURE_STATUS,
        message: constants.USER_STATUS.NO_DATA,
      });
    }
  
  });

  router.get("/editLanguage", async (req, res) => {
    try {
     
      serviceI.editLanguage(req, res);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({
        status: constants.USER_STATUS.FAILURE_STATUS,
        message: constants.USER_STATUS.NO_DATA,
      });
    }
  
  });
  router.put("/updateLanguage", async (req, res) => {
    try {
     
      serviceI.updateLanguage(req, res);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({
        status: constants.USER_STATUS.FAILURE_STATUS,
        message: constants.USER_STATUS.NO_DATA,
      });
    }
  
  });
  module.exports = router;