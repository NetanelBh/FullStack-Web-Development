const funcPrt = require("./srtUtils");

const gerArrLength = (stringsArr) => {
  return stringsArr.reduce((total, current) => {
    return total + funcPrt.getLength(current);
  }, 0);
};

module.exports = {gerArrLength};