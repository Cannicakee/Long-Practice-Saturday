// O(n)
const findMinimum = arr => {
  if (arr.length === 0) return undefined;
  return Math.min(...arr)

};

const runningSum = arr => {
  if (arr.length === 0) return [];
  let newArr = [arr[0]]
  let sum = arr[0]
  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i + 1]
    newArr.push(sum)
  }
  return newArr;
};

const evenNumOfChars = arr => {

  // Your code here 
};

const smallerThanCurr = arr => {

  // Your code here 

};

const twoSum = (arr, target) => {

  // Your code here 
};

const secondLargest = arr => {

  // Your code here 
};

const shuffle = (arr) => {

  // Your code here 
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
