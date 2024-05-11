// O(n)
const findMinimum = arr => {
  if (arr.length === 0) return undefined;
  return Math.min(...arr)

};

// O(n)
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

// O(n)
const evenNumOfChars = arr => {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    if (word.length % 2 === 0) {
      count++
    }
  } return count
};

// O(n2)
const smallerThanCurr = arr => {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    let count = 0
    const el = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < el) {
        count++
      }
    }
    result.push(count)
  } return result
};

// O(n)
const twoSum = (arr, target) => {
  for (let num of arr) {
    let newNum = target - num
    if (arr.includes(newNum)) return true
  } return false
};

const secondLargest = arr => {

  // Your code here 
};

const shuffle = (arr) => {

  // Your code here 
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
