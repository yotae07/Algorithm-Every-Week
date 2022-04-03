def solution(p):
    if p == '':
        return p

    count = 0
    index = 0
    for idx, s in enumerate(list(p)):
        if s == '(':
            count -= 1
        else:
            count += 1

        if count == 0:
            index = idx
            break
    else:
        index = len(p) - 1

    if check_string(p[:index + 1]):
        return p[:index + 1] + solution(p[index + 1:])
    else:
        return '(' + solution(p[index + 1:]) + ')' + invert_string(p[:index + 1][1:-1])

def check_string(string):
    c_string = []
    for s in string:
        if c_string and s == ')' and c_string[-1] == '(':
            c_string.pop()
        else:
            c_string.append(s)

    if c_string:
        return False

    return True

def invert_string(string):
    i_string = []
    for s in string:
        if s == '(':
            i_string.append(')')
        else:
            i_string.append('(')

    return ''.join(i_string)

