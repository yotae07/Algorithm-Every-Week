def solution(n):
    stand = sum(map(int, bin(n)[2:]))
    for i in range(n + 1, 1000001):
        if stand == sum(map(int, bin(i)[2:])):
            return i
