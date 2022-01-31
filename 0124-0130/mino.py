def solution(id_list, report, k):
    id_dict = {id: {'reporting': [], 'reported': 0, 'result': 0} for id in id_list}
    report = set(report)

    for r in report:
        reporting, reporter = map(str, r.split(' '))
        id_dict[reporting]['reporting'].append(reporter)
        id_dict[reporter]['reported'] += 1

    for user in id_dict.values():
        my_reporting = user['reporting']
        if not my_reporting:
            continue

        for reported_user in my_reporting:
            if id_dict[reported_user]['reported'] >= k:
                user['result'] += 1

    return [user['result'] for user in id_dict.values()]
