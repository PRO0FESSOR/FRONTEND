
// type of type guards 
// as we know in js null is also of type objects
// so here in this code ts give error that null is also object 

function printAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    for (const s of strs) {
'strs' is possibly 'null'.

      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}


