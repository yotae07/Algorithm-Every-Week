function solution(s) {
  let count = 0;
  let length = 0;
  let sum = 0;
  let arr = s.split("");
  while (length !== 1) {
    const zeroCount = arr.filter((x) => x === "0").length;
    length = arr.length - zeroCount;
    arr = length.toString(2).split("");
    sum += zeroCount;
    count++;
  }

  return [count, sum];
}

// 다른 사람 풀이
// match 이용
function solution(s) {
  var answer = [0, 0];
  while (s.length > 1) {
    answer[0]++;
    answer[1] += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, "").length.toString(2);
  }
  return answer;
}
