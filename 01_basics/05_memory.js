//stack and heap

// all primitives are stored in stack.
// and non primitives are stored in heap.
// whenever stack memory is used, a declared variable's copy is given.
// and for heap, its reference is passed.

let myName = "raghu"
let anotherName = myName
//console.log(anotherName);

anotherName = "Raghavendra"
//console.log(anotherName);

let userOne = {
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "raghu@email.com"

console.log(userOne.email);
console.log(userTwo.email);


