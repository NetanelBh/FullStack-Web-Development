const getAverage = arr => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const avg = arr.reduce((total, current) => total + current) / arr.length;
      resolve(avg);
    }, 1000)
  });
};

getAverage([1,2,3,4,5,6]).then(avg => console.log(avg));