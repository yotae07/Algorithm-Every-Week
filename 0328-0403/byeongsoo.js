// [문자열 압축 x]

const solution = (str) => {
    let answer = '';
    let cnt = 1;
    str = str + ' ';
    console.log('str: ', str);
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === str[i + 1]) {
            cnt++;
        } else {
            //다르다면
            answer += str[i];
            if (cnt > 1) answer += String(cnt);
            cnt = 1;
        }
    }
    return answer;
};

solution('KKHSSSSSSSE');

//[자리수의 합]
const solution = (array) => {
    let max = 0;
    let maxIdx = 0;
    for (let i = 0; i < array.length; i++) {
        let str = array[i].toString();
        // console.log('str: ', str)
        let sum = 0;
        for (let key of str) {
            sum = sum + Number(key);
            // console.log('sum1: ', sum)
        }
        console.log('sum: ', sum);
        if (sum > max) {
            max = sum;
            maxIdx = i;
        }
        if (sum === max) {
            maxIdx = array[maxIdx] > array[i] ? maxIdx : i;
        }
    }
    return array[maxIdx];
};

solution([128, 460, 603, 40, 521, 137, 123]);

//[뒤집은 소수]
const solution = (array) => {
    let answer = [];
    const isPrime = (num) => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    };
    for (let i = 0; i < array.length; i++) {
        let str = array[i].toString().split('').reverse().join('');
        console.log('str: ', str);
        if (isPrime(Number(str))) {
            answer.push(Number(str));
        }
    }
    return answer;
};
solution([32, 55, 62, 20, 250, 370, 200, 30, 100]);
