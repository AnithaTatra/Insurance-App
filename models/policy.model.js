'use strict';

const mongoose = require('mongoose');
const crypto = require('crypto');
const policySchema = new mongoose.Schema({
    uuid:{type:String,required:false},
    task_id:{type:String,required:true},
    policy_no:{type:String,required:true},
    task_status:{type:String,required:true},
    renewal_status:{type:String,required:true},
    start_date:{type:String,required:true},
    end_date:{type:String,required:true},
    mobileNumber:{type:String,required:true},
    email:{type:String,required:true},
    alternate_email:{type:String,required:true},
    vaahan_no:{type:String,required:true},
    task_substatus:{type:String,required:true},
    lob:{type:String,required:true},
    location:{type:String,required:true},
    allocated_user:{type:String,required:true},
    previous_allocatedUser:{type:String,required:true},
});

policySchema.pre('save',function(next){
    this.uuid = 'POLICY-'+crypto.pseudoRandomBytes(6).toString('hex').toUpperCase()
     next();
});
module.exports = mongoose.model('Policy_Info',policySchema);


