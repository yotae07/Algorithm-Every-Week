// 1. [큰 수 출력하기]
const solution = (array) => {
    let answer = [array[0]];
    for (let i = 0; i < array.length; i++) {
        if (array[i + 1] > array[i]) {
            answer.push(array[i + 1]);
        }
    }
    return answer;
};

//모범답안
function solution(arr) {
    let answer = 1,
        max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            answer++;
            max = arr[i];
        }
    }
    return answer;
}

// 2. [보이는 학생]
const solution = (array) => {
    let max = array[0];
    let answer = [array[0]];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            answer.push(array[i]);
        }
    }
    return answer.length;
};

//모범답안
function solution(arr) {
    let answer = 1,
        max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            answer++;
            max = arr[i];
        }
    }
    return answer;
}

// 3. [가위 바위 보]
const solution = (infoA, infoB) => {
    const rockScissorPaper = (info1, info2) => {
        if (info1 === info2) {
            return 'D';
        }
        if (info1 === 1) {
            if (info2 === 3) {
                return 'A';
            }
            return 'B';
        } else if (info1 === 2) {
            if (info2 === 1) return 'A';
            return 'B';
        } else if (info1 === 3) {
            if (info2 === 2) return 'A';
            return 'B';
        }
    };
    let answer = [];
    for (let i = 0; i < infoA.length; i++) {
        const result = rockScissorPaper(infoA[i], infoB[i]);
        answer.push(result);
    }
    return answer;
};
solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]);

// 모범답안
function solution(a, b) {
    let answer = '';
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) answer += 'D ';
        else if (a[i] === 1 && b[i] === 3) answer += 'A ';
        else if (a[i] === 2 && b[i] === 1) answer += 'A ';
        else if (a[i] === 3 && b[i] === 2) answer += 'A ';
        else answer += 'B ';
    }

    return answer;
}

// 4.[점수계산];
const solution = (result) => {
    let answer = [];
    let previousScore = 0;
    for (let score of result) {
        if (score === 1) {
            if (previousScore > 0) {
                previousScore += 1;
                answer.push(previousScore);
            } else {
                answer.push(1);
                previousScore = 1;
            }
        } else {
            previousScore = 0;
        }
    }
    return answer.reduce((acc, cur) => acc + cur, 0);
};

// 풀이보고 리팩토링
const solution = (result) => {
    let sum = 0;
    let acc = 0;
    for (let score of result) {
        if (score > 0) {
            acc++; // ++acc 랑 무슨 차이일까
            sum += acc;
        } else {
            acc = 0;
        }
    }
    return sum;
};
//모범답안
function solution(arr) {
    let answer = 0,
        cnt = 0;
    for (let x of arr) {
        if (x === 1) {
            cnt++;
            answer += cnt;
        } else cnt = 0;
    }

    return answer;
}
