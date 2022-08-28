function solution(numbers) {
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  function dfs(set, arr, fixed) {
    if (arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {
        let num = fixed + arr[i];
        let copyArr = [...arr];
        copyArr.splice(i, 1);

        if (isPrime(parseInt(num))) {
          set.add(parseInt(num));
        }

        dfs(set, copyArr, num);
      }
    }
  }

  const set = new Set();
  dfs(set, numbers, "");

  return set.size;
}
