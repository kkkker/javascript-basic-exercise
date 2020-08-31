export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  const min = Math.min(start, end);
  const max = Math.max(end, start);
  const res = [];
  for (let i = min; i <= max; i += 1) {
    res.push(i);
  }
  if (start < end) {
    res.pop();
  } else {
    res.reverse().pop();
  }
  return res;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  let res = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    res += numbers[i];
  }
  return res;
}
