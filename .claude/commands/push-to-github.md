# Push to GitHub - 자동 커밋 및 원격 푸시

변경된 코드를 자동으로 커밋하고 GitHub에 푸시합니다.
**git add, git commit, git push를 한 번에 자동으로 처리**하는 스마트 커맨드입니다.

---

## 🤖 **자동 실행 프롬프트**

```
git 상태를 확인하고, 변경된 파일들을 자동으로 커밋 및 GitHub에 푸시합니다.

다음 단계를 자동으로 수행하세요:

1. git status를 실행하여 변경사항 확인
2. 변경사항이 있으면 git add -A를 실행
3. 변경사항의 유형에 따라 적절한 커밋 메시지 생성
   - 기능 추가: "feat: ..."
   - 버그 수정: "fix: ..."
   - 리팩토링: "refactor: ..."
   - 스타일: "style: ..."
   - 문서: "docs: ..."
   - 기타: "chore: ..."
4. git commit -m "..." 으로 커밋
5. git push origin main 으로 GitHub에 푸시
6. 결과를 사용자에게 보고

변경사항이 없으면 "No changes to commit" 메시지 출력
```

---

## 🚀 **실행 흐름**

```
/push-to-github
    ↓
[1️⃣ 변경사항 감지]
    ↓
git status 확인
    ↓
[2️⃣ 변경사항 스테이징]
    ↓
git add -A (모든 변경사항 추가)
    ↓
[3️⃣ 커밋 메시지 생성 및 커밋]
    ↓
git commit -m "..." (상세한 커밋 메시지)
    ↓
[4️⃣ GitHub에 푸시]
    ↓
git push origin main
    ↓
✅ 푸시 완료 및 결과 보고
```

---

## 💡 **기본 사용법**

### 명령어 실행

```bash
/push-to-github
```

VS Code Command Palette에서:
- `Cmd+Shift+P` (Mac) 또는 `Ctrl+Shift+P` (Windows)
- "push-to-github" 검색
- Enter 클릭

---

## 📋 **커밋 메시지 자동 생성**

이 커맨드는 다음과 같은 정보를 바탕으로 **자동으로 적절한 커밋 메시지를 생성**합니다:

### 커밋 메시지 형식

```
[타입]: 한글 제목

- 변경사항 1
- 변경사항 2
- 변경사항 3

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>
```

### 타입 종류

| 타입 | 설명 | 예시 |
|------|------|------|
| **feat** | 새로운 기능 | `feat: 다크 모드 기능 추가` |
| **fix** | 버그 수정 | `fix: Hero 섹션 애니메이션 오류 해결` |
| **refactor** | 코드 리팩토링 | `refactor: FSD 아키텍처로 마이그레이션` |
| **style** | 스타일 변경 | `style: Tailwind 클래스 정렬` |
| **docs** | 문서 업데이트 | `docs: README 업데이트` |
| **chore** | 기타 작업 | `chore: 의존성 업데이트` |

### 예시

```bash
# 새 기능 추가 후
/push-to-github
→ feat: 포트폴리오 필터링 기능 추가

# 버그 수정 후
/push-to-github
→ fix: Contact 폼 제출 오류 해결

# 리팩토링 후
/push-to-github
→ refactor: 컴포넌트 구조 최적화
```

---

## 🔄 **실행 절차**

### 단계 1: 변경사항 확인

```bash
git status
```

다음과 같은 변경사항을 자동으로 감지합니다:
- ✏️ 수정된 파일 (Modified)
- ➕ 새로운 파일 (Untracked)
- 🗑️ 삭제된 파일 (Deleted)
- 📝 renamed 파일

### 단계 2: 변경사항 추가

```bash
git add -A
```

모든 변경사항을 staging area에 추가합니다.

### 단계 3: 커밋

```bash
git commit -m "..."
```

상세한 커밋 메시지와 함께 커밋합니다.

### 단계 4: 푸시

```bash
git push origin main
```

GitHub의 main 브랜치에 푸시합니다.

---

## 📊 **실행 흐름 다이어그램**

```
┌──────────────────────────────┐
│  /push-to-github 명령어 실행   │
└────────────┬─────────────────┘
             │
        ┌────▼─────────┐
        │ git status   │
        │변경사항 확인  │
        └────┬─────────┘
             │
        변경사항 있음?
        ├─ YES → ✅ 계속
        └─ NO  → ❌ 변경사항 없음 (종료)
             │
        ┌────▼──────────────┐
        │ git add -A        │
        │모든 변경사항 추가  │
        └────┬──────────────┘
             │
        ┌────▼──────────────────┐
        │ git commit -m "..."   │
        │ 커밋 메시지로 커밋    │
        └────┬──────────────────┘
             │
        커밋 성공?
        ├─ YES → ✅ 계속
        └─ NO  → ❌ 오류 보고 (종료)
             │
        ┌────▼─────────────────┐
        │ git push origin main  │
        │ GitHub에 푸시         │
        └────┬─────────────────┘
             │
        푸시 성공?
        ├─ YES → ✅ 완료
        │         - 커밋 해시 표시
        │         - GitHub 링크 제시
        │         - 성공 메시지 출력
        └─ NO  → ❌ 오류 보고
                  - 오류 메시지
                  - 원인 분석
                  - 해결 방법 제시
```

---

## ⚙️ **주요 기능**

### ✅ 자동 변경사항 감지

```bash
# 다음을 자동으로 감지합니다:
git add -A
├─ 수정된 파일 추가
├─ 새로운 파일 추가
├─ 삭제된 파일 추가
└─ renamed 파일 추가
```

### ✅ 스마트 커밋 메시지

변경사항의 유형을 자동으로 분석하여 적절한 커밋 메시지 생성:

```bash
# 예시 1: 기능 추가
commit -m "feat: 다크 모드 토글 버튼 추가"

# 예시 2: 버그 수정
commit -m "fix: Header 스크롤 감지 오류 해결"

# 예시 3: 리팩토링
commit -m "refactor: FSD 아키텍처로 마이그레이션"
```

### ✅ 원격 저장소 푸시

```bash
git push origin main
```

현재 브랜치를 GitHub의 main 브랜치에 자동으로 푸시합니다.

### ✅ 오류 처리

푸시 실패 시 다음을 자동으로 처리합니다:

```bash
# 시나리오 1: 원격 저장소가 최신 상태가 아닌 경우
❌ rejected - Your branch is behind 'origin/main'
✅ 자동 해결: git pull → git push

# 시나리오 2: Merge conflict 있는 경우
❌ conflict detected
✅ 알림: 수동 resolve 필요

# 시나리오 3: 권한 문제
❌ Permission denied
✅ 알림: SSH 키 확인 필요
```

---

## 🎯 **사용 예시**

### 예시 1️⃣: 새 기능 추가 후 푸시

```bash
# 1. 새 기능 개발 (src/features/hero/ui/Hero.tsx 수정)
# ... 코드 작성 ...

# 2. /push-to-github 실행
/push-to-github

# 자동 실행:
# ✓ git status (변경사항 확인)
# ✓ git add -A (모든 파일 추가)
# ✓ git commit -m "feat: Hero 섹션 애니메이션 개선"
# ✓ git push origin main (GitHub에 푸시)

# 결과:
# ✅ 푸시 완료
# GitHub URL: https://github.com/kwonheekim/portfolio-site/commits/main
```

### 예시 2️⃣: 버그 수정 후 푸시

```bash
# 1. 버그 수정 (src/features/contact/ui/Contact.tsx 수정)
# ... 코드 수정 ...

# 2. /push-to-github 실행
/push-to-github

# 자동 실행:
# ✓ git status (변경사항 확인)
# ✓ git add -A (모든 파일 추가)
# ✓ git commit -m "fix: Contact 폼 검증 오류 해결"
# ✓ git push origin main (GitHub에 푸시)

# 결과:
# ✅ 푸시 완료
```

### 예시 3️⃣: 여러 파일 수정 후 푸시

```bash
# 1. 여러 파일 수정
# - src/features/projects/ui/Projects.tsx (수정)
# - src/shared/ui/card.tsx (수정)
# - src/entities/project/model/types.ts (새로 추가)

# 2. /push-to-github 실행
/push-to-github

# 자동 실행:
# ✓ git status (변경사항 확인)
#   - 수정: Projects.tsx
#   - 수정: card.tsx
#   - 새로 추가: types.ts
# ✓ git add -A (모든 파일 추가)
# ✓ git commit -m "refactor: 프로젝트 카드 컴포넌트 개선"
# ✓ git push origin main (GitHub에 푸시)

# 결과:
# ✅ 푸시 완료 (3개 파일 포함)
```

---

## 🔐 **안전 기능**

### 변경사항 검증

푸시 전에 다음을 자동으로 확인합니다:

```bash
✓ 커밋 메시지 유효성 검사
✓ 파일 변경 감지
✓ 브랜치 상태 확인
✓ 원격 저장소 연결 확인
```

### 오류 방지

```bash
# 변경사항 없음
❌ "No changes to commit" → 커밋 중단

# 빈 커밋 메시지
❌ "Empty commit message" → 재시도 요청

# 네트워크 연결 오류
❌ "Connection refused" → 재시도 옵션 제시
```

---

## 📱 **웹에서 확인**

푸시 완료 후 GitHub에서 확인할 수 있습니다:

```
https://github.com/kwonheekim/portfolio-site
├─ Commits 탭 → 최신 커밋 확인
├─ Pull Requests → 릴리스 준비
└─ Actions → CI/CD 상태 확인
```

---

## 🆚 **기존 방식 vs 스마트 방식**

### 기존 방식 (수동)
```bash
git status          # 변경사항 확인
git add -A          # 파일 추가
git commit -m "..." # 커밋
git push origin main # 푸시
# 4개의 명령어 필요
```

### 스마트 방식 (이 커맨드)
```bash
/push-to-github
# 1개의 명령어로 모든 것 자동 처리
```

---

## 💡 **팁**

### 커밋 메시지 관례

프로젝트의 일관성을 위해 다음을 따릅니다:

```bash
# ✅ Good
feat: 포트폴리오 필터링 기능 추가

# ✅ Good
fix: Hero 섹션 애니메이션 오류 해결

# ❌ Bad
just fixed stuff

# ❌ Bad
more changes
```

### 자주 푸시하기

```bash
# 작은 기능 단위로 자주 커밋 & 푸시
# → 히스토리 관리 용이
# → 문제 발생 시 롤백 간단
# → 팀 협업 효율 증가
```

---

## 📚 **관련 명령어**

```bash
# 프로젝트 시작 (빌드 + 검증 + 실행)
/project-start

# FSD 아키텍처 분석
/fsd-analyze

# GitHub에 푸시 (이 커맨드)
/push-to-github
```

---

## ✨ **요약**

**이 커맨드 하나로:**
- ✅ 변경사항 자동 감지
- ✅ 스마트 커밋 메시지 생성
- ✅ GitHub에 자동 푸시
- ✅ 오류 처리 및 피드백

**결과:** 명령어 한 번으로 완전한 git 워크플로우 완성!

---

**이제 `/push-to-github` 커맨드로 쉽게 GitHub에 푸시할 수 있습니다!** 🚀
