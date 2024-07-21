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
// async and await keywords are just to denote that promise is returning a promise back
// and we will await for a promise to be resolved or rejected
// async is to denote that the function will be returning a promise

let nestedFun = async function () {
  return await firstPromise();
};

let mainFun = async function () {
  return await nestedFun();
};

mainFun().then(function (data) {
  console.log(data);
});

// the return will act as promise that can be used with then, catch and finally to get the o/p