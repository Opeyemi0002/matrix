import matrixMultiplication from "../working_func.js";

const A = [[1, 2], [3, 4]];
const B = [[5, 6], [7, 8]];

matrixMultiplication(A, B).then((C) => {
  console.log(C);
});