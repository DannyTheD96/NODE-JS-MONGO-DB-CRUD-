const mongoose=require('mongoose');
const departementSchema = new mongoose.Schema({
    code: String,
    superviseur: String, 
    departrement: String 
  });
  module.exports = mongoose.model('departement', departementSchema);