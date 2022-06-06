/*
for (let fizzbuzz = 0; fizzbuzz <  10; fizzbuzz++) {
    if (fizzbuzz % 2 == 0){ 
        console.log("buzz")
    }else (fizzbuzz % 2 == 1){
        console.log("buzz")
    }
    
}
*/

/*
for (let fizzbuzz = 0; fizzbuzz <= 20; fizzbuzz++){
    if (fizzbuzz % 2 == 0) {
        console.log(fizzbuzz + " "+ "even")
    } else {
        console.log(fizzbuzz + " " + "odd")
    }
}
*/

// let phi = 3.14
// let r = 7 * 2
// let keliling = 2 * phi * r
// let luas = phi * r
// console.log( keliling, luas)

// // Setup
// const lastName = "Lovelace";

// Only change code below this line
/*
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line
Use Bracket Notation to Find the Last Character in a String
In order to get the last letter of a string, you can subtract one from the string's length.

For example, if const firstName = "Ada", you can get the value of the last letter of the string by using firstName[firstName.length - 1].

Example:

const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
lastLetter would have a value of the string a.

Use bracket notation to find the last character in the lastName variable.

Hint: Try looking at the example above if you get stuck.

Nest one Array within Another Array
You can also nest arrays within other arrays, like below:

const teams = [["Bulls", 23], ["White Sox", 45]];
This is also called a multi-dimensional array.

Access Multi-Dimensional Arrays With Indexes
One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.

Example

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

arr[3];
arr[3][0];
arr[3][0][1];
arr[3] is [[10, 11, 12], 13, 14], arr[3][0] is [10, 11, 12], and arr[3][0][1] is 11.

Note: There shouldn't be any spaces between the array name and the square brackets, like array [0][0] and even this array [0] [0] is not allowed. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];//contoh yang di dapet adalah array urutan ke 3 dari atas dan dari dalem yang ke 3 urutan ke 2 adalah 8

Manipulate Arrays With push()
An easy way to append data to the end of an array is via the push() function.

.push() takes one or more parameters and "pushes" them onto the end of the array.

Examples:

const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
arr1 now has the value [1, 2, 3, 4] and arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]].

Push ["dog", 3] onto the end of the myArray variable.

Manipulate Arrays With pop()
Another way to change the data in an array is with the .pop() function.

.pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

Any type of entry can be popped off of an array - numbers, strings, even nested arrays.

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
The first console.log will display the value 6, and the second will display the value [1, 4].

Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.

Manipulate Arrays With shift()
pop() always removes the last element of an array. What if you want to remove the first?

That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

Example:

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
removedFromOurArray would have a value of the string Stimpson, and ourArray would have ["J", ["cat"]].

Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.

Shopping List
Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.

["Chocolate Bar", 15]
There should be at least 5 sub-arrays in the list.


function functionWithArgs (param1, param2){
  return console.log(param1 + param2)
}
functionWithArgs(1,2)
functionWithArgs (7,9)
// Declare the myGlobal variable below this line
let myGlobal = 10

function fun1() {
  // Assign 5 to oopsGlobal Here
 return oopsGlobal = 5
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
Global vs. Local Scope in Functions
It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

In this example:

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
The function myFun will return the string Head because the local version of the variable is present.

Add a local variable to myOutfit function to override the value of outerWear with the string sweater.

Understanding Undefined Value returned from a Function
A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

Example

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
addSum is a function without a return statement. The function will change the global sum variable but the returned value of the function is undefined.

Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.

Assignment with a Returned Value
If you'll recall from our discussion of Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

Assume we have pre-defined a function sum which adds two numbers together, then:

ourSum = sum(5, 12);
will call the sum function, which returns a value of 17 and assigns it to the ourSum variable.

Call the processArg function with an argument of 7 and assign its return value to the variable processed.

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7)


*/


// let begegSquad = {
//     device: "xiaomi",
//     internet: "wifi",
//     tempat: "ladut",
//     player: ["dwi", "fajar", "angga", "uya", "ladut"]
//   }
//   console.log(begegSquad.player[0].toUpperCase())

// let rumahAtas = [{kasur1: "galuh", kasur2: "bram"}]
// console.log(rumahAtas[0].kasur1)

// let editArray = (arr,action,index,value) =>{

//     if(action == "add"){
//         arr.splice(index,0,value)
//     } else if(action == "delete"){
//         arr.splice(index,1)
//     } else{
//         console.log("salah input mohon ulangi")
//     }    
//     return arr
// }

// console.log(editArray([1,2,3,4],"add",0,5))
// console.log(editArray([1,2,3,4], "delete",0,3))

// let each = (arr,callbek) =>{
//     arr.map(element =>{
//         callbek(element)
//     })
// }
// each([1,2,3,4],val=> console.log(val))
// each([1,2,3,4],val=> console.log(val*2))

// let editArray = (arr,action,index,value) =>{

//     if(action == "add"){
//         arr.splice(index,0,value)
//     } else if(action == "delete"){
//         arr.splice(index,1)
//     } else{
//         console.log("salah input mohon ulangi")
//     }    
//     return arr
// }

// console.log(editArray([1,2,3,4],"add",0,5))
// console.log(editArray([1,2,3,4], "delete",3,3))


//contoh class dengan kondisi
// class shape {
//     constructor(sideLength, type){
//         this.sideLenght = sideLength
//         this.type = type
//     }
//     calcPerimeter(){
//         if (this.type === "square") {
//             return this.sideLenght * 4
//         }else if(this.type === "triangle"){
//             return this.sideLenght * 3
//         }else{
//             return "type error"
//         }
//     }
// }
// let square = new shape(5, "square")
// console.log(square.calcPerimeter())

// let each = (arr,cb) =>{
//   arr.map(element =>{
//       cb(element)
//   })
// }

// each([1,2,3,4],val=> console.log(val*2))

// let editArray = (arr,action,index,value) =>{

//       if(action == "add"){
//           arr.splice(index,0,value)
//       } else if(action == "delete"){
//           arr.splice(index,1)
//       } else{
//           console.log("salah input mohon ulangi")
//       }    
//       return arr
//   }
  
//   console.log(editArray([1,2,3,4],"add",0,5))
//   console.log(editArray([1,2,3,4], "delete",0,3))
// let reject = (arr,cb) => {

//   let newArray = []
//   arr.map(rijek =>{
//       if(!cb(rijek)){
//           newArray.push(rijek)
//       }
//   }) 
//   return newArray;
// }
// console.log(reject([1,2,3,4], (val) => val > 2))
