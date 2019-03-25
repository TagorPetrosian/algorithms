/**
 * @param {number[]} nums
 * @return {number}
 */

const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

const getPivot = (array, start, end) => {
  const pivotVal = array[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (array[i] < pivotVal) {
      swap(array, i, pivotIndex);
      pivotIndex++;
    }
  }
  swap(array, pivotIndex, end);
  return pivotIndex;
};

const quickSort = (array, start, end) => {
  if (start < end) {
    const p = getPivot(array, start, end);
    quickSort(array, start, p - 1);
    quickSort(array, p + 1, end);
  }
};

var arrayPairSum = function(nums) {
  // quick sort the array
  quickSort(nums, 0, nums.length - 1);

  let result = 0;

  // sum all the element at even indices
  for (let i = 0; i < nums.length - 1; i += 2) {
    result += nums[i];
  }

  return result;
};

var arr = [7, 6, 3, 2, 9, 10, 15];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
