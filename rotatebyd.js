const arry = (arr, d) => {
  const n = arr.length;
  d = d % n; // Handle cases where d is greater than n
  const result = [...arr]; // Create a copy of the original array

  // Rotate the elements
  for (let i = 0; i < n; i++) {
    const newIndex = (i + d) % n;
    result[newIndex] = arr[i];
  }

  return result;
};

console.log(arry([1, 2, 3, 4, 5, 6, 7, 8, 9], 100));