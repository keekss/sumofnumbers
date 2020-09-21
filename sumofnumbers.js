const testData = [-1, 0, 4, 5, -3];

function sumWithForLoop(data) {
  let total = 0;
  for (const i of data) {
    total += i;
  }
  return total;
}

function sumWithWhileLoop(data) {
  let total = 0;
  let index = 0;
  while (index < data.length) {
    total += data[index];
    index++;
  }
  return total;
}

function sumWithRecursion(data) {
  if (data.length === 0) {
    return 0;
  }
  return data[0] + sumWithRecursion(data.slice(1, data.length));
}

function sumTheSimpleWay(data) {
  return _.reduce(data, (a, b) => a + b);
}

console.log(sumWithForLoop(testData));
console.log(sumWithWhileLoop(testData));
console.log(sumWithRecursion(testData, 0));
console.log(sumTheSimpleWay(testData));
