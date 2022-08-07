def solution(progresses, speeds):
    answer = []
    for idx, progress in enumerate(progresses):
        remain = 100 - progresses[idx]
        t = 0 if (remain == 0) else remain // speeds[idx]
        answer.append(t if (remain / speeds[idx] == t) else t + 1)

    start, temp, result = 0, 100, []
    for a in answer:
        if (temp >= a):
            temp = a
            start += 1
        else:
            result.append(start)
            start = 1
    result.append(start)
    return result