'use strict';

const mongoose  =   require('mongoose');
const crypto    =   require('crypto');
const languageSchema  = new mongoose.Schema({
    uuid:{type:String,required:false},
    languageName:{type:String,required:false},
    languageStartDate:{type:String,required:false},
    languageEndDate:{type:String,required:false},
    languageStatus:{type:String,required:false}
    
});
languageSchema.pre('save',function(next){
    this.uuid = 'LAN-'+crypto.pseudoRandomBytes(6).toString('hex').toUpperCase()
     next();
});
module.exports = mongoose.model('Language',languageSchema);
