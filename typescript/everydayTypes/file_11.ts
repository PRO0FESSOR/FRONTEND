
// literal types 

// string and numeric literals 

type Alignment = "left" | "right" | "center";
type CompareResult = -1 | 0 | 1;

// bollean literal type 
const isTrue: true = true;

// exaple
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre"); // error in this line of code

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}


