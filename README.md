## 초기 세팅
1. 내 개인 Repo에 Fork 뜨기
2. 원래 Repo가 아닌, Fork 된 Repo를 Local에 Clone
3. Clone 된 Repo에서, `git remote -v` 을 입력하면 `origin` 이라는 이름으로 Fork 된 나의 Repo 경로만 있을 것이다.
4. `git remote add upstream {실제 Repo URL}` 을 이용하여 `upstream` 이라는 이름으로 원래의 Repo 경로를 추가해준다.

## 작업 전,Repo와 최신화
1. `git fetch upstream` 명령어로 현재 내 Local Repo에 실제 Repo의 커밋 이력들을 최신화 한다.
2. 최산화 했다면, `git merge upstream/main` 라는 명령어를 이용하여, upstream의 main 브랜치를 현재 내 Local Repo에 Merge 시킨다.
3. Local 도 최신화 되었다면, Fork 된 Repo에도 적용을 해주기 위해 `git push origin main`을 이용하여 내 Forked Repo에도 최신화를 해준다.

## PR 날리기
1. Local의 main 브랜치가 아닌, 브랜치를 하나 파서 작업(일단 컨벤션 필요X)
2. 문제 풀고, 양식에 맞게 코드 파일 및 README.md 수정 후 add > commit
3. `git push origin {내가 만든 브랜치 명}`으로 내 Forked Repo에 PR을 날려줌.
4. 그러면 신기하게도 실제 Repo에 함께 PR이 날라옴.
5. 정리하자면, Local에서 작업 후 Forked Repo(origin)에 PR을 날리면 Fork & 실제 Repo(upstream)에 PR이 날라옴.
6. Self Merge ㄱㅊㄱㅊ