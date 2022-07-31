const solution1 = (arr, m) => {
  let answer = 0;
  for (i = 0; i < arr.length; i++) {
    let sum = 0;
    for (j = i; j < arr.length; j++) {
      sum = sum + arr[j];

      if (sum <= m) {
        answer++;
      } else {
        break;
      }
    }
  }
  return answer;
};

solution1([1, 3, 1, 2, 3], 5);

const solution2 = (arr, n) => {
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;

    for (let j = i; j < i + 3; j++) {
      sum = sum + arr[j];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }

  return maxSum;
};

solution2([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3);
