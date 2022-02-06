from itertools import permutations
from collections import deque

def solution(expression):
    answer: int = 0
    operator_list: list = ['*', '+', '-']
    cal_data: list = []
    point: int = 0
    for idx, data in enumerate(expression):
        if data in operator_list:
            cal_data.append(expression[point:idx])
            cal_data.append(data)
            point = idx + 1
        else:
            cal_data.append(expression[point:])

    priority = permutations(operator_list)
    for opt_list in priority:
        bucket = [deque(cal_data), deque()]
        b1, b2 = 1, 0
        for opt in opt_list:
        b1, b2 = b2, b1
        while len(bucket[b1]):
            end = bucket[b1].popleft()
            if bucket[b2] and bucket[b2][-1] == opt:
                operator = bucket[b2].pop()
                start = bucket[b2].pop()
                end = str(eval(str(start) + operator + str(end)))
                bucket[b2].append(end)

            answer = max(answer, abs(int(bucket[b2].pop())))

    return answer

