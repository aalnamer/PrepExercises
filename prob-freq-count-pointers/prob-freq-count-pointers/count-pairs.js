// add whatever parameters you deem necessary
function countPairs(arr, num) {
  let count = 0;
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === num) {
      count++;
      left++;
      right--;
    } else if (sum < num) {
      left++;
    } else {
      right--;
    }
  }
  return count;
}

console.log(countPairs([3, 1, 5, 4, 2], 6));
module.exports = { countPairs };
