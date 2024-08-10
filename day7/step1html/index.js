const express = require("express");
let app = express();
const mongoose = require("mongoose");
const config = require("./config.json");

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

//===============================================
// model to map the values in DB
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

let Heroe = mongoose.model(
  "Heroe",
  new Schema({
    id: ObjectId,
    title: String,
    firstname: String,
    lastname: String,
    city: String,
  })
);

//Connect to DB
let url = `mongodb+srv://${config.username}:${config.password}@cluster0.${config.dbsecret}.mongodb.net/${config.dbname}?retryWrites=true&w=majority&appName=Cluster0`;
mongoose
  .connect(url)
  .then(function (dbres) {
    console.log("DB Connected");
  })
  .catch(function (err) {
    console.log("Error", err);
  });

setTimeout(() => {
  //READ
  /*
    Heroe.find()
    .then(function(dbres){
      console.log(dbres);
    }).catch(function(error){
      console.log("Error", error);
    });
  */

    //CREATE
  /* 
  let hero = new Heroe({
    title: "Captain America",
    firstname: "Steve",
    lastname: "Rogers",
    city: "America",
  });

  hero
    .save()
    .then(function (dbres) {
      console.log(dbres);
    })
    .catch(function (err) {
      console.log(err);
    });

  */

  // DELETE
  /* 
    Heroe.findByIdAndDelete("66a5455c3c65ad21fa12ec5f")
    .then(function (dbres) {
      console.log(dbres);
    })
    .catch(function (err) {
      console.log(err);
    });
    */

  //UPDATE
  /*
    Heroe.findByIdAndUpdate("66a53d7506159edb88788e5d", {
      title : "Iron Suit"
    }).then(function (dbres) {
      console.log(dbres);
    })
    .catch(function (err) {
      console.log(err);
    });
  */


}, 2000);

//====================================================

// CRUD
//CREATE Request
app.post("/data", function (request, response) {
  let hero = new Heroe({
    title: request.body.title,
    firstname: request.body.firstname,
    lastname: request.body.lastname,
    city: request.body.city
  });

  hero
    .save()
    .then(function (dbres) {
      response.status(200).send({"message":dbres.title+" was added to DB"});
    })
    .catch(function (err) {
      response.status(500).send({"message":"Something went wrong. Hero was not added"});
      console.log(err);
    });
});
// READ record
app.get("/data", function (request, response) {
  Heroe.find()
    .then(function(dbres){
      response.status(200).send(dbres);
    }).catch(function(error){
      response.status(500).send({"message":"Something went wrong"});
      console.log("Error", error);
    })
});

// SELECT record to update
app.get("/edit/:hid", function (request, response) {
  Heroe.findById(request.params.hid)
    .then(function(dbres){
      response.status(200).send(dbres);
    }).catch(function(error){
      response.status(500).send({"message":"Something went wrong"});
      console.log("Error", error);
    })
});

// UPDATE multiple fields
app.put("/edit/:hid", function (request, response) {
  Heroe.findByIdAndUpdate(request.params.hid, {
    title: request.body.title,
    firstname: request.body.firstname,
    lastname: request.body.lastname,
    city: request.body.city
  }).then(function (dbres) {
      response.status(200).send({"message":dbres.title+" was deleted from DB"});
    })
    .catch(function (err) {
      response.status(500).send({"message":"Something went wrong"});
    });
});

//DELETE
app.delete("/delete/:hid", function (request, response) {
  Heroe.findByIdAndDelete(request.params.hid)
    .then(function (dbres) {
      response.status(200).send({"message":dbres.title+" was deleted from DB"});
    })
    .catch(function (err) {
      response.status(500).send({"message":"Something went wrong"});
    });
});

// UPDATE single field
app.patch("/edit", function (request, response) {

});


// Create Server
app.listen(config.port, config.host, (error) => {
  error
    ? console.log("Error", error)
    : console.log("Server is running on localhost port 5054");
});
