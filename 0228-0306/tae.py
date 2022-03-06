from collections import deque


def solution(cacheSize, cities):
    if cacheSize == 0:
        return len(cities) * 5

    answer = 0
    cache = deque()
    for c in cities:
        c = c.lower()
        if c not in cache:
            if len(cache) >= cacheSize:
                cache.popleft()

            cache.append(c)
            answer += 5
        else:
            cache.remove(c)
            cache.append(c)
            answer += 1

    return answer

