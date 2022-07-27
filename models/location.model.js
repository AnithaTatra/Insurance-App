'use strict';

const mongoose  =   require('mongoose');
const crypto    =   require('crypto');
const locationSchema  = new mongoose.Schema({
    uuid:{type:String,required:false},
    locationName:{type:String,required:false},
    locationPrevious:{type:String,required:false},
    locationPresent:{type:String,required:false},
    locationStatus:{type:String,required:false},
});
locationSchema.pre('save',function(next){
    this.uuid = 'LOC-'+crypto.pseudoRandomBytes(6).toString('hex').toUpperCase()
     next();
});
module.exports = mongoose.model('Location',locationSchema);
