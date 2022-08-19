def solution(n):
    if n < 3:
        return n

    answer = [0 for _ in range(n + 1)]
    answer[1] = 1
    answer[2] = 2
    for i in range(3, n + 1):
        answer[i] = answer[i - 1] + answer[i - 2]

    return answer[n] % 1234567