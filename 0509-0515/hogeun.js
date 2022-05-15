function solution(id_list, report, k) {
  const t = report.reduce((acc, cur) => {
    const [user_id, report_id] = cur.split(" ");

    if (!(acc[report_id] || []).includes(user_id)) {
      acc[report_id] = [...(acc[report_id] || []), user_id];
    }

    return acc;
  }, {});

  const receptionUsers = Object.keys(t)
    .filter((x) => t[x].length >= k)
    .map((x) => t[x])
    .flat();

  return id_list.map((user) => receptionUsers.filter((x) => x === user).length);
}
