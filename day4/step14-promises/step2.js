let firstPromise = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve("The First Promise Has Been Resolved");
      } else {
        reject("The First Promise Has Been Rejected");
      }
    }, 3000);
  });
};

let secondPromise = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve("The Second Promise Has Been Resolved");
      } else {
        reject("The Second Promise Has Been Rejected");
      }
    }, 2000);
  });
};

let thirdPromise = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (false) {
        resolve("The Third Promise Has Been Resolved");
      } else {
        reject("The Third Promise Has Been Rejected");
      }
    }, 1000);
  });
};

/**
 * all the promises must resolve => Promise.all()
 * all the promises must resolve 1 response => Promise.any()
 * all the promises must resolve or reject => Promise.race() // whichever happen first will be shown
 * all the promises to settle => Promise.allSettled()
 */

// all the promises must resolve => Promise.all()
// will resolve all promises and returns all in the data array we can access it
// If any of the promise is failed then it will only show with the error

/*
    Promise.all([firstPromise(), secondPromise(), thirdPromise()])
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log(error);
    })
    .finally(function(){
        console.log("the promises are complete");
    })
*/

// * all the promises must resolve 1 response => Promise.any()
// will resolve all promises and returns all in the data array we can access it
// If any of the promise is failed then it will only show with the error
// If all the promises are failed then it will show the error of the last promise
// If all the promises are resolved then it will show the first promise resolved data

/*
    Promise.any([firstPromise(), secondPromise(), thirdPromise()])
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log(error);
    })
    .finally(function(){
        console.log("the promises are complete");
    })
*/

// * all the promises must resolve or reject => Promise.race()
// whichever happen first will be shown
// If any of the promise is failed then it will only show with the error
// If any of the promise is resolved then it will only show with the data
// If all the promises are resolved then it will show with the data
// If all the promises are failed then it will show with the error
// Whichever the fastet will be executed first. In our case thirdpromise will tale only 1 second
// hence that promise will be either resolved or rejected

/*
    Promise.race([firstPromise(), secondPromise(), thirdPromise()])
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log(error);
    })
    .finally(function(){
        console.log("the promises are complete");
    })
*/

// * all the promises to settle => Promise.allSettled()
// It will show all the promises with the result
// If the promise is rejected it will show rejected with the error message
// If the promise is resolved it will show resolved with the data

/*
    Promise.allSettled([firstPromise(), secondPromise(), thirdPromise()])
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log(error);
    })
    .finally(function(){
        console.log("the promises are complete");
    })
*/

// firstPromise function will return a promise and that can be resolved in below then and catch functions
// firstPromise()
// .then(function(data){
//     console.log(" Resolved Message 1", data);
//     return data.toUpperCase();
// }).then(function(data){
//     console.log(" Resolved Message 2", data);
//     return data.toLowerCase();
// }).then(function(data){
//     console.log(" Resolved Message 3", data);
// }).catch(function(error){
//     console.log("Error Message", error);
// }).finally(function(){
//     console.log("Promise is settled");
// })
