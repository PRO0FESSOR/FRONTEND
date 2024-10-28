
// primitive vs referrence data type

let num1 = 6;
let num2 = num1;

console.log(`num1 is ${num1}`);
console.log(`num2 is ${num2}`);

num1++;

console.log(`num1 is ${num1}`);
console.log(`num2 is ${num2}`);

// in above example only num1 increases but num2 is same 6

let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1);
console.log("array2", array2);

//in above example array2 also changes which makes them referrence type


// primitive data types are stored in the stack which requires only values 
// referrence data types are stored in the heap and works using address
