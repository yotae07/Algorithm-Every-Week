//[두 배열 합치기]

const solution = (arr1, arr2) => {
    let answer = [...arr1, ...arr2];
    return answer.sort((a, b) => a - b);
};

solution([1, 3, 5], [2, 3, 6, 7, 9]);

//모범답안
function solution(arr1, arr2) {
    let answer = [];
    let n = arr1.length;
    let m = arr2.length;
    let p1 = (p2 = 0);
    while (p1 < n && p2 < m) {
        // 둘 다 length가 끝나지 않았을 때
        if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
        // arr[p1]이 같거나 작다면 answer에 push하고 해당 포인터의 값을 늘려준다.
        // 후치 연산자를 통해 push 후 p1의 값을 늘려준다.
        else answer.push(arr2[p2++]);
        // 그 외 경우 arr2의 값을 push하고 포인터를 늘려준다
    }
    // 이렇게 해도 둘의 length가 다를 경우 더 큰 length를 가진 배열은 아직 값이 남아있다.
    while (p1 < n) answer.push(arr1[p1++]); //
    // p1이 아직 남아 있다면 그대로 push하고 포인터를 늘려준다.
    while (p2 < m) answer.push(arr2[p2++]);
    // p2가 아직 남아 있다면 그대로 push하고 포인터를 늘려준다.
    return answer;
}
