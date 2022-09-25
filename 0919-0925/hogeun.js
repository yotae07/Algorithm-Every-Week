// 성격유형검사하기
function solution(survey, choices) {
  const scores = [3, 2, 1, 0, 1, 2, 3];
  const questions = ["RT", "CF", "JM", "AN"];

  return survey
    .reduce(
      (acc, cur, idx) => {
        const [a, b] = cur.split("");
        const choice = choices[idx];
        const score = scores[choice - 1];
        const questionIndex = questions.findIndex(
          (q) => q.includes(a) && q.includes(b)
        );

        if (questionIndex === -1 || choice === 4) {
          return acc;
        }

        acc[questionIndex][choice < 4 ? a : b] += score;

        return acc;
      },
      [
        { R: 0, T: 0 },
        { C: 0, F: 0 },
        { J: 0, M: 0 },
        { A: 0, N: 0 },
      ]
    )
    .map((x) => {
      const [[answerA, scoreA], [answerB, scoreB]] = Object.entries(x);
      return scoreA >= scoreB ? answerA : answerB;
    })
    .join("");
}

//최댓값과 최솟값
function solution(s) {
  const arr = s.split(" ").sort((a, b) => Number(a) - Number(b));
  return `${arr.shift()} ${arr.pop()}`;
}
