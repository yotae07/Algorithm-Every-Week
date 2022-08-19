from collections import deque


def solution(queue1, queue2):
    count = 0
    max_count = len(queue1) * 2 + len(queue2) * 2
    deque1 = deque(queue1)
    deque2 = deque(queue2)
    sum1 = sum(queue1)
    sum2 = sum(queue2)
    while sum1 != sum2:
        if sum1 > sum2:
            move = deque1.popleft()
            deque2.append(move)
            sum1 -= move
            sum2 += move
        else:
            move = deque2.popleft()
            deque1.append(move)
            sum1 += move
            sum2 -= move

        count += 1
        if count > max_count:
            return -1

    return count
