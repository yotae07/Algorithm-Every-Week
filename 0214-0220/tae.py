def solution(arr):
    num1 = arr.pop()
    while arr:
        num2 = arr.pop()
        for i in range(max(num1, num2), num1 * num2 + 1):
            if i % num1 == 0 and i % num2 == 0:
                num1 = i

            break

    return num1

def solution(s):
    answer = []
    for word in s.split(' '):
        if word != '' and word[0].isalpha():
            word = word[0].upper() + word[1:].lower()
        else:
            word = word.lower()

        answer.append(word)

    return ' '.join(answer)
