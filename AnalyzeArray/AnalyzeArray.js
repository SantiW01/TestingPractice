const ArrayInfo = {
  average: 0,
  min: 0,
  max: 0,
  length: 0,
};

function AnalyzeArray(array) {
  ArrayInfo.min = array.reduce((current, previous) => {
    return Math.min(current, previous);
  });

  ArrayInfo.max = array.reduce((current, previous) => {
    return Math.max(current, previous);
  });

  ArrayInfo.length = array.length;

  ArrayInfo.average =
    array.reduce((current, previous) => {
      return current + previous;
    }) / ArrayInfo.length;
}

module.exports = AnalyzeArray;
