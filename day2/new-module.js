let user = "vijay"; // public
let company = "Intellipaat"; 
let city = "Bengaluru";  
let data = "my component's data";  
 
let myfun = (username = "guest") => {
    return "hello "+username;
}
 
class Hero{
    firstname = "Tony";
    lastname = "Stark";
    fullname(){
        return this.firstname+" "+this.lastname;
    }
}
 
// commonjs design pattern way of exporting 
// 2009
/* 
module.exports.user = user;
module.exports.company = company;
module.exports.city = city; 
*/
/* 
module.exports = {
    user : user,
    company : company,
    city : city
}; 
*/
module.exports = { user, comp : company, city, compdata : data, Hero, myfun }; 

console.log(module.exports);
 
// ECMA 
// 2015 ES6
// 2016 ES6