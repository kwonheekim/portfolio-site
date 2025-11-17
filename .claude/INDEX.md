# 📑 Claude Code 완벽 가이드 Index

이 프로젝트의 모든 Claude Code 자료를 한눈에 볼 수 있습니다.

---

## 🎯 빠른 네비게이션

### 지금 바로 시작하기
```
1. 📄 FSD_QUICK_START.md       ← 5분 안에 시작
2. 🛠️ /fsd-analyze             ← 현재 상태 확인
3. 📚 skills/fsd-analyzer.md   ← 완전히 배우기
```

### 명령어 찾기
```
분석:     /fsd-analyze
계획:     /fsd-migrate
생성:     /fsd-generate
검증:     /fsd-validate
수정:     /fsd-refactor
시작:     /project-start
```

---

## 📚 전체 문서 목록

### 🚀 시작 가이드 (3개)

| 파일 | 설명 | 읽기 시간 |
|------|------|---------|
| **FSD_QUICK_START.md** | 5분 안에 FSD 배우기 | 5분 |
| **FSD_SETUP_COMPLETE.md** | 설정 완료 확인 | 3분 |
| **FSD_RESOURCES.md** | 모든 리소스 맵 | 10분 |

### 🛠️ 명령어 가이드 (5개)

| 명령어 | 파일 | 기능 | 사용 시기 |
|--------|------|------|---------|
| `/fsd-analyze` | commands/fsd-analyze.md | 현재 상태 분석 | 시작할 때 |
| `/fsd-migrate` | commands/fsd-migrate.md | 마이그레이션 계획 | 전체 변경 시 |
| `/fsd-generate` | commands/fsd-generate.md | 새 feature 생성 | 새 기능 추가 |
| `/fsd-validate` | commands/fsd-validate.md | 규칙 검증 | 개발 중 확인 |
| `/fsd-refactor` | commands/fsd-refactor.md | 자동 수정 | 규칙 위반 시 |

### 📖 완전 가이드 (1개)

| 파일 | 설명 | 분량 |
|------|------|------|
| **skills/fsd-analyzer.md** | FSD 패턴 완전 가이드 | 547줄 |

### ⚙️ 설정 파일 (3개)

| 파일 | 설명 |
|------|------|
| **hooks/project-start-hook.md** | 에이전트 자동 호출 설정 |
| **SMART_EXECUTION_GUIDE.md** | 스마트 조건부 실행 가이드 |
| **README.md** | Claude Code 통합 가이드 |

---

## 🗺️ 주제별 찾기

### 배우기
```
1️⃣ FSD_QUICK_START.md           (5분)
2️⃣ skills/fsd-analyzer.md       (30분)
3️⃣ FSD_RESOURCES.md             (10분)
```

### 분석하기
```
📊 /fsd-analyze
   └─ commands/fsd-analyze.md
```

### 계획하기
```
📋 /fsd-migrate
   └─ commands/fsd-migrate.md
```

### 만들기
```
✨ /fsd-generate
   └─ commands/fsd-generate.md
```

### 검증하기
```
✅ /fsd-validate
   └─ commands/fsd-validate.md
```

### 수정하기
```
🔧 /fsd-refactor
   └─ commands/fsd-refactor.md
```

### 배포하기
```
🚀 /project-start
   └─ commands/project-start.md
```

---

## 📊 구조도

```
.claude/
│
├── 📚 학습 자료
│   ├── FSD_QUICK_START.md              ⭐ 5분 시작 가이드
│   ├── FSD_SETUP_COMPLETE.md           완료 확인
│   ├── FSD_RESOURCES.md                리소스 맵
│   └── INDEX.md                        이 파일
│
├── 🛠️ 명령어
│   └── commands/
│       ├── fsd-analyze.md              /fsd-analyze
│       ├── fsd-migrate.md              /fsd-migrate
│       ├── fsd-generate.md             /fsd-generate
│       ├── fsd-validate.md             /fsd-validate
│       ├── fsd-refactor.md             /fsd-refactor
│       └── project-start.md            /project-start
│
├── 📖 기술 자료
│   └── skills/
│       └── fsd-analyzer.md             FSD 완전 가이드
│
└── ⚙️ 설정
    ├── hooks/
    │   └── project-start-hook.md       에이전트 설정
    ├── README.md                       통합 가이드
    └── SMART_EXECUTION_GUIDE.md        스마트 실행
```

---

## 🚀 5가지 사용 시나리오

### 시나리오 1️⃣: FSD 처음 배우기

```
시간: 1-2시간

1. FSD_QUICK_START.md 읽기 (5분)
2. /fsd-analyze 실행 (1분)
3. skills/fsd-analyzer.md 정독 (30분)
4. /fsd-migrate 확인 (20분)
5. /fsd-generate로 실습 (20분)
```

### 시나리오 2️⃣: 새 Feature 추가

```
시간: 10-15분

1. /fsd-generate feature-name (2분)
2. 파일 수정 (5-10분)
3. /fsd-validate (1분)
4. npm run build (1분)
```

### 시나리오 3️⃣: 기존 코드 정리

```
시간: 1-3시간

1. /fsd-analyze (1분)
2. /fsd-refactor --dry-run (1분)
3. /fsd-refactor --auto-fix (1분)
4. npm run build (1분)
5. /fsd-validate (1분)
```

### 시나리오 4️⃣: 팀과 함께 FSD 도입

```
시간: 1주일

Day 1: FSD_QUICK_START.md 공유
Day 2: /fsd-analyze 결과 공유
Day 3: /fsd-migrate 계획 논의
Day 4-5: 마이그레이션 실행
Day 6-7: 테스트 및 검증
```

### 시나리오 5️⃣: 정기 프로젝트 점검

```
주기: 월 1회

1. /fsd-validate (1분)
2. 결과 검토 (5분)
3. 문제 발견 시 /fsd-refactor (5분)
4. npm run build (1분)
```

---

## 📈 학습 곡선

```
개념 이해:     FSD_QUICK_START.md               (5분) ⭐
|
|---- 기본 작동:  /fsd-analyze + /fsd-generate   (20분) ✅
|
|---- 깊이 있는 이해: skills/fsd-analyzer.md    (1시간)
|
+---- 마이그레이션:  /fsd-migrate + /fsd-refactor (1-3시간)
|
+---- 숙련:       정기 /fsd-validate           (지속)
```

---

## 🎯 Quick Links

### 🌟 가장 먼저 읽을 것
- **FSD_QUICK_START.md** - 5분 만에 시작하기

### 📊 현재 상태 확인
- **명령어**: `/fsd-analyze`
- **파일**: `commands/fsd-analyze.md`

### 📚 완전히 배우기
- **파일**: `skills/fsd-analyzer.md`
- **분량**: 547줄

### 🛠️ 실전 가이드
- **마이그레이션**: `/fsd-migrate`
- **새 feature**: `/fsd-generate`
- **검증**: `/fsd-validate`
- **수정**: `/fsd-refactor`

### 🗺️ 모든 리소스
- **파일**: `FSD_RESOURCES.md`

---

## 💡 팁

### 초보자 추천 경로
```
FSD_QUICK_START.md → /fsd-analyze → /fsd-generate
```

### 숙련자 추천 경로
```
/fsd-analyze → /fsd-refactor --dry-run → /fsd-refactor --auto-fix
```

### 팀 추천 경로
```
FSD_QUICK_START.md (공유) → /fsd-analyze → /fsd-migrate → 마이그레이션
```

---

## 📝 문서 선택 가이드

**어떤 파일을 읽어야 할까요?**

- **"5분 안에 FSD를 이해하고 싶어요"**
  → `FSD_QUICK_START.md`

- **"FSD가 뭔지 완벽히 알고 싶어요"**
  → `skills/fsd-analyzer.md`

- **"마이그레이션 계획이 필요해요"**
  → `/fsd-migrate` 또는 `commands/fsd-migrate.md`

- **"새 feature를 만들고 싶어요"**
  → `/fsd-generate` 또는 `commands/fsd-generate.md`

- **"규칙을 위반하고 있는지 확인하고 싶어요"**
  → `/fsd-validate` 또는 `commands/fsd-validate.md`

- **"모든 리소스를 한눈에 보고 싶어요"**
  → `FSD_RESOURCES.md`

- **"전체 설정이 제대로 되었는지 확인하고 싶어요"**
  → `FSD_SETUP_COMPLETE.md`

---

## ⏱️ 읽기 시간 안내

| 문서 | 시간 | 난이도 |
|------|------|--------|
| FSD_QUICK_START.md | 5분 | ⭐ 쉬움 |
| FSD_SETUP_COMPLETE.md | 3분 | ⭐ 쉬움 |
| commands/fsd-*.md | 10-20분 | ⭐⭐ 중간 |
| skills/fsd-analyzer.md | 30-60분 | ⭐⭐⭐ 어려움 |
| FSD_RESOURCES.md | 10-15분 | ⭐⭐ 중간 |

---

## 🎊 지금 바로 시작하기

### 방법 1: 5분 안에 시작
```bash
# 이 파일 읽기
# ↓
# FSD_QUICK_START.md 읽기
```

### 방법 2: 빠르게 실행
```bash
/fsd-analyze
```

### 방법 3: 새 Feature 만들기
```bash
/fsd-generate
```

---

## 📞 도움이 필요하신가요?

### 자주 하는 질문
- **FSD가 뭔가요?** → `FSD_QUICK_START.md`
- **어디서 시작할까요?** → 이 INDEX.md
- **마이그레이션 어떻게?** → `/fsd-migrate`
- **에러가 났어요** → `/fsd-validate` 또는 `/fsd-refactor`

### 더 알아보기
- 공식 사이트: https://feature-sliced.design/
- 공식 문서: https://feature-sliced.design/docs/

---

## 🎯 요약

```
📚 학습 자료 (3개)
  └─ FSD_QUICK_START.md
  └─ FSD_RESOURCES.md
  └─ skills/fsd-analyzer.md

🛠️ 명령어 (5개)
  └─ /fsd-analyze
  └─ /fsd-migrate
  └─ /fsd-generate
  └─ /fsd-validate
  └─ /fsd-refactor

✨ 모두 설정 완료!
```

---

## 🌟 다음 단계

```
1️⃣ FSD_QUICK_START.md 읽기 (5분)
   ↓
2️⃣ /fsd-analyze 실행 (1분)
   ↓
3️⃣ skills/fsd-analyzer.md 정독 (30분)
   ↓
4️⃣ /fsd-generate로 실습 (10분)
   ↓
✅ FSD 마스터!
```

---

**준비가 되셨나요? 지금 시작하세요! 🚀**

```
다음을 읽으세요: FSD_QUICK_START.md
또는 실행하세요: /fsd-analyze
```

---

Generated with Claude Code | 2025-11-17

