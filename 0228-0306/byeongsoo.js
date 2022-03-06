// 1. [등수 구하기]
const solution = (arr) => {
    let n = arr.length;
    let answer = Array.from({ length: n }, () => 1);
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                answer[i]++;
            }
        }
    }
    return answer;
};
solution([92, 92, 92, 100, 76]);

// 2. [격자판 최대합]
const solution = (arr) => {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length;
    let sum1 = (sum2 = 0);
    for (let i = 0; i < n; i++) {
        sum1 = sum2 = 0;
        for (let j = 0; j < n; j++) {
            sum1 += arr[i][j]; // 행의 합
            sum2 += arr[j][i]; // 열의 합
        }
        answer = Math.max(answer, sum1, sum2);
    }
    sum1 = sum2 = 0;
    for (let i = 0; i < n; i++) {
        sum1 += arr[i][i];
        sum2 += arr[i][n - i - 1];
    }
    answer = Math.max(answer, sum1, sum2);
    return answer;
};

// 3. [봉우리]
const solution = (arr) => {
    let n = arr.length;
    let zeroArray = Array.from({ length: n + 2 }, () => 0);

    let newArray = [zeroArray, ...arr, zeroArray];
    for (let i = 0; i < newArray.length; i++) {
        if (!(i == 0 || i === newArray.length - 1)) {
            newArray[i].push(0);
            newArray[i].unshift(0);
        }
    }

    let answer = 0;
    for (let i = 1; i < newArray.length - 1; i++) {
        for (let j = 1; j < newArray.length - 1; j++) {
            if (
                newArray[i][j] >
                Math.max(
                    newArray[i - 1][j],
                    newArray[i][j + 1],
                    newArray[i + 1][j],
                    newArray[i][j - 1]
                )
            ) {
                answer++;
            }
        }
    }
    return answer;
};

//모범답안
function solution(arr) {
    let answer = 0;
    let n = arr.length;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let flag = 1;
            for (let k = 0; k < 4; k++) {
                let nx = i + dx[k];
                let ny = j + dy[k];
                if (
                    nx >= 0 &&
                    nx < n &&
                    ny >= 0 &&
                    ny < n &&
                    arr[nx][ny] >= arr[i][j]
                ) {
                    flag = 0;
                    break;
                }
            }
            if (flag) answer++;
        }
    }

    return answer;
}
