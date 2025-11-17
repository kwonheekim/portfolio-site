# Claude Code Integration Guide

프로젝트의 Claude Code 커스텀 명령어 및 에이전트 설정 가이드입니다.

## 📁 디렉토리 구조

```
.claude/
├── commands/
│   └── project-start.md          # /project-start 명령어 정의
├── hooks/
│   └── project-start-hook.md     # 에이전트 자동 호출 설정
└── README.md                      # 이 파일
```

## 🚀 사용 가능한 명령어

### `/project-start` - 프로젝트 시작 및 자동 검사

프로젝트를 시작하면서 **lint-error-fixer 에이전트가 자동으로 실행**됩니다.

```bash
/project-start
```

**자동 실행되는 작업:**
1. ✅ 의존성 설치 (pnpm install)
2. ✅ 자동 상태 검사 (lint-error-fixer 에이전트)
3. ✅ 프로덕션 빌드 (npm run build)
4. ✅ 개발 서버 시작 (npm run dev)

**에이전트가 검사하는 사항:**
- 의존성 설치 상태
- TypeScript 타입 에러
- 보안 취약점 (npm audit)
- 빌드 성공 여부
- 개발 서버 상태
- 코드 구조 분석

---

## 🤖 에이전트 설정

### lint-error-fixer 자동 호출

**파일**: `.claude/hooks/project-start-hook.md`

프로젝트를 시작할 때마다 자동으로 다음을 수행합니다:

```
1. 현재 프로젝트 상태 분석
2. 에러/경고 목록 작성
3. 해결 방법 제안
4. 개발 서버 상태 확인
```

### 에이전트 출력 형식

```
═══════════════════════════════════════════════════════════════
프로젝트 분석 완료 보고서
═══════════════════════════════════════════════════════════════

프로젝트 상태: ✅ HEALTHY

1. 의존성 상태
2. 빌드 상태
3. 개발 서버 상태
4. 발견된 문제점
5. 권장사항
```

---

## 📝 커스텀 명령어 생성 방법

새로운 Claude Code 명령어를 추가하려면:

### Step 1: 명령어 파일 생성

```bash
.claude/commands/my-command.md
```

### Step 2: 파일 작성

```markdown
# My Custom Command

Description of what this command does

---

**실행 단계:**

1. First step
2. Second step
3. Third step

**출력:**
- Result 1
- Result 2
```

### Step 3: VS Code에서 사용

```bash
/my-command
```

---

## 🔧 설정 변경 방법

### 1. 명령어 설명 수정

`.claude/commands/project-start.md` 파일 편집

### 2. 에이전트 동작 변경

`.claude/hooks/project-start-hook.md` 파일의 `prompt` 섹션 수정

### 3. 새로운 에이전트 추가

```markdown
# .claude/commands/my-agent-command.md

**에이전트 자동 호출:**

에이전트 타입: lint-error-fixer
검사 항목: [custom prompt]
```

---

## 📊 현재 설정 정보

| 항목 | 값 |
|------|-----|
| **프로젝트 명령어** | `/project-start` |
| **자동 에이전트** | lint-error-fixer |
| **검사 항목** | 의존성, 타입, 보안, 빌드, 서버 |
| **업데이트 일시** | 2025-11-17 |
| **상태** | ✅ 활성화 |

---

## 🎯 워크플로우

### 개발 시작

```bash
/project-start
↓
lint-error-fixer 자동 실행
↓
프로젝트 상태 분석
↓
개발 서버 시작 (http://localhost:3000)
↓
HMR로 파일 저장 시 자동 리로드
```

### 배포 전

```bash
npm run build
↓
빌드 결과 확인
↓
Vercel/Netlify 배포
```

---

## 💡 팁 & 트러블슈팅

### Q: 명령어가 안 나타나요
**A**: VS Code 재시작 → Command Palette에서 "Reload Window"

### Q: 에이전트가 실행되지 않아요
**A**:
1. `.claude/hooks/` 폴더 확인
2. 파일 형식 확인 (`.md` 확장자)
3. Prompt 문법 확인

### Q: 특정 검사를 제외하고 싶어요
**A**: `.claude/hooks/project-start-hook.md`의 prompt 수정

---

## 🔗 관련 문서

- **QUICK_START.md** - 빠른 시작 가이드
- **IMPROVEMENTS.md** - 프로젝트 개선 내역
- **FRONTEND_EXPERT_REVIEW.md** - 전문가 코드 리뷰
- **CLAUDE.md** - 프로젝트 기본 설정

---

## 📞 지원

더 자세한 정보:
- **프로젝트 가이드**: CLAUDE.md 참조
- **에이전트 문서**: .claude/hooks/ 폴더
- **명령어 정의**: .claude/commands/ 폴더

---

**마지막 업데이트**: 2025-11-17
**작성자**: Frontend Specialist Agent
**상태**: ✅ 운영 중
