# 2739
n = int(input())
for i in range(1, 10):
    print(f"{n} * {i} = {n * i}")

# 2741
for i in range(1, int(input()) + 1):
    print(i)

# 2742
for i in range(int(input()), 0, -1):
    print(i)

# 2908
a, b = map(str, input().split(' '))
print(max(int(a[::-1]), int(b[::-1])))
