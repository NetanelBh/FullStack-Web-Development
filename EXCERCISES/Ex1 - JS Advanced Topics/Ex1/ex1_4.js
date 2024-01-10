const arr = [
  [1, 6, 3, 9],
  [6, 21, 5, 12],
  [4, 11, 23, 1],
];

const funcA = (arr) => {
  return new Promise(resolve => {
    setTimeout(() => {
      //Start from 0 and pass each time different inner array
      const totalSum = arr.reduce((total, innerArr) => {
        // Add each iteration the last total sum with the current inner arr sum
        return total + innerArr.reduce((innerTotal, innerCurrentValue) => {
          return innerTotal + innerCurrentValue;
        }, 0);
      }, 0);

      resolve(totalSum);
    }, 2000);
  })
};

const funcB = async () => {
  const res = await funcA(arr);
  return res * 2;
};

// funcA(arr).then(totalSum => {console.log(totalSum)});
funcB().then(totalSum => console.log(totalSum));


