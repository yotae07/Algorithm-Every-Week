# 병수님

-   문제1(x)

1. [유효한 팰린드롬]
   앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
   문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력하는 프로그램을 작성하세요.
   단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다. 알파벳 이외의 문자들의 무시합니다.
   ▣ 입력설명
   첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.
   ▣ 출력설명
   첫 번째 줄에 팰린드롬인지의 결과를 YES 또는 NO로 출력합니다.
   ▣ 입력예제 1
   found7, time: study; Yduts; emit, 7Dnuof
   ▣ 출력예제 1 YES

````

- 접근 방법
```text
놓친 포인트
 1. 알파벳 이외의 것들은 제외 시키는 방법을 알지 못했다. regex를 써야되나 고민했지만 사용하지 않음.
 2. reverse라는 메소드를 이용하면 배열의 엘리먼트의 순서를 뒤짚을 수 있다.

````

-   문제2(o)

2. [숫자만 추출]
   문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만 듭니다.
   만약 “tge0a1h205er”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205 이 됩니다.
   추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.
   ▣ 입력설명
   첫 줄에 숫자가 썩인 문자열이 주어집니다. 문자열의 길이는 50을 넘지 않습니다.
   ▣ 출력설명
   첫 줄에 자연수를 출력합니다.
   ▣ 입력예제 1 g0en2T0s8eSoft
   ▣ 출력예제 1 208

````

- 접근 방법
```text
 포인트
 1. isNaN()메소드를 활용해 숫자인 것들만 골라 낸다.

 리뷰
 1. string은 그자체로 loop를 돌릴 수 있기 때문에 굳이 split('')을 사용해 배열에 할당할 필요가 없었다.answer라는 빈 스트링을 놓고 붙이는 형태가 더 적절햇다.
````

# 호근님

-   문제 주소
    -   [내적 구하기](https://programmers.co.kr/learn/courses/30/lessons/70128?language=javascript)
-   접근 방법

```
너무 쉬움...
reduce 함수 이용
```

# 태성님

-   문제 주소
    -   []()
-   접근 방법

```text

```

# 민호님

-   문제 주소
    -   [백준 - 2212번](https://www.acmicpc.net/problem/2212)
    -   [백준 - 1085번](https://www.acmicpc.net/problem/1085)
    -   [백준 - 3052번](https://www.acmicpc.net/problem/3052)
    -   [백준 - 8958번](https://www.acmicpc.net/problem/8958)
    -   [백준 - 10818번](https://www.acmicpc.net/problem/10818)
    -   [백준 - 10871번](https://www.acmicpc.net/problem/10871)
    -   [백준 - 10951번](https://www.acmicpc.net/problem/10951)
    -   [백준 - 10952번](https://www.acmicpc.net/problem/10952)
-   접근 방법

```text

```