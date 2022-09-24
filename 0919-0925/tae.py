from dataclasses import dataclass
from datetime import datetime


@dataclass
class MusicInfo:
    id: int
    title: str
    meta_info: str
    play_time: int
    play_info: str


def solution(m, musicinfos):
    play_list = []
    m = trans_hash(m)
    for idx, musicinfo in enumerate(musicinfos):
        start, end, title, info = musicinfo.split(',')
        info = trans_hash(info)
        play_time = get_play_time(start, end)
        total_info = get_play_info(info, play_time)
        play_list.append(MusicInfo(id=idx, title=title, meta_info=info, play_time=play_time, play_info=total_info))

    in_play_info = [i for i in play_list if m in i.play_info]
    return sorted(in_play_info, key=lambda x: (x.play_time, -x.id))[-1].title if in_play_info else "(None)"


def trans_hash(string):
    if 'A#' in string:
        string = string.replace('A#', 'a')
    if 'C#' in string:
        string = string.replace('C#', 'c')
    if 'D#' in string:
        string = string.replace('D#', 'd')
    if 'F#' in string:
        string = string.replace('F#', 'f')
    if 'G#' in string:
        string = string.replace('G#', 'g')

    return string


def get_play_time(start, end):
    return int((datetime.strptime(end, "%H:%M") - datetime.strptime(start, "%H:%M")).total_seconds() // 60)


def get_play_info(info, play_time):
    if play_time % len(info) == 0:
        total_info = ''.join([info for _ in range(play_time // len(info) + 1)])
    elif play_time % len(info) == play_time:
        total_info = info[:play_time]
    else:
        total_info = ''.join([info for _ in range(play_time // len(info) + 1)]) + info[:play_time - len(info)]

    return total_info
