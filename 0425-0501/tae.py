def solution(numbers):
    answer = []
    for num in numbers:
        binary = format(num, 'b')
        if '0' not in binary:
            target_num = num + (2 ** (len(binary) - 1))
        elif binary[-2:] == '11':
            idx = binary[::-1].find('0') + 1
            target_num = int(f'0b{binary[:-idx]}10{binary[-idx + 2:]}', 2)
        else:
            target_num = num + 1

        answer.append(target_num)

    return answer

