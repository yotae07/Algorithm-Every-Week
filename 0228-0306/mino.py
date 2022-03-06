# 1000
a, b = list(map(int, input().split(' ')))
print(a + b)

# 1001
a, b = tuple(map(int, input().split(' ')))
print(a - b)

# 1008
print((lambda x:int(x[0])/int(x[2]))(input()))

# 1152
word = input().strip()
print(0 if word == '' else len(word.split(' ')))

# 1157
word = input().upper()
word_tuple, result = tuple(set(word)), list()
for ws in word_tuple:
    result.append(word.count(ws))

print(word_tuple[result.index(max(result))] if result.count(max(result)) == 1 else '?')

# 1330
a, b = tuple(map(int, input().split(' ')))
print('==' if a == b else ('>' if max(a, b) == a else '<'))

# 1543
word, search = input(), input()
print(word.replace(search, '#').count('#'))

# 1546
subjects, scores = int(input()), tuple(map(int, input().split(' ')))
print(sum(scores) / subjects / max(scores) * 100)

# 2438
num = int(input())
for i in range(num):
    print('*' * (i+1))

# 2439
num = int(input())
for i in range(1, num+1):
    print(' ' * (num-i) + '*' * i)

# 2475
code = tuple(map(int, input().split(' ')))
print(str(sum([c ** 2 for c in code]))[-1])

# 2557
print("Hello World!")
