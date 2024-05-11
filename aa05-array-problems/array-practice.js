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

// O(n ^ 2)
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
// O(n)
const secondLargest = arr => {
  if (arr.length < 2) return undefined;
  let max = Math.max(...arr)
  arr.splice(arr.indexOf(max), 1)
  return Math.max(...arr)
};

// const shuffle = (arr) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let random = Math.floor(Math.random() * (arr.length - 1))
//     if (!newArr.includes(arr[random])) {
//       newArr.push(arr[random])
//     } else {
//       i--
//     }
//   }
//   return newArr;
// };
// O(n)
const shuffle = (arr) => {
  let newArr = arr.slice()
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]]
  }
  return newArr;
}


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
