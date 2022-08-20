function solution(s) {
  if (s.length === 0) {
    return 0;
  }

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] !== s[i]) {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }

  return stack.length > 0 ? 0 : 1;
}
