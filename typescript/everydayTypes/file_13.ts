
// null and undefined 

// if strict null checks on then we need to check for the null values

function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}

// non null assertion opertation(postfix  !)

function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}


