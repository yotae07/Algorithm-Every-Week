def solution(n, left, right):
    left, right = int(left), int(right)
    answer = []
    start = left // n
    end = right // n
    start_num = left % n
    end_num = right % n
    for i in range(start + 1, end + 2):
        second = 1
        if i == start + 1:
            second += start_num

        for j in range(second, n + 1):
            if i == end + 1 and j == end_num + 2:
                break

            if j < i:
                answer.append(i)
            else:
                answer.append(j)

    return answer

