function solution(items) {
  let answer = [items[0]];
  for (const item of items) {
    if (answer[answer.length - 1] !== item) answer.push(item);
  }
  return answer;
}
