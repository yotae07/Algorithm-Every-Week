const solution = (arr) => {
  let obj = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
  };

  for (i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1;
    }
  }

  let answer = 'A';
  for (const [key, value] of Object.entries(obj)) {
    if (value > obj[answer]) {
      answer = key;
    }
  }
  return answer;
};

solution([
  'B',
  'A',
  'C',
  'B',
  'A',
  'C',
  'C',
  'A',
  'C',
  'C',
  'B',
  'D',
  'E',
  'D',
  'E',
]);
