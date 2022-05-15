const solution = (array, sum) => {
  const n = array.length;
  let answer = 0;
  for (let i = 0; i < n; i++) {
    let totalSum = array[i];
    if (totalSum <= sum) answer++;
    for (let k = i + 1; k < n; k++) {
      totalSum += array[k];
      if (totalSum > sum) break;
      if (totalSum <= sum) answer++;
    }
  }
  return answer;
};
solution([1, 3, 1, 2, 3], 5);
