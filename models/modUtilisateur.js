const mongoose=require('mongoose');
const utilisateurSchema = new mongoose.Schema({
  code: String,
  nom: String,
  prenom: String, 
  departrement: String 
});
module.exports = mongoose.model('utilisateur', utilisateurSchema);

