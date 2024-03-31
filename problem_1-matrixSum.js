// Medium Difficulty: (Do it in a single loop)
// Given a 2D square matrix, find the sum of elements in Principal and Secondary diagonals. For example, consider the following 3 X 3 input matrix.
// Input: [[1,2,3], [4,5,6], [7,8,9]]

function sumMatrixDiagonals(matrix) {
  if (matrix.length === 0 || matrix[0].length < 1) return 0;
  if (matrix.length !== matrix[0].length) return "Not a rectangle matrix";
  if (matrix.length === 1) return matrix[0][0];

  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i];
    sum += matrix[i][matrix.length - i - 1];
  }

  return sum;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("Input: [[1,2,3], [4,5,6], [7,8,9]] ");
console.log("Expected value: 1+5+9 = 15, 3+5+7 = 15, 15+15 = 30");

console.log("Result: ", sumMatrixDiagonals(matrix));

matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log("Input: [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]");
console.log("Expected value: 1+6+11+16 = 34, 4+7+10+13 = 34, 34+34 = 68");

console.log("Result: ", sumMatrixDiagonals(matrix));

matrix = [
    [1],
    ];
console.log("Input: [[1]]");
console.log("Expected value: 1");

console.log("Result: ", sumMatrixDiagonals(matrix));

matrix = [
    [1, 2, 3],
    [4, 5, 6],
    ];  
console.log("Input: [[1,2,3], [4,5,6]]");
console.log("Expected value: Not a rectangle matrix");

console.log("Result: ", sumMatrixDiagonals(matrix));

// Time Complexity: O(n)
// Space Complexity: O(1)
