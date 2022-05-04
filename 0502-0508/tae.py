import itertools


def solution(line):
    answer = []
    point = set()
    for i in range(len(line) - 1):
        for j in range(i + 1, len(line)):
            x, y = find_point(line[i], line[j])
            if x is False and y is False:
                continue

            point.add((x, y))

    y_max = max(point, key= lambda x: x[1])[1]
    y_min = min(point, key= lambda x: x[1])[1]
    x_max = max(point, key= lambda x: x[0])[0]
    x_min = min(point, key= lambda x: x[0])[0]
    height = max(point, key= lambda x: x[1])[1] - min(point, key= lambda x: x[1])[1] + 1
    width = max(point, key= lambda x: x[0])[0] - min(point, key= lambda x: x[0])[0] + 1
    arr = [['.' for _ in range(width)] for _ in range(height)]
    for x, y in point:
        nx = x + abs(x_min) if x_min < 0 else x - x_min
        ny = y + abs(y_min) if y_min < 0 else y - y_min
        arr[ny][nx] = '*'

    for i in range(len(arr)-1,-1,-1):
        answer.append(''.join(arr[i]))

    return list(itertools.chain(answer))

def find_point(f, s):
    if (f[0] * s[1]) - (f[1] * s[0]) == 0:
        return False, False

    if ((f[1] * s[2]) - (f[2] * s[1])) % ((f[0] * s[1]) - (f[1] * s[0])) or ((f[2] * s[0]) - (f[0] * s[2])) % ((f[0] * s[1]) - (f[1] * s[0])):
        return False, False

    return ((f[1] * s[2]) - (f[2] * s[1])) // ((f[0] * s[1]) - (f[1] * s[0])), ((f[2] * s[0]) - (f[0] * s[2])) // ((f[0] * s[1]) - (f[1] * s[0]))

