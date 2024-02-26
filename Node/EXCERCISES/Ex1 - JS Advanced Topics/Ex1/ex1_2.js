const arr = [
  [1, 6, 3, 9],
  [6, 21, 5, 12],
  [4, 11, 23, 1],
];

// Return array with the biggest number from each array
const biggestNumArr = arr.map(innerArr => {
  let max_val = 0;
  innerArr.forEach(elem => {
    if (elem > maxVal) {
      maxVal = elem;
    }
  
  return maxVal;
  })});


console.log(`Biggest num from each array: [${biggestNumArr}]`);

// Print the numbers from biggestNumArr by filtering
console.log(
  `Filtered numbers: [${biggestNumArr.filter(num => (num > 15) & (num < 25))}]`
);
