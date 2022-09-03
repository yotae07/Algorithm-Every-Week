from collections import deque


def solution(s):
    answer = 0
    deque_string = deque(s)
    for _ in range(len(s)):
        if check_bracket(deque_string):
            answer += 1

        deque_string.rotate(-1)

    return answer if answer else 0


def check_bracket(string):
    stack = []
    bracket_dict = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    for s in string:
        try:
            if bracket_dict[stack[-1]] == s:
                stack.pop()
            else:
                stack.append(s)
        except (KeyError, IndexError):
            stack.append(s)

    return not bool(stack)
