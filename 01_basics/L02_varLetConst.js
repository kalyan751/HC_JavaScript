const accountId = 14553;
let accountEmail = "kalyan@gmail.com"
var pass = "1234"
accountCity = "jaipur"
let accountState;

console.log("hello")
/*
prefer not to use var 
because of issues in block scope and functional scope

*/ 
accountEmail = "kal@gmail.com"
pass = "5646"
accountCity = "bengaluru";
console.table([accountId,accountEmail,pass,accountCity,accountState])