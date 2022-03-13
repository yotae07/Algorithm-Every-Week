// 1. [회문 문자열]
const solution = (word) => {
    let answer = 'YES';
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() !== word[word.length - i - 1].toLowerCase()) {
            answer = 'NO';
            break;
        }
    }
    return answer;
};

//[모범답안]
function solution(s) {
    let answer = 'YES';
    s = s.toLowerCase();
    let len = s.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (s[i] != s[len - i - 1]) return 'NO';
    }
    return answer;
}
