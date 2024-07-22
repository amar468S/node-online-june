const express = require("express");
let app = express();
let fs = require("node:fs");
app.use(express.urlencoded({ extended: true }));

let rawdata = {};

app.get("/", function (request, response) {
  fs.readFile("heroes.json", "utf-8", function (err, data) {
    if (err) {
      console.log(err);
    } else {
      response.render("home.ejs", {
        company: "Intellipaat",
        herodata: JSON.parse(data),
      });
    }
  });
});

app.post("/", function (req, res) {
  // Access the request body data
  const formData = req.body.newhero;
  let dataArray = [];
  fs.readFile("heroes.json", "utf-8", function (error, data) {
    if (error) {
      console.log("Error ", error);
    } else {
      // Parse the existing data from the file
      dataArray = JSON.parse(data);
    }
    // Add the new form data to the array
    dataArray.avengers.push(formData);
    // Create a JSON string from the form data
    const jsonData = JSON.stringify(dataArray, null, 2);

    fs.writeFile("heroes.json", jsonData, "utf-8", function (error) {
      if (error) {
        console.log("Error ", error);
        res.status(500).send("Error saving data to file");
      } else {
        res.redirect("/");
      }
    });
  });
});

let callbackfun = (error) => {
  error
    ? console.log("Error", error)
    : console.log("Server is running on localhost port 5054");
};
app.listen("5054", "localhost", callbackfun);
