function solution(record) {
  const uidToNickname = record.reduce((acc, cur) => {
    const [action, uid, nickname] = cur.split(" ");

    if (nickname) {
      acc[uid] = nickname;
    }

    return acc;
  }, {});

  return record
    .filter((x) => ["Enter", "Leave"].includes(x.split(" ").shift()))
    .map((x) => {
      const [action, uid, nickname] = x.split(" ");

      const actionToText = {
        Enter: `${uidToNickname[uid]}님이 들어왔습니다.`,
        Leave: `${uidToNickname[uid]}님이 나갔습니다.`,
      };

      return actionToText[action];
    });
}
