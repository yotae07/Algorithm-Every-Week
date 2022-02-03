function solution(price, money, count) {
    let totalPrice = 0;
    for (let i=1; i<=count; i++) {
        totalPrice += i * price;
    }

    const result = totalPrice - money;

    return result > 0 ? result : 0;
}

// 모법답안 (가우스 공식 이용)

function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}
