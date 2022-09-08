function diagonalDifference(arr) {
  // sums of left and right
  let diagonal1 = 0;
  let diagonal2 = 0;
  // loop through first arr length
  for (let i = 0 ; i<arr[0].length ; i++){
      // since it;s nested array, will keep looping till first array length
      // but brackets will give elem 0 at arr 0, elem 1 ar arr 1, elem 2 at arr 2
      diagonal1 += arr[i][i]
      // brackets will give last elem of arr 0, elem 1 of array 1 and elem 0 at arr 3
      diagonal2 += arr[i][arr.length-i-1]
  }
  // in case sum is negative
  return Math.abs(diagonal1 - diagonal2)
}

console.log(diagonalDifference([[2, 5, 10], [9, 8, 2], [6, 0, 1]]))