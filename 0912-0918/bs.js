const solution = (arg) => {
  let stack = [];
  let answer = 'NO';

  for (const x of arg) {
    if (x === '(') {
      stack.push(x);
    } else {
      stack.pop();
    }
  }

  if (!stack.length) {
    answer = 'YES';
  }

  return answer;
};

solution('(()(()))(())');
