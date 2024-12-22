
// proto in objects

const obj1 = {
  key1 : "value1",
  key2 : "value2"
}

const obj2 = {
  key3 : "value3"
}

console.log(obj1.key2);
console.log(obj2.key2);

// using object.create we set the proto property of obj3 which means now obj1 property are inherited by obj3

const obj3 = Object.create(obj1);
obj3.key3 = "value3";
console.log(obj3.key1);
