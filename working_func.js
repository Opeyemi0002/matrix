
const matrixMultiplication = (A, B) => {
  const n = A.length;
  const C = new Array(n).fill(null).map(() => new Array(n).fill(0));
  if (n === 1) {
    C[0][0] = A[0][0] * B[0][0];
  } else {
    const promises = [];
    for (let i = 0; i < n; i += n/2) {
      for (let j = 0; j < n; j += n/2) {
        const a = [];
        const b = [];
        for (let k = 0; k < n/2; k++) {
          a.push(A[i+k].slice(j, j+n/2));
          b.push(B[i+k].slice(j, j+n/2));
        }
        promises.push(matrixMultiplication(a, b)
          .then((result) => {
            for (let x = 0; x < n/2; x++) {
              for (let y = 0; y < n/2; y++) {
                C[i+x][j+y] += result[x][y];
              }
            }
          })
        );
      }
    }
    return Promise.all(promises).then(() => C);
  }
}

export default matrixMultiplication;



