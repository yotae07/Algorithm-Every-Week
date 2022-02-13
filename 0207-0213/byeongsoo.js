//1. [연필개수]
const solution = (number) => {
    let answer;
    let result = Math.floor(number / 12);
    if (result * 12 <= number) {
        answer = result + 1;
    }
    return answer;
};

//모범답안
function solution(n) {
    let answer;
    answer = Math.ceil(n / 12);
    return answer;
}

// 2. [1부터 N까지 합 출력하기]
const solution = (number) => {
    let answer = 0;
    for (let i = 0; i < number + 1; i++) {
        answer += i;
    }
    return answer;
};

//모범답안
function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        answer = answer + i;
    }

    return answer;
}

// 3. [최소값 구하기]
const solution = (arg) => {
    let answer;
    answer = arg.sort((a, b) => a - b);
    return answer[0];
};

// 모범답안
function solution(arr) {
    let answer,
        min = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    answer = min;
    return answer;
}

// 4.[홀수];
const solution = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            result.push(arr[i]);
        }
    }
    let sum = result.reduce((prev, cur) => prev + cur, 0);
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < result.length; i++) {
        if (result[i] < min) {
            min = result[i];
        }
    }
    return [sum, min];
};

//모범답안
function solution(arr) {
    let answer = [];
    let sum = 0,
        min = 1000;
    for (let x of arr) {
        if (x % 2 === 1) {
            sum += x;
            if (x < min) min = x;
        }
    }
    answer.push(sum);
    answer.push(min);
    return answer;
}

// 5. [10부제]
const solution = (date, arr) => {
    let answer = [];
    for (let key of arr) {
        if (date.toString() === key.toString().split('')[1]) {
            answer.push(key);
        }
    }
    return answer.length;
};

//모범답안
function solution(day, arr) {
    let answer = 0;
    for (let x of arr) {
        if (x % 10 == day) answer++;
    }

    return answer;
}

// 6. [일곱 난쟁이]

const solution = (arr) => {
    let total = arr.reduce((acc, cur) => acc + cur, 0);
    for (let i = 0; i < arr.length; i++) {
        for (let k = arr.length; k >= 0; k--) {
            if (i !== k) {
                if (total - arr[i] - arr[k] === 100) {
                    return arr.filter((el, idx) => idx !== i && idx !== k);
                }
            }
        }
    }
};

//모범답안
function solution(arr) {
    let answer = arr;
    let sum = answer.reduce((a, b) => a + b, 0);
    for (let i = 0; i < 8; i++) {
        for (let j = i + 1; j < 9; j++) {
            if (sum - (answer[i] + answer[j]) == 100) {
                answer.splice(j, 1);
                answer.splice(i, 1);
            }
        }
    }
    return answer;
}

// 7. [A를 #으로]
const solution = (words) => {
    let arr = words.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'A') {
            arr[i] = '#';
        }
    }
    return arr.join('');
};

//모범답안
function solution(s) {
    let answer = '';
    for (let x of s) {
        if (x == 'A') answer += '#';
        else answer += x;
    }
    return answer;
}

// 8. [문자 찾기]

const solution = (words, spell) => {
    let arr = words.split('');
    let answer = 0;
    for (let key of arr) {
        if (key === spell) {
            answer++;
        }
    }
    return answer;
};
// 모범답안
function solution(s, t) {
    let answer = 0;
    for (let x of s) {
        if (x === t) answer++;
    }
    return answer;
}
