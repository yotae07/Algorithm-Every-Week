def common_str(str1: str, str2: str) -> int:
    if len(str1) > len(str2):
        str1, str2 = str2, str1

    result = 0
    dp = [[0 for _ in range(min(len(str1), len(str2)) + 1)]
            for _ in range(max(len(str1), len(str2)) + 1)]
    for s1 in range(len(str2)):
        for s2 in range(len(str1)):
            if str2[s1] == str1[s2]:
                if (s1 - 1) >= 0 and (s2 - 1) >= 0:
                    dp[s1][s2] = dp[s1 - 1][s2 - 1] + 1
                else:
                    dp[s1][s2] = 1

            result = max(dp[s1][s2], result)

    return result
