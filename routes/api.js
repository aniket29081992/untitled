/**
 * Created by aniketverma on 20/08/16.
 */
var mongo = require('mongodb');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var api = {
 getFormStatus:function (req,res) {
     var Server = mongo.Server,
         Db = mongo.Db,
         BSON = mongo.BSONPure;

     var server = new Server('localhost', 27017, {auto_reconnect: true});
     db = new Db('digo', server);
     db.open(function(err, db) {
         if(!err) {
             console.log("Connected to 'winedb' database");
             db.collection('chick', {strict:true}, function(err, collection) {
                 if (err) {
                     console.log("The 'wines' collection doesn't exist. Creating it with sample data...");

                 }
                 else
                 {
                     var collection = db.collection("chick");
                     console.log("connected to digo")
                     collection.findOne({name:"draw"}, function(err, doc) {
                         // no cursor object is needed
                         if(doc.hasOwnProperty('name'))
                             console.log("yes")
                         if(!doc.hasOwnProperty('sex'))
                             console.log("No")
                         var c={"name":"draw"}
                         res.send({
                             'name': doc.name,
                             'msg': 'Success.'
                         })
                         console.log(doc.name)
                     });
                 }

             });
         }
     })
 }}

module.exports = api;
