from collections import defaultdict


def solution(id_list, report, k):
    answer = dict()
    result = defaultdict(set)
    for name in report:
        send, take = name.split(' ')
        result[take].add(send)

    filter_result = set(filter(lambda key: len(result[key]) >= k, result))
    for id_ in id_list:
        answer[id_] = 0

    for id_ in id_list:
        if id_ not in filter_result:
            continue

        for name in result[id_]:
            answer[name] += 1

return list(answer.values())


def solution(n):
    return min(filter(lambda x: n % x == 1, range(1, n)))

