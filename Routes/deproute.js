
const { application } = require('express');
const express = require ('express');

const app = express ();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const  router  = express.Router();
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
module.exports = router;