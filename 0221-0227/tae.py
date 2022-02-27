from itertools import permutations


def solution(k, dungeons):
    answer = 0
    for case in permutations(dungeons, len(dungeons)):
        tired = k
        count = 0
        for j in case:
            if tired < j[0]:
                continue

            tired -= j[1]
            count += 1

        answer = max(answer, count)

    return answer

