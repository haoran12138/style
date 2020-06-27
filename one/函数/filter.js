let arr1 = [1, 4, 2, 5, 2, 6, 7, 8, 9, 5, 7, 9];
let newarr = arr1.filter(item => {
  return item > 3;
});
console.log(newarr);

let persons = [
  { name: "Peter", age: 21 },
  { name: "Mark", age: 30 },
  { name: "Josn", age: 19 },
  { name: "Jane", age: 31 },
  { name: "Tony", age: 35 }
];

let newPerson = persons.filter(item => {
  return item.age > 30;
});
console.log(newPerson);
