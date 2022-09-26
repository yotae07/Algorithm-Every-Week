function solution(s) {
  let stack = [];

  for (let x of s) {
    if (x === ')') {
      if (stack.indexOf('(') === -1) {
        stack = [];
      } else {
        stack.splice(stack.lastIndexOf('('));
      }
    } else {
      stack.push(x);
    }
  }
  return stack.join('');
}
