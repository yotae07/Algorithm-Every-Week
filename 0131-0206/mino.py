people, result, expect, remain = int(input()), 0, [], []
rank = list(range(1, people+1))
for _ in range(people):
    expect.append(int(input()))

for e in expect:
    rank.remove(e) if e in rank else remain.append(e)

remain.sort()

for index, element in enumerate(remain):
    result += abs(rank[index] - element)

print(result)
