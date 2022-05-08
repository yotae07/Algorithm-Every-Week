const solution = (array, sum) => {
  const n = array.length;
  let answer = 0;
  for (let i = 0; i < n; i++) {
    let totalSum = array[i];
    for (let k = 0; k < n; k++) {
      totalSum += array[k];
      if (totalSum === sum) {
        answer++;
        break;
      }
      if (totalSum > sum) break;
    }
  }
  return answer;
};
solution([1, 2, 1, 3, 1, 1, 1, 2], 6);
