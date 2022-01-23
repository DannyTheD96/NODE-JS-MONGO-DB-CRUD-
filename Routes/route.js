
const { application } = require('express');
const express = require ('express');

const app = express ();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const  router  = express.Router();
const Utilisateur = require('../models/modUtilisateur.js');
const Departement = require('../models/modDepartement.js');


router.post('/newDepartement',(req,res)=>{
    console.log('req.body',req.body);
    const Departement3 = new Departement(req.body);
    Departement3.save((err,Departement3)=>{
        if(err){
            return res.status(500).json(err);
        }
        res.status(201).json(Departement3);
    });
});

router.get('/Departements',(req, res)=>{
    Departement.find()
    .exec()
    .then(envoi => res.status(200).json(envoi));
});



router.post('/newUtilisateur',(req,res)=>{
    console.log('req.body',req.body);
    const utilisateur3 = new Utilisateur(req.body);
    utilisateur3.save((err,utilisateur3)=>{
        if(err){
            return res.status(500).json(err);
        }
        res.status(201).json(utilisateur3);
    });
});

router.delete('/delutilisateur/:id',(req,res)=>{
    const id = req.params.id;
    Utilisateur.findByIdAndDelete(id, (err, utilisateur)=>{
        if (err) {
            return res.status(500).json(err);
        }
        res.status(202).json({msg:'utilisateur  supprimée' });
    });
});
router.post('/upUtilisateur/:id',(req, res)=>{
    const util=req.params.id
    Utilisateur.findById(util)
    .then(Utilisateur =>{
        Utilisateur.code=req.body.code;
        Utilisateur.nom=req.body.nom;
        Utilisateur.prenom=req.body.prenom;
        Utilisateur.departement=req.body.departement;
        Utilisateur.save()
        .then(()=>res.json('Edition Reussie !'))
        .catch(err => res.status(400).json('Error :' +err));

    })
    .catch(err => res.status(400).json('Error'+err));
});

router.get('/utilisateurs',(req, res)=>{
    Utilisateur.find()
    .exec()
    .then(envoi => res.status(200).json(envoi));
});

router.get('/lireunutilisateur/:id',(req, res)=>{
    const util=req.params.id
    Utilisateur.findById(util)
    .exec()
    .then(envoi => res.status(200).json(envoi));
});

module.exports = router;