export default function(matrix) {
  let a = 0;
  let b = 0;
  let c = 0;

  for(let i = 0; i < matrix.length; i++) {
    a = a + matrix[i][0];
    b = b + matrix[i][1];
    c = c + matrix[i][2];
  }

  return [a, b, c]
}
