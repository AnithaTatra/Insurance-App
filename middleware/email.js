//const nodemailer = require('nodemailer')
const ejs = require('ejs')
const{join}= require('path');
const sgMail=require("@sendgrid/mail");




// sgMail.setApiKey("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");
//sgMail.setApiKey("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");
sgMail.setApiKey("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");
//sgMail.setApiKey("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");
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//   // port: 465,
//    //host:"smtp.gmail.com",
//     auth:{
//         user: "pinkyangelqueen123@gmail.com",
//         pass: "pinky@123"
//     },
//     //secure:false,
   
// });

async function mailSending(compose){
    console.log("ok")
    try{

         //const data= await ejs.renderFile(join(__dirname,'../templates/',compose.fileName),compose,compose.details)
        console.log(__dirname)
        const mailData= {
            from:"anibujji2796@gmail.com",
             to:"anibujji2796@gmail.com",
             subject:"Sekhar",
             text:"Sekhar M",
             html:"Ramu Garu"
            // to:compose.to,
            // from:compose.from,
            // subject:compose.subject,
            //  html:data
        }
        sgMail.send(mailData,(err)=>{
           
            if(err){ 
                console.log("err",err.message)
             }else{
                console.log("Mail sent successfully")
                return 1
             }
        })
    }catch(error){
        console.log(error.message)
        process.exit(1);
    }
}
module.exports = {mailSending}