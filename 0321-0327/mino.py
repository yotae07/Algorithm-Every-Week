# 백준 - 1032
result = ''
for _ in range(int(input())):
    word = input()
    if result == '':
        result = word

    temp = ''
    for i, w in enumerate(word):
        temp += '?' if w != result[i] else w
    result = temp

print(result)

# 백준 - 1076
colors = {
    "black": (0, 1),
    "brown": (1, 10),
    "red": (2, 100),
    "orange": (3, 1000),
    "yellow": (4, 10000),
    "green": (5, 100000),
    "blue": (6, 1000000),
    "violet": (7, 10000000),
    "grey": (8, 100000000),
    "white": (9, 1000000000)
}
a, b, c = input(), input(), input()
print(int(str(colors[a][0]) + str(colors[b][0])) * colors[c][1])

# 백준 - 1181
result = set()
for _ in range(int(input())):
    result.add(input())

result = list(result)
result.sort(), result.sort(key=len)
for r in result:
    print(r)

# 백준 - 1259
result = ''
while True:
    num = input()
    if num == '0':
        break
    result += 'yes\n' if num == num[::-1] else 'no\n'
print(result.rstrip())

# 백준 - 1459
x, y, w, s = map(int, input().split(' '))
if x == y:
    print(min(x*s, x * 2*w))
else:
    if y > x:
        temp = x
        x = y
        y = temp
    gap = x-y
    print(min(s*y, 2*w*y) + (w + (gap-1) * min(w, s)) if gap%2 == 1 else min(s*y, 2*w*y) + (gap * min(w, s)))

# 백준 - 2869
a, b, v = map(int, input().split(' '))
temp = (v-a) // (a-b)
print(temp + 2 if temp == 0 else temp + 1)

# 백준 - 10162

# 풀이 - 1
buttons, result, t = (300, 60, 10), '', int(input())
if t % 10 != 0:
    print(-1)
else:
    for button in buttons:
        result += f"{t // button} "
        t %= button
    print(result.rstrip())


# 풀이 - 2
t = int(input())
if t % 10 != 0:
    print(-1)
else:
    a = t // 300
    b = t % 300 // 60
    c = t % 60 // 10
    print(a, b, c)

# 백준 - 10926
print(input() + '??!')

# 백준 - 11021
result = ''
for i in range(1, int(input()) + 1):
    result += f"Case #{i}: {sum(map(int, input().split(' ')))}\n"
print(result.rstrip())
