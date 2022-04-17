import itertools


def solution(n):
    answer = [[0 for j in range(i + 1)] for i in range(n)]
    count = 1
    a, b = -1, 0
    for i in range(n):
        for _ in range(i, n):
            if i % 3 == 0:
                a += 1
                answer[a][b] = count
                count += 1
            elif i % 3 == 1:
                b += 1
                answer[a][b] = count
                count += 1
            else:
                a -= 1
                b -= 1
                answer[a][b] = count
                count += 1

    return list(itertools.chain(*answer))

