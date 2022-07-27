'use strict';

const mongoose  =   require('mongoose');
const crypto    =   require('crypto');
const roleschema  = new mongoose.Schema({
    uuid:{type:String,required:false},
    rolecode:{type:String,required:false},
    rolename:{type:String,required:false},
    rolestatus:{type:String,required:false},
});
roleschema.pre('save',function(next){
    this.uuid = 'ROLE-'+crypto.pseudoRandomBytes(6).toString('hex').toUpperCase()
     next();
});
module.exports = mongoose.model('Role',roleschema);
