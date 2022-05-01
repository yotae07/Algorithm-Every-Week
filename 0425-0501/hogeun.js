function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .replace(
      /\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\=|\+|\[|\{|\]|\}|\:|\?|,|<|>|\//g,
      ""
    )
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "");

  if (answer === "") {
    answer = "a";
  }
  if (answer.length >= 16) {
    answer = answer.slice(0, 15);
  }
  if (answer.length <= 2) {
    while (answer.length < 3) {
      answer += answer[answer.length - 1];
    }
  }

  return answer.replace(/\.$/g, "");
}

// 다른 사람 풀이
function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, "") // 2
    .replace(/\.+/g, ".") // 3
    .replace(/^\.|\.$/g, "") // 4
    .replace(/^$/, "a") // 5
    .slice(0, 15)
    .replace(/\.$/, ""); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
