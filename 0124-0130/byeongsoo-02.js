const solution = (a, b, c) => {
    let answer;
    let arr = [a, b, c];
    arr.sort((a, b) => b - a);
    let maxOne = arr[0];
    let sumTheOthers = arr[1] + arr[2];
    if (sumTheOthers > maxOne) {
        answer = true;
    } else {
        answer = false;
    }
    return answer;
};

//모범답안
// function solution(a, b, c) {
//   let answer = "YES", max;
//   let tot = a + b + c;
//   if (a > b) max = a;
//   else max = b;
//   if (c > max) max = c;
//   if (tot - max <= max) answer = "NO";
//   return answer;
// }

// console.log(solution(13, 33, 17));
