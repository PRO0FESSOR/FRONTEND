
// void , undefined , null , never 

function hello():void{
  console.log("hello");
}

// explicitly allowing
let val1:null=null;
let val2:undefined=undefined;

// use never for errors

function error(message):never{
  throw new Error(message);
}



