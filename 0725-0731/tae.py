from itertools import permutations
from math import factorial

def solution(n, k):
    answer = [0 for i in range(n)]
    items = [i for i in range(1, n + 1)]
    return tmp(n, k, answer, items)

def tmp(n, k, answer, items):
    if n < 2:
        answer[-n] = items.pop()
        return answer

    step = factorial(n-1)
    target_num = k // step - 1 if k % step == 0 else k // step
    s = step if k % step == 0 else k % step
    answer[-n] = items.pop(target_num)
    return tmp(n - 1, s, answer, items)

