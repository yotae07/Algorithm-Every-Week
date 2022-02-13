function solution(n) {
    const remainders = [];

    for (let quotient=n; quotient > 0; quotient = Math.floor(quotient / 3)) {
        remainders.push(quotient % 3);
    }

    return remainders.reduce((result, remainder, idx) =>
            result += remainder * 3**(remainders.length - idx - 1)
        , 0)

}


// 다른 사람 풀이

const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}