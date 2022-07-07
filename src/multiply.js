export default function (array, n) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * n;
  }
  return array;
}
