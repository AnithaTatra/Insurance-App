'use strict';

const mongoose  =   require('mongoose');
const crypto    =   require('crypto');
const policyalloaction  = new mongoose.Schema({
    uuid:{type:String,required:false},
    taskid:{type:String,required:true},
    location:{type:String,required:true},
    lob:{type:String,required:true},
    allocateduser:{type:String,required:true}
    
});
policyalloaction.pre('save',function(next){
    this.uuid = 'PAN-'+crypto.pseudoRandomBytes(6).toString('hex').toUpperCase()
     next();
});
module.exports = mongoose.model('Policyallocation',policyalloaction);
