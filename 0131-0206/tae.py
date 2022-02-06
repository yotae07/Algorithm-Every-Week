def solution(record):
    answer = []
    uid_dict = dict()
    answer_dict = {
        'Enter': '님이 들어왔습니다.',
        'Leave': '님이 나갔습니다.',
    }
    for i in record:
        if i[:5] != 'Leave':
        a, b, c = i.split(' ')
        uid_dict[b] = c

    for i in record:
        if i[:5] == 'Enter':
        a, b, c = i.split(' ')
        answer.append(uid_dict[b] + answer_dict[a])
        if i[:5] == 'Leave':
            a, b = i.split(' ')
            answer.append(uid_dict[b] + answer_dict[a])

    return answer

