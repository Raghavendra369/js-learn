const name = "Raghu"
const repocount = 10
//console.log(name + repocount + "Value");
//console.log(`Hello ny name is ${name} and my repo count is ${repocount}`);  //its called backticks or string interpolation.


const firstName = new String('ragu');

//console.log(firstName[0]);  // results = 'r'
//console.log(firstName.__proto__);   //results = {}

//console.log(firstName.toUpperCase());   //result = "RAGU"
//this doesnt change the original value or firstName, as it is a function.

//console.log(firstName.charAt(2));   //results = 'g'
//console.log(firstName.indexOf('a'));    //resuts = 1
const lastName = new String('Bhatagunaki')
const newString = lastName.substring(0,4)
//console.log(lastName);

//console.log(newString);


const anotherName = lastName.slice(-9, 4)
//console.log(anotherName);
