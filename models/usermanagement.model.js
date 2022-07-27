'use strict';

const mongoose  =   require('mongoose');
const crypto    =   require('crypto');


const userManageSchema  = new mongoose.Schema({
    uuid:{type:String,required:false},
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    address:{type:String,required:true},
    role:{type:String,required:true},
    location:{type:String,required:true},
    lob:{type:String,required:true},
    language:{type:String,required:true},
    userStatus:{type:String,required:false},
    
    },{
    timestamps:true
});


userManageSchema.pre('save',function(next){
    this.uuid = 'USEeR-'+crypto.pseudoRandomBytes(6).toString('hex').toUpperCase()
     next();
});

module.exports = mongoose.model('UserManagement',userManageSchema);

