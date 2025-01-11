
// type assertion 

const value = someValue as TargetType;
const value = <TargetType>someValue;

const input = document.getElementById("myInput") as HTMLInputElement;
input.value = "Hello!";

function getLength(value: string | number): number {
  if ((value as string).length) {
    return (value as string).length; // Treating `value` as a string
  }
  return value.toString().length; // Treating `value` as a number
}

