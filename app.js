'use strict';

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const userRoute = require("./routes/user");
const roleRoute = require("./routes/role");
const locationRoute = require("./routes/location");
const businessRoute = require("./routes/lob");
const languageRoute = require("./routes/language");
const userManageRoute = require("./routes/userManage");
const policyRoute = require("./routes/policy");
const policyAllocationRoute = require("./routes/policyallocation");
const payment = require("./routes/payment");
const bodyParser = require("body-parser");


require("dotenv").config();

app.use(cors());
const port = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({ extended: true }));

//connection to database
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit[1];
  });

app.use(express.json());
app.set("view engine", "ejs");

// api url's
app.use("/api/v1/user", userRoute);
app.use("/api/v2/role", roleRoute);
app.use("/api/v3/location", locationRoute);
app.use("/api/v4/lob", businessRoute);
app.use("/api/v5/language", languageRoute);
app.use("/api/v6/userManage", userManageRoute);
app.use("/api/v7/policy", policyRoute);
app.use("/api/v8/policyAllocation", policyAllocationRoute);
app.use("/api/v9/payment",payment);

// const config = {
//   environment: braintree.Environment.Sandbox,
//   merchantId: process.env.MERCHANT_ID,
//   publicKey: process.env.PUBLIC_KEY,
//   privateKey: process.env.PRIVATE_KEY
// };

// const gateway = new braintree.BraintreeGateway(config);
// //token generate
// app.get("/tokenGeneration", async(req,res)=>{
//   try {
//       gateway.clientToken.generate({}, (err, resData)=>{
//           if(err){
//               return res.send({err: err})
//           }else{
//               // console.log(resData);
//               return res.status(200).json({"status": "success", messsage: resData.clientToken})
//           }
//       })
//   } catch (error) {
//       return res.status(500).json({"status": "failed", messsage: error.messsage})
//   }
// });

// // sale transaction
// app.post("/saleTransaction", async(req,res)=>{
//   try {
//       console.log("sale transaction apis ")
//       console.log(req.body)
//       console.log("^".repeat(200))
//       const paymentData = gateway.transaction.sale({
//           amount: req.body.amount,
//           paymentMethodNounce: req.body.paymentMethodNounce,
//           options: {
//               submitForSettlement: true
//           }
//       }, (err, resData)=>{
//           if(err){
//               console.log(err.messsage)
//               console.log("$".repeat(200))
//           }
//           console.log("_".repeat(200))
//           console.log(resData)
//           console.log("_".repeat(200))
//           if(resData.success){
//               return res.status(200). json({"status": "success", messsage: resData.transaction})
//           }else{
//               return res.send({err: err});
//           }
//       })
      
//   } catch (error) {
//       return res.status(500).json({"status": "failed", messsage: error.messsage});  
//   }
// })

// //partial settlement
// app.post("/refundWithCharge", async(req, res)=>{
//   try {
//       const paymentData = gateway.transaction.submitForPartialSettlement(
//           "Transaction_id", 
//           "cancellation_fee",
//           (err, resData)=>{
//               if(resData.success){
//                   return res.status(200). json({"status": "success", messsage: resData.transaction})
//               }else{
//                   return res.send({err: err});
//               }
//           }
//       );
//   } catch (error) {
//       return res.status(500).json({"status": "failed", messsage: error.messsage});
//   }
// });

// // full settlement
// app.post("/refundWithoutCharge", async(req, res)=>{
//   try {
//       const paymentData = gateway.transaction.submitForSettlement("transaction_id", (err, resData)=>{
//           if(resData.success){
//               return res.status(200). json({"status": "success", messsage: resData.transaction})
//           }else{
//               return res.send({err: err});
//           }
//       })
      
//   } catch (error) {
//       return res.status(500).json({"status": "failed", messsage: error.messsage});
//   }
// })
//listening to port
app.listen(port, () => {
  console.log(`Server Started at ${port} Port`);
});
