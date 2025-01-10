
// functions in ts 

const is18 =  function(age:number){
  return age>=18?true:false;
}

is18(12);

// return type 

const is15 =  function(age:number) :string{
  return age>=18?true:false; // gives error
}

//optional parameter
function greet(name?: string): string {
  return `Hello, ${name || "Guest"}!`;
}

//default parameter

function increment(val:number,by:number = 1):number {
  return val+by;
}

// for async operation

async function getFavoriteNumber(): Promise<number> {
  return 26;
}

// anonymus function 

const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});

