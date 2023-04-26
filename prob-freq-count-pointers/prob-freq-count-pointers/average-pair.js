// add whatever parameters you deem necessary
function averagePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = (arr[left] + arr[right]) / 2;
    if (sum === avg) {
      return true;
    } else if (sum < avg) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

module.exports = { averagePair };
