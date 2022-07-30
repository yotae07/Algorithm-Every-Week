function solution(a) {
  let answer = a.length;

  for (let i = 1; i <= a.length; i++) {
    const chunkArr = [];
    for (let j = 0; j < a.length; j += i) {
      const str = a.substr(j, i);
      chunkArr.push(str);
    }

    let count = 1;
    const textLength = chunkArr.reduce((acc, cur, idx) => {
      if (cur === chunkArr[idx + 1]) {
        count += 1;
      } else {
        acc += (count === 1 ? "" : count) + cur;
        count = 1;
      }

      return acc;
    }, "").length;

    answer = Math.min(answer, textLength);
  }

  return answer;
}
