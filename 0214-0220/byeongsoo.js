// [대문자 찾기]
const solution = (str) => {
    let answer = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() !== str[i]) {
            answer++;
        }
    }
    return answer;
};
solution('KoreaTimeGood');

// [대문자로 통일]
// const solution = (str) => {
//     let answer = str.slice(0);
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].toUpperCase() !== str[i]) {
//             answer[i] = answer[i].toUpperCase();
//         }
//     }
//     return answer;
// };
const solution = (str) => {
    return str.toUpperCase();
};

//모범답안
function solution(s) {
    let answer = '';
    for (let x of s) {
        let num = x.charCodeAt();
        if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
        else answer += x;

        //if(x===x.toLowerCase()) answer+=x.toUpperCase();
        //else answer+=x;
    }

    return answer;
}

// [대소문 변환]
const solution = (str) => {
    let answer = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i].toUpperCase() !== str[i]) {
            // 소문자
            answer = answer + str[i].toUpperCase();
        } else {
            answer = answer + str[i].toLowerCase();
        }
    }
    return answer;
};
solution('StuDY');

// [가장 긴 문자열]
const solution = (n, array) => {
    let answer = {
        max: 0,
        word: '',
    };
    for (let key of array) {
        if (key.length > answer.max) {
            answer = {
                max: key.length,
                word: key,
            };
        }
    }
    return answer.word;
};
solution(5, ['teacher', 'time', 'student', 'beautiful', 'good']);

// [가운데 문자 출력]
const solution = (str) => {
    let answer = '';
    if (str.length % 2 === 0) {
        // 짝수
        answer = str[str.length / 2 - 1] + str[str.length / 2];
    } else {
        answer = str[Math.floor(str.length / 2)];
    }
    return answer;
};
solution('study');
solution('good');

// [중복문자제거]
const solution = (str) => {
    let answer = '';
    for (let key of str) {
        if (!answer.includes(key)) {
            answer = answer + key;
        }
    }
    return answer;
};
solution('ksekkset');

//모범답안
function solution(s) {
    let answer = '';
    //console.log(s.indexOf("K"));
    for (let i = 0; i < s.length; i++) {
        //console.log(s[i], i, s.indexOf(s[i]));
        if (s.indexOf(s[i]) === i) answer += s[i];
    }
    return answer;
}

// [중복단어제거]
const solution = (n, array) => {
    let answer = [];
    for (let key of array) {
        if (!answer.includes(key)) {
            answer.push(key);
        }
    }
    return answer;
};
solution(5, ['good', 'time', 'good', 'time', 'student']);

//모범답안
function solution(s) {
    let answer;
    //console.log(s.indexOf("student"));
    answer = s.filter((v, i) => {
        //console.log(v, i);
        if (s.indexOf(v) === i) return v;
    });

    return answer;
}
