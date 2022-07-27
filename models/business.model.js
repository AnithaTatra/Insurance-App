'use strict';

const mongoose  =   require('mongoose');
const crypto    =   require('crypto');
const businessSchema  = new mongoose.Schema({
    uuid:{type:String,required:false},
    lobName:{type:String,required:false},
    lobStartDate:{type:String,required:false},
    lobEndDate:{type:String,required:false},
    lobStatus:{type:String,required:false}
    
});
businessSchema.pre('save',function(next){
    this.uuid = 'LOC-'+crypto.pseudoRandomBytes(6).toString('hex').toUpperCase()
     next();
});
module.exports = mongoose.model('Business',businessSchema);
