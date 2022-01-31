const solution = (a, b, c) => {
    let answer;
    let smallOne;
    if (a < b) {
        smallOne = a;
    } else {
        smallOne = b;
    }
    if (smallOne < c) {
        answer = smallOne;
    } else {
        answer = c;
    }
    return answer;
};

// 모범답안
// function solution(a, b, c) {
//   let answer;
//   if (a < b) answer = a;
//   else answer = b;
//   if (c < answer) answer = c;
//   return answer;
// }

// console.log(solution(2, 5, 1));
