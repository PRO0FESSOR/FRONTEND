
// strictnes in ts 

//default behaviour - allow null and any 

var value;
value = "alex";
value = 4;

// without strictNullChecks

let namee: string;
namee = null //allowed

// with null checks 

let name: string | null = null ; // need to allow null explicitly
name = null ; // allowed

// all strictness example 

function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, "10"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// no implicitany example

function greet(name) {
  console.log(`Hello, ${name}`);
}

// Error: Parameter 'name' implicitly has an 'any' type.
