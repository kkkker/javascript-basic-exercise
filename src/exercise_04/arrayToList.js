export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array === null || array === undefined) {
    throw new Error('Creating list from undefined array');
  }
  if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  const head = new Node(array[0]);
  let p = head;
  for (let i = 1; i < array.length; i += 1) {
    const temp = new Node(array[i]);
    p.next = temp;
    p = temp;
  }
  return head;
}
