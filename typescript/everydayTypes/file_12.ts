
// Interfaces 
// completly same like type but in interfaces we can add properties 

interface Point {
  x: number;
  y: number;
}

interface Point {
  z : number;
}
 
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 , z: 100});


