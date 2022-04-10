# 백준 - 1427
print("".join(sorted([x for x in input()], reverse=True)))
n = list(input())
n.sort(reverse=True)
print("".join(n))



# 백준 - 1439
s = input()
temp, result = s[0], list(s[0])
for i in s[1:]:
    if i != temp:
        temp = i
        result.append(i)

print(min(result.count('0'), result.count('1')))



# 백준 - 2750
from sys import stdin
L = [int(stdin.readline()) for _ in range(int(input()))]
[print(i) for i in sorted(L)]



# 백준 - 10814
from sys import stdin, stdout
users = sorted([tuple(map(str, stdin.readline().split())) for _ in range(int(input()))], key=lambda x: int(x[0]))
for user in users:
    stdout.write(f"{user[0]} {user[1]}\n")



# 백준 - 10828
from sys import stdin
answer = []
for _ in range(int(input())):
    cmd = stdin.readline().split()
    if cmd[0] == 'push': answer.append(cmd[1])
    else:
        if cmd[0] == 'pop': print(-1 if len(answer) == 0 else answer.pop())
        elif cmd[0] == 'size': print(len(answer))
        elif cmd[0] == 'empty': print(1 if len(answer) == 0 else 0)
        elif cmd[0] == 'top': print(-1 if len(answer) == 0 else answer[-1])



# 백준 - 10989
from sys import stdin
result = [0] * 100001
for _ in range(int(input())):
    temp = int(stdin.readline())
    result[temp] += 1

for i in range(10001):
    if result[i] != 0:
        for j in range(result[i]):
            print(i)



# 백준 - 14916
n = int(input())
if n == 1 or n == 3:
    print(-1)
else:
    answer, is_odd = 0, n % 2
    if is_odd:
        n -= 5
    answer += 2 * (n // 10)
    n %= 10
    answer += n // 2
    print(answer + 1 if is_odd else answer)