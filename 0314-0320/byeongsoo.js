// 유효한 팰린드롬(x)
// [내풀이]
const solution = (word) => {
    let answer = 'YES';
    let wordArray = word.split('');
    console.log(wordArray);
    let length = Math.floor(wordArray.length / 2);
    for (let i = 0; i < length; i++) {
        if (word[i].toLowerCase() !== word[word.length - i - 1].toLowerCase()) {
            console.log(word[i]);
            answer = 'NO';
            break;
        }
    }
    return answer;
};

// [모범답안]
const solution = (s) => {
    let answer = 'YES';
    s = s.toLowerCase().replace(/[^a-z]/g, '');
    if (s.split('').reverse().join('') !== s) return 'NO';
    return answer;
};

// 놓친 포인트
// 1. 알파벳 이외의 것들은 제외 시키는 방법을 알지 못했다. regex를 써야되나 고민했지만 사용하지 않음.
// 2. reverse라는 메소드를 이용하면 배열의 엘리먼트의 순서를 뒤짚을 수 있다.

// solution('found7, time: study; Yduts; emit, 7Dnuof')

// [숫자만 추출]
const solution = (s) => {
    let arr = s.split('').filter((word) => !isNaN(Number(word)));
    console.log('arr: ', arr);
    if (arr[0] === '0') arr.shift();
    return Number(arr.join(''));
};
// 포인트
// 1. isNaN()메소드를 활용해 숫자인 것들만 골라 낸다.
solution('g0en2T0s8eSoft')[모범답안];
function solution(str) {
    let answer = '';
    for (let x of str) {
        if (!isNaN(x)) answer += x;
    }
    return parseInt(answer);
}

// 리뷰
// 1. string은 그자체로 loop를 돌릴 수 있기 때문에 굳이 split('')을 사용해 배열에 할당할 필요가 없었다.answer라는 빈 스트링을 놓고 붙이는 형태가 더 적절햇다.
