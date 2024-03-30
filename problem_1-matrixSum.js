// Medium Difficulty: (Do it in a single loop)
// Given a 2D square matrix, find the sum of elements in Principal and Secondary diagonals. For example, consider the following 3 X 3 input matrix. 
// Input: [[1,2,3], [4,5,6], [7,8,9]] 

function sumMatrixDiagonals(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][i];
        sum += matrix[i][matrix.length - i - 1];
    }

    return sum;
}

const matrix = [[1,2,3], [4,5,6], [7,8,9]] 

console.log(sumMatrixDiagonals(matrix));

// In terminal run node problem_1/matrixSum.js