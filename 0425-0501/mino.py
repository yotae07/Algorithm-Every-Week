def solution(numbers):
    answer = []
    for num in numbers:
        b = bin(num)[2:]

        if b[-2:] == '00' or b[-2:] == '0':
            answer.append(int(f"0b{b[:-2]}01", 2))

        elif '0' not in b:
            answer.append(int(f"0b10{b[1:]}", 2))

        else:
            temp = b[::-1]
            if temp.find('01') < temp.find('10') or temp.find('10') == -1:
                answer.append(int(f"0b{temp.replace('01', '11', 1)[::-1]}", 2))
            else:
                answer.append(int(f"0b{temp.replace('10', '01', 1)[::-1]}", 2))

    return answer
