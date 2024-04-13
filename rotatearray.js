var rotate = function(nums, k) {
  let n = nums.length;
  k = k % n; // Ensure k is within the range of array length

  // Reverse the entire array
  reverse(nums, 0, n - 1);
  // Reverse the first k elements
  reverse(nums, 0, k - 1);
  // Reverse the remaining n-k elements
  reverse(nums, k, n - 1);
};

function reverse(arr, start, end) {
  while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements using destructuring assignment
      start++;
      end--;
  }
}
