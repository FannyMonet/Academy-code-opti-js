export function sumNumbers(numList) {
  let sum = 0;
  for (let i = 0; i < numList.length; i++) {
    // console.log("forgotten console log");
    sum += numList[i];
  }
  return sum;
}
