function solution(s) {
  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let w = "";
  const answer = s.split("").reduce((acc, cur) => {
    if (/\d/.test(cur)) {
      return (acc += cur);
    }

    w += cur;

    if (arr.includes(w)) {
      const num = arr.findIndex((x) => x === w);
      w = "";
      return (acc += String(num));
    }

    return acc;
  }, "");

  return Number(answer);
}

// 다른사람 풀이
// split 과 join 함수이해도를 높여서 잘 사용하면 더 쉽게 가능
function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}
