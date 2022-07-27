'use strict';

const bcrypt = require("bcrypt");
const userSchema = require("./user.model");
const roleSchema = require("./role.model");
const locationSchema = require("./location.model");
const businessSchema = require("./business.model");
const languageSchema  = require("./language.model");
const userManageSchema = require("./usermanagement.model");
const constants = require("../constants/constants");
const mailsending = require("../middleware/email");

async function userSignUp(req, res) {
  let userDetails = new userSchema(req.body);
  let salt = await bcrypt.genSalt(8);
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  userDetails.password = bcrypt.hashSync(password, salt);
  userDetails.confirmPassword = bcrypt.hashSync(confirmPassword, salt);
  let result = await userDetails.save();
  mailsending.mailSending(req.body.email);
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.CREATED_SUCCESS,
    result: result,
  });
}

async function userLogin(req, res) {
  let email = req.body.email;
  let password = req.body.password;
  let userData;
  console.log(email)
  console.log(password)
  let isMatch;
  if (email) {
    userData = await userSchema.findOne({ email: email }).exec();
    if (userData) {
      isMatch = await bcrypt.compare(password, userData.password);
      await userSchema
        .findOneAndUpdate(
          { uuid: userData.uuid },
          { loginStatus: true },
          { new: true }
        )
        .exec();
      if (!userData) {
        return res.status(400).json({
          status: constants.USER_STATUS.SUCCESS_STATUS,
          message: constants.USER_STATUS.PLEASE_SIGNUP,
        });
      }
    } else {
      return res.status(400).json({
        status: constants.USER_STATUS.FAILURE_STATUS,
        message: constants.USER_STATUS.CORRECT_USERNAME,
      });
    }

    if (isMatch == true) {
      let userInfo = userData.toObject();
      return res.status(200).json({
        status: constants.USER_STATUS.SUCCESS_STATUS,
        message: constants.USER_STATUS.LOGIN_SUCCESS,
        result: userData,
      });
    } else {
      return res.status(201).json({
        status: constants.USER_STATUS.FAILURE_STATUS,
        message: constants.USER_STATUS.LOGIN_FAILED,
      });
    }
  }
}

async function resetForgotPassword(req,res){
  let email = req.body.email;
  const toMail = email;
  console.log("toMail..."+toMail);
  const compose={
      from:"Sekhar143Anitha.T@gmail.com",
      to:toMail,
      fileName:'resetpassword.ejs',
      details:{
          mail:toMail
      }
  }

  mailsending.mailSending(compose);

}
async function roles(req, res) {
  let rolesData = new roleSchema (req.body);
   console.log("req.body..",req.body.rolecode)
  let result = await rolesData.save();
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.ROLE_SUCESS,
    result: result,
  });
}

async function view(req, res) {
  let rolesData = new roleSchema();
  let fetachReasult = await roleSchema.find();
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.ROLE_SUCESS,
    result: fetachReasult,
  });
}

async function edit(req, res) {
  let rolesData = new roleSchema();
  console.log("req.params.uuid..",req.query.uuid)
  let fetchResult = await roleSchema.findOne({uuid:req.query.uuid}).exec();
  console.log("Result....",fetchResult)
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.ROLE_SUCESS,
    result: fetchResult,
  });

}

async function updateRoles(req,res){
  let updateRole = await roleSchema.findOneAndUpdate({uuid:req.body.uuid},req.body,{new:true}).exec();
console.log("UpdatedData...",updateRole);
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.ROLE_SUCESS,
    result: updateRole,
  });
}

async function createLocation(req, res) {
  let LocationData = new locationSchema (req.body);
   console.log("req.body..",req.body.locationName)
  let result = await LocationData.save();
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.LOCATION_SUCCESS,
    result: result,
  });
}

async function viewLocation(req, res) {
  let viewData = new locationSchema();
  let viewResult = await locationSchema.find();
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.LOCATION_SUCCESS,
    result: viewResult,
  });
}

async function editLocation(req, res) {
  let editData = new locationSchema();
  console.log("req.params.uuid..",req.query.uuid)
  let fetchResult = await locationSchema.findOne({uuid:req.query.uuid}).exec();
  console.log("Result....",fetchResult)
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.LOCATION_SUCCESS,
    result: fetchResult,
  });

}

async function updateLocations(req,res){
  let updateLocation = await locationSchema.findOneAndUpdate({uuid:req.body.uuid},req.body,{new:true}).exec();
console.log("updateLocation...",updateLocation);
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.LOCATION_SUCCESS,
    result: updateLocation,
  });
}


async function createBusiness(req, res) {
  let LobData = new businessSchema (req.body);
   console.log("req.body..",req.body.locationName)
  let result = await LobData.save();
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.LOB_SUCCESS,
    result: result,
  });
}

async function viewBusiness(req, res) {
  let viewData = new businessSchema();
 
  let viewResult = await businessSchema.find();
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.LOB_SUCCESS,
    result: viewResult,
  });
}

async function editBusiness(req, res) {
  let editData = new businessSchema();
  console.log("req.params.uuid..",req.query.uuid)
  let fetchResult = await businessSchema.findOne({uuid:req.query.uuid}).exec();
  console.log("Result....",fetchResult)
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.LOB_SUCCESS,
    result: fetchResult,
  });

}

async function updateBusiness(req,res){
  let updateBusiness = await businessSchema.findOneAndUpdate({uuid:req.body.uuid},req.body,{new:true}).exec();
console.log("updateLocation...",updateBusiness);
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.LOB_SUCCESS,
    result: updateBusiness,
  });
}

async function createLanguage(req, res) {
  let LanguageData = new languageSchema (req.body);
   console.log("req.body..",req.body.languageName)
  let result = await LanguageData.save();
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.LANGUAGE_SUCCESS,
    result: result,
  });
}

async function viewLanguage(req, res) {
  let viewData = new languageSchema();
  
  let viewResult = await languageSchema.find();
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.LANGUAGE_SUCCESS,
    result: viewResult,
  });
}

async function editLanguage(req, res) {
  let editData = new languageSchema();
  console.log("req.params.uuid..",req.query.uuid)
  let fetchResult = await languageSchema.findOne({uuid:req.query.uuid}).exec();
  console.log("Result....",fetchResult)
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.LANGUAGE_SUCCESS,
    result: fetchResult,
  });

}

async function updateLanguage(req,res){
  let updatelanguage = await languageSchema.findOneAndUpdate({uuid:req.body.uuid},req.body,{new:true}).exec();
console.log("updateLocation...",updatelanguage);
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.LANGUAGE_SUCCESS,
    result: updatelanguage,
  });
}

async function createUser(req, res) {
  let userData = new userManageSchema (req.body);
  let salt = await bcrypt.genSalt(8);
  const password = req.body.password;
  userData.password = bcrypt.hashSync(password, salt);
  let result = await userData.save();
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.USER_SUCCESS,
    result: result,
  });
}

async function viewUser(req, res) {
  let viewData = new userManageSchema();
  let viewResult = await userManageSchema.find();
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.USER_SUCCESS,
    result: viewResult,
  });
}

async function editUser(req, res) {
  let editData = new userManageSchema();
  console.log("req.params.uuid..",req.query.uuid)
  let fetchResult = await userManageSchema.findOne({uuid:req.query.uuid}).exec();
  console.log("Result....",fetchResult)
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.USER_SUCCESS,
    result: fetchResult,
  });

}

async function updateUser(req,res){
  let updateUser = await userManageSchema.findOneAndUpdate({uuid:req.body.uuid},req.body,{new:true}).exec();
console.log("updateLocation...",updateUser);
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.USER_SUCCESS,
    result: updateUser,
  });
}

//UserManagementLogin

async function userManagementLogin(req, res) {
  let email = req.body.email;
  let password = req.body.password;
  let userData;
  console.log(email)
  console.log(password)
  let isMatch;
  if (email) {
    userData = await userManageSchema.findOne({ email: email }).exec();
    if (userData) {
      isMatch = await bcrypt.compare(password, userData.password);
      await userManageSchema
        .findOneAndUpdate(
          { uuid: userData.uuid },
          { loginStatus: true },
          { new: true }
        )
        .exec();
      if (!userData) {
        return res.status(400).json({
          status: constants.USER_STATUS.SUCCESS_STATUS,
          message: constants.USER_STATUS.PLEASE_SIGNUP,
        });
      }
    } else {
      return res.status(400).json({
        status: constants.USER_STATUS.FAILURE_STATUS,
        message: constants.USER_STATUS.CORRECT_USERNAME,
      });
    }

    if (isMatch == true) {
      let userInfo = userData.toObject();
      return res.status(200).json({
        status: constants.USER_STATUS.SUCCESS_STATUS,
        message: constants.USER_STATUS.LOGIN_SUCCESS,
        result: userData,
      });
    } else {
      return res.status(201).json({
        status: constants.USER_STATUS.FAILURE_STATUS,
        message: constants.USER_STATUS.LOGIN_FAILED,
      });
    }
  }
}



//TeamLeadCount

async function TeamLeadCount(req, res) {
  let editData = new userManageSchema();
  let fetchResult = await userManageSchema.find({role:'TeamLead'}).exec();
  console.log("fetchResult....",fetchResult)
  var count = Object.values(fetchResult).length;

  console.log("Result....",count)
  return res.status(200).json({
    status: constants.USER_STATUS.SUCCESS_STATUS,
    message: constants.USER_STATUS.USER_SUCCESS,
    result: fetchResult,
  });

}


module.exports = { 
  TeamLeadCount,
  userManagementLogin,
  userSignUp:userSignUp,
  userLogin: userLogin,
  resetForgotPassword:resetForgotPassword,
  roles:roles,
  view:view,
  edit:edit,
  updateRoles:updateRoles,
  createLocation:createLocation,
  viewLocation:viewLocation,
  editLocation:editLocation,
  updateLocations:updateLocations,
  createBusiness:createBusiness,
  viewBusiness:viewBusiness,
  editBusiness:editBusiness,
  updateBusiness:updateBusiness,
  createLanguage:createLanguage,
  viewLanguage:viewLanguage,
  editLanguage:editLanguage,
  updateLanguage:updateLanguage,
  createUser:createUser,
  editUser:editUser,
  viewUser:viewUser,
  updateUser:updateUser
  };
