const accId = 135135
let accName = "Raghavendra"
var emailId = "raghu@google.com"
accCity = "Bangalore"
// accId = 2 // not allowed to change
accName = "Raghu"
emailId = "rgu@rgu.com"
accCity = "Kalaburagi"
let accState;

/*
    Prefer not to use 'var', because of the issue of block scope and functional scope.
*/
console.log(accId);
console.table([accId, accName, emailId, accCity, accState]); // accState will be undefined in the result, bcoz the variable is just declared, not defined.
