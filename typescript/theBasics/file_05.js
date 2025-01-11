// explicit types 
// types can be defined explicitly to avoid errors
function greet(person, age) {
    console.log("hello ".concat(person, " your age is ").concat(age));
}
greet("alex", 12); // works
greet("noah", "seven"); // dosen't works
