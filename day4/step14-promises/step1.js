// console.log(Promise.resolve("The promise has been resolved"));

// let promise = new Promise();
// console.log(promise);

let promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        if(true){
            resolve("The promise has been resolved");
        }else{
            reject("The promise has been rejected");
        }
    }, 2000);
});


// promise.then(); // promise is resolved

// promise.catch(); // promise has error

// promise.finally(); // promise is settled

// dpending on the promise it will call either then or catch
// finally is somethinh that gets called at all times
promise
.then(function(data){
    console.log(" Resolved Message 1", data);
    return data.toUpperCase();
}).then(function(data){
    console.log(" Resolved Message 2", data);
    return data.toLowerCase();
}).then(function(data){
    console.log(" Resolved Message 3", data);
}).catch(function(error){
    console.log("Error Message", error);
}).finally(function(){
    console.log("Promise is settled");
})