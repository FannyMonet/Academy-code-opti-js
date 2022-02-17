export default function (numList) {
  let sum = 0;
  for (let i = 0; i < numList.length; i++) {
    sum += numList[i];
  }
  return sum;
}
