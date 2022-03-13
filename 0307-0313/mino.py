# https://www.acmicpc.net/problem/2739
n = int(input())
for i in range(1, 10):
    print(f"{n} * {i} = {n * i}")


# https://www.acmicpc.net/problem/2741
for i in range(1, int(input()) + 1):
    print(i)


# https://www.acmicpc.net/problem/2742
for i in range(int(input()), 0, -1):
    print(i)


# https://www.acmicpc.net/problem/2908
a, b = map(str, input().split(' '))
print(max(int(a[::-1]), int(b[::-1])))


# https://www.acmicpc.net/problem/10950
result = []
for _ in range(int(input())):
    a, _, b = input()
    result.append(int(a) + int(b))

for i in result:
    print(i)


# https://programmers.co.kr/learn/courses/30/lessons/86491
def solution(cards):
    w, h = 0, 0
    for card in cards:
        w = min(card) if w < min(card) else w
        h = max(card) if h < max(card) else h
    return w * h
