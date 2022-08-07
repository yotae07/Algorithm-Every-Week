# 15802번
print(1)

# 1205번
n, tae, p = map(int, input().split(' '))
if n == 0:
    print(1)
    exit()

points, count = list(map(int, input().split(' '))), 0
points += [-1 for _ in range(p - len(points))]

if points[-1] >= tae:
    print(-1)
    exit()

count = 0
for point in points:
    if tae < point: count += 1
    else:
        print(count + 1)
        exit()
