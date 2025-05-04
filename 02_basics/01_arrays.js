const myArr = [10, 1, 2, 3]
const heros = ["batman", "flash"]

const arr = new Array(1,2,3,4,5);
//console.log(myArr[0]);

//Array methods


myArr.push(6);
myArr.push(7);
//console.log(myArr);
myArr.pop()

myArr.unshift(9)    //pushes the new element given to the start of the index.
myArr.shift()       // removes the first element from the array.

//console.log(myArr.includes(9));   // checks whether the given element is present in array or not.

//console.log(myArr);



const saver = ["thor", "hulk", "spiderman"]
const saver2 = ["superman", "flash", "batman"]

//saver.push(saver2);
//console.log(saver);     // results = [ 'thor', 'hulk', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//console.log(saver[3][1]);       //results = flash

//const allsavers = saver.concat(saver2)
//console.log(allsavers);     //results = [ 'thor', 'hulk', 'spiderman', 'superman', 'flash', 'batman' ]


const allHeros = [...saver, ...saver2]      //this is called spreading two arrays.

//console.log(allHeros);      //results = [ 'thor', 'hulk', 'spiderman', 'superman', 'flash', 'batman' ]

const another = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another = another.flat(Infinity)     // returns new array with all subarray elements concatenated with given depth, i am using infinity as i dont know what is the depth.

//console.log(real_another);

console.log(Array.from("Raghu"));       // results = [ 'R', 'a', 'g', 'h', 'u' ], it converts it to array.
