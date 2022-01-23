const express = require ('express');
const app = express ();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const  router  = express.Router();
const mongoose = require ('mongoose');
const modUtilisateur = require('./models/modUtilisateur');
const connection = mongoose.connection;


//app.set('views','./views');
app.set('view engine','ejs')
const route = require('./Routes/route')
const deproute = require('./Routes/deproute')
//app.use('/public', express.static('public'));
//app.get('/',(req,res)=>{
//    res.render('index');
//});
app.use('/util',route);
app.use('/dep',deproute);
app.get('/',(req, res) =>{
    res.render('index')
} )



//mongoose.connect('mongodb://NdoyeDM:12345@10.30.40.121:27017/NdoyeDM',{
//useUnifiedTopology: true, useNewUrlParser: true } );

mongoose.connect('mongodb://localhost:27017/bdlabo6',{
useUnifiedTopology: true, useNewUrlParser: true } );

connection.once('open',()=>{
    console.log('Connected to MongoDB');
} );


app.listen(3441,()=>{
    console.log("j'ecoute le port 3441");
});

module.exports = router;
