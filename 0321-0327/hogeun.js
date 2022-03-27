// 1. 음양 더하기
function solution1(absolutes, signs) {
    return absolutes.reduce((acc, cur, idx) => acc += signs[idx] ? cur : -cur, 0);
}

// 2. 폰켓몬
function solution2(nums) {
    return [...new Set(nums)].slice(0,nums.length/2).length;
}