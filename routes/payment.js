const router = require('express').Router();
require("dotenv").config();

const braintree = require('braintree');
const config = {
    environment: braintree.Environment.Sandbox,
    merchantId: process.env.MERCHANT_ID,
    publicKey: process.env.PUBLIC_KEY,
    privateKey: process.env.PRIVATE_KEY
};
const gateway = new braintree.BraintreeGateway(config);

router.get("/braintree", function (req, res) {
    res.send("Braintree route is healthy");
  });

  router.get("/getToken", async function (req, res) {
    try {
      gateway.clientToken.generate({}, function (err, response) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send(response);
        }
      });
    } catch (err) {
      res.status(500).send(err);
    }
  });

  router.post("/sandbox", async function (req, res) {
    try {
      // Use the payment method nonce here
      var nonceFromTheClient = req.body.paymentMethodNonce;
      // Create a new transaction for $10
      var newTransaction = gateway.transaction.sale(
        {
          amount: "1000.00",
          paymentMethodNonce: nonceFromTheClient,
          options: {
            // This option requests the funds from the transaction once it has been
            // authorized successfully
            submitForSettlement: true,
          },
        },
        function (error, result) {
          if (result) {
            res.send(result);
          } else {
            res.status(500).send(error);
          }
        }
      );
    } catch (err) {
      // Deal with an error
      console.log(err);
      res.send(err);
    }
  });


module.exports = router;