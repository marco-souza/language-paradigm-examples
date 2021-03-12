// Procedural filter
function filter(list, conditionalFunction) {
  let filteredList = [];
  for (let i = 0; i < list.length; i++) {
    if (conditionalFunction(i)) {
      // é par
      filteredList.push(i);
    }
  }
  return filteredList;
}

// procedural map
function map(list, callbackFunction) {
  let mappedList = [];
  for (let i = 0; i < list.length; i++) {
    mappedList.push(callbackFunction(i));
  }
  return mappedList;
}

// list 0 .. 10
const list10 = Array.from({ length: 10 }).map((_, index) => index);

// Function filter
const isPar = (n) => n % 2 === 0;
// function isPar(n) {
//   return n % 2 === 0;
// }

console.log(list10.filter(isPar));
console.log(filter(list10, isPar));

console.log(list10.map(isPar));
console.log(map(list10, isPar));
