// 재귀함수 시간 초과
function solution(n) {
  return n > 3 ? solution(n - 1) + solution(n - 2) : n % 1234567;
}

// 반복문을 이용
function solution(n) {
  const arr = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    arr.push((arr[i - 1] + arr[i - 2]) % 1234567);
  }
  return arr[n];
}
