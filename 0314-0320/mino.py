# 백준 - 2212
_, k, n, result = input(), int(input()), list(map(int, input().split(' '))), []
n.sort(), n.reverse()
temp = n[0]
for i in n[1:]:
    result.append(temp - i)
    temp = i
result.sort(), result.reverse()
print(sum(result[k-1:]))


# 백준 - 1085
x, y, w, h = map(int, input().split(' '))
print(min((x - 0), (w - x), (y - 0), (h - y)))


# 백준 - 3052
result = []
for _ in range(10):
    result.append(int(input()) % 42)
print(len(set(result)))


# 백준 - 8958
result = []
for _ in range(int(input())):
    temp = 0
    for ox in input().split('X'):
        temp = temp + sum(n for n in range(1, ox.count('O')+1)) if ox.count('O') != 0 else temp
    result.append(temp)

for r in result:
    print(r)


# 백준 - 10818
_, nums = input(), tuple(map(int, input().split(' ')))
print(min(nums), max(nums))


# 백준 - 10871
x = int(input().split(' ')[1])
nums = tuple(map(int, input().split(' ')))
result = ''
for n in nums:
    result = result + f" {n}" if n < x else result
print(result[1:])


# 백준 - 10951
import sys
result = ''
while True:
    try:
        result += f"{sum(map(int, sys.stdin.readline().split(' ')))}\n"
    except ValueError:
        break
print(result.rstrip())


# 백준 - 10952
result = ''
while True:
    a = input()
    if a == '0 0':
        break
    result += f"{sum(map(int, a.split(' ')))}\n"
print(result.rstrip())
