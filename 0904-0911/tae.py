def solution(n):
    answer = []
    move(n, 1, 3, 2, answer)
    return answer

def move(n, start, end, point, answer):
    if n == 1:
        answer.append([start, end])
    else:
        move(n - 1, start, point, end, answer)
        answer.append([start, end])
        move(n - 1, point, end, start, answer)
