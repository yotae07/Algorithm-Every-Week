function solution(lottos, win_nums) {
  const maxAnswers = lottos.filter(
    (num) => win_nums.includes(num) || num === 0
  ).length;
  const minAnswers = lottos.filter((num) => win_nums.includes(num)).length;

  return [7 - (maxAnswers || 1), 7 - (minAnswers || 1)];
}
