# 백준 - 1026
n = input()
list1, list2 = sorted(list(map(int, input().split()))), sorted(list(map(int, input().split())), reverse=True)
print(sum(map(lambda a, b: a * b, list1, list2)))



# 백준 - 1715
from sys import stdin
from heapq import heapify, heappush, heappop

get_text = stdin.readline
heap = [int(get_text()) for _ in range(int(input()))]
heapify(heap)

result = 0
while len(heap) > 1:
    temp = heappop(heap) + heappop(heap)
    result += temp
    heappush(heap, temp)
print(result)



# 백준 - 1931
from sys import stdin
time_tables = [tuple(map(int, stdin.readline().split())) for _ in range(int(input()))]
time_tables.sort(key=lambda x: (x[1], x[0]))

count, last_finish_time = 0, 0
for s, f in time_tables:
    if s >= last_finish_time:
        last_finish_time = f
        count += 1

print(count)



# 백준 - 11022
from sys import stdin
cases = [tuple(map(int, stdin.readline().split())) for _ in range(int(input()))]
for index, case in enumerate(cases):
    print(f"Case #{index+1}: {case[0]} + {case[1]} = {case[0] + case[1]}")



# 백준 - 11047
coins, result = [], 0
n, k = map(int, input().split(' '))

for _ in range(n):
    coins.append(int(input()))
coins.sort(reverse=True)

for coin in coins:
    result += k // coin
    k %= coin

print(result)



# 백준 - 11399
result = [0]
n = int(input())
p_list = list(map(int, input().split(' ')))
p_list.sort()

for p in p_list:
    result.append(result[-1] + p)

print(sum(result))



# 백준 - 15552
from sys import stdin
for _ in range(int(input())):
    print(sum(map(int, stdin.readline().split())))
