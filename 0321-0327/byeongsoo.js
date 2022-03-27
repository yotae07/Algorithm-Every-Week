const solution = (word, spell) => {
    let arr = [];
    let answer = Array.from({ length: word.length }, () => 0);
    for (let i = 0; i < word.length; i++) {
        if (word[i] === spell) {
            arr.push(i);
        }
    }

    for (let i = 0; i < word.length; i++) {
        let min;
        for (let j = 0; j < arr.length; j++) {
            if (j === 0) {
                min = Math.abs(arr[j] - i);
            } else {
                if (Math.abs(arr[j] - i) < min) {
                    min = Math.abs(arr[j] - i);
                }
            }
        }
        answer[i] = min;
    }
    return answer;
};
//[모범답안]
function solution(s, t) {
    let answer = [];
    let p = 1000;
    for (let x of s) {
        if (x === t) {
            p = 0;
            answer.push(p);
        } else {
            p++;
            answer.push(p);
        }
    }
    p = 1000;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === t) p = 0;
        else {
            p++;
            answer[i] = Math.min(answer[i], p);
        }
    }
    return answer;
}
