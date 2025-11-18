# Push to GitHub - 자동 커밋 및 푸시

변경된 코드를 자동으로 감지하고, 사용자의 커밋 메시지로 커밋하고 GitHub에 푸시합니다.

---

## 🤖 **실행 절차 (순서대로 실행하세요)**

### Step 1: 현재 Git 상태 확인
```bash
git status --porcelain
```

**판단:**
- 변경사항이 없으면: "No changes to commit" 메시지 출력 후 중단
- 변경사항이 있으면: Step 2로 진행

### Step 2: 사용자에게 커밋 메시지 입력 요청
AskUserQuestion 도구를 사용하여 사용자에게 다음을 물어보세요:

**질문:**
```
"커밋 메시지를 입력하세요"
Header: "Git Commit"
```

**설명:** Conventional Commits 형식 권장 (예: "feat: 새 기능 추가", "fix: 버그 수정")

사용자 입력을 `commitMessage` 변수에 저장

### Step 3: 모든 변경사항 스테이징
```bash
git add -A
```

### Step 4: 커밋 생성
```bash
git commit -m "[사용자 입력 메시지]"
```

출력에서 커밋 해시 추출 (예: `[main a1b2c3d]` 형식에서 `a1b2c3d`)

### Step 5: GitHub에 푸시
```bash
git push origin main
```

### Step 6: 결과 보고

**성공한 경우:**
```
✅ 푸시 성공!
🔗 GitHub 커밋: https://github.com/kwonheekim/portfolio-site/commit/{커밋해시}
✨ 완료! GitHub에서 확인할 수 있습니다.
```

**실패한 경우:**
```
❌ 푸시 실패
오류: [오류 메시지]
→ 해결 방법 제시
```

---

## 📝 **커밋 메시지 예시**

| 타입 | 예시 |
|------|------|
| **feat** | `feat: Hero 섹션 애니메이션 개선` |
| **fix** | `fix: Contact 폼 검증 오류 해결` |
| **refactor** | `refactor: Emotion CSS-in-JS 전환` |
| **style** | `style: 컴포넌트 스타일 정렬` |
| **docs** | `docs: README 업데이트` |
| **chore** | `chore: 의존성 업데이트` |

---

## ✨ **요약**

이 커맨드는:
1. ✅ 변경사항 자동 감지
2. ✅ 사용자에게 커밋 메시지 입력 요청
3. ✅ 모든 변경사항 자동 스테이징
4. ✅ GitHub에 자동 푸시
5. ✅ 결과 보고

한 번의 명령어로 완전한 git 워크플로우 완성!
