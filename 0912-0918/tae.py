import math

from datetime import datetime


def solution(fees, records):
    answer: list = []
    default_time, default_fee, block_time, block_fee = fees
    parking_history: dict = dict()
    fee_table: list = list()
    for record in records:
        time, number, direct = record.split()
        if number not in parking_history:
            parking_history[number] = list()

        if parking_history[number] and parking_history[number][-1][-1] == 'IN' and direct == 'IN':
            parking_history[number].append(('23:59', 'OUT'))

        parking_history[number].append((time, direct))

    for number in parking_history:
        if parking_history[number] and parking_history[number][-1][-1] == 'IN':
            parking_history[number].append(('23:59', 'OUT'))

    for number in parking_history:
        use_time: int = 0
        IN, OUT = '', ''
        for time, direct in parking_history[number]:
            if direct == 'IN':
                IN = time
            else:
                OUT = time

            if IN and OUT:
                use_time += int((datetime.strptime(OUT, '%H:%M') - datetime.strptime(IN, '%H:%M')).total_seconds() / 60)
                IN, OUT = '', ''

        fee_table.append((number, use_time))

    for number, use_time in fee_table:
        if default_time < use_time:
            answer.append((number, default_fee + (math.ceil((use_time - default_time) / block_time) * block_fee)))
        else:
            answer.append((number, default_fee))

    return [use_fee for _, use_fee in sorted(answer, key=lambda x: x[0])]
