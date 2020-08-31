export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.

  if (typeof string !== 'string') {
    return 0;
  }
  let resString = string;
  if (arguments.length > 1) {
    let strArray = [];
    strArray = string.split('');
    resString = strArray.filter(prediction).join('');
  }
  return resString.length;
}
