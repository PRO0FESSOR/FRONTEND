
// explicit types 
// types can be defined explicitly to avoid errors

function greet(person: string,age:number){
  console.log(`hello ${person} your age is ${age}`);
}

greet("alex",12); // works
greet("noah","seven"); // dosen't works

