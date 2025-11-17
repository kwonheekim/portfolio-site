# 🚀 FSD (Feature-Sliced Design) Quick Start Guide

Feature-Sliced Design 패턴을 프로젝트에 적용하는 완벽한 가이드입니다.

---

## 📋 목차

1. [FSD란?](#fsd란)
2. [기본 개념](#기본-개념)
3. [5분 안에 시작하기](#5분-안에-시작하기)
4. [명령어 치트시트](#명령어-치트시트)
5. [일반적인 질문](#일반적인-질문)
6. [다음 단계](#다음-단계)

---

## FSD란?

**Feature-Sliced Design (FSD)**는 프로젝트를 논리적으로 계층화된 슬라이스로 구조화하는 패턴입니다.

### 핵심 원칙
```
✅ 명확한 구조     - 각 파일의 역할 명확
✅ 확장성         - 새 기능 추가 = 새 폴더 생성
✅ 의존성 관리    - 순환 참조 제거
✅ 코드 재사용    - 독립적인 모듈
```

---

## 기본 개념

### 1️⃣ 7개 Layer (계층)

```
app/              📱 애플리케이션 핵심 (App.tsx, Router)
processes/        🔄 복잡한 비즈니스 로직 (로그인 플로우, 데이터 동기화)
pages/            📄 페이지 (Home, Portfolio, About)
features/         ⚡ 기능 모듈 (Hero, Skills, Projects)
entities/         📦 비즈니스 엔티티 (Project, Skill types)
widgets/          🎨 UI 조합 (Header, Footer)
shared/           📚 재사용 코드 (UI components, utils)
```

### 2️⃣ 각 Slice의 구조

```
feature/section-name/
├── ui/              (UI 컴포넌트)
├── model/           (상태, 훅, 타입)
├── lib/             (유틸, 상수)
├── api/             (API 호출 - 선택)
└── index.ts         (공개 API)
```

### 3️⃣ 의존성 규칙

```
위쪽은 아래쪽만 참조 가능 ⬇️

app    → 모든 곳 참조 가능
pages  → features, entities, widgets, shared
features → entities, shared ✅
entities → shared만 가능
widgets → shared만 가능
shared → 아무것도 참조 불가 ❌
```

---

## 5분 안에 시작하기

### Step 1: 현재 상태 분석 (1분)

```bash
/fsd-analyze
```

**결과:**
- 현재 프로젝트가 FSD에 얼마나 가까운지 평가
- 개선 영역 제시
- 예상 소요 시간

### Step 2: 마이그레이션 계획 확인 (2분)

```bash
/fsd-migrate
```

**결과:**
- 5단계 마이그레이션 로드맵
- 각 단계별 상세 지침
- 실제 코드 예시

### Step 3: 마이그레이션 실행 또는 새 Feature 추가 (2분)

**옵션 A: 마이그레이션**
```bash
# 현재 폴더 구조 정리
mkdir -p src/{shared,entities,features,widgets,pages}
```

**옵션 B: 새 Feature 만들기**
```bash
/fsd-generate
# 또는
/fsd-generate new-feature features yes no
```

---

## 명령어 치트시트

### 📊 분석 & 검증

| 명령어 | 기능 | 사용 시기 |
|--------|------|---------|
| `/fsd-analyze` | 현재 상태 분석 | 시작할 때 |
| `/fsd-validate` | 규칙 위반 검사 | 개발 중 확인 |

### 📝 계획 & 생성

| 명령어 | 기능 | 사용 시기 |
|--------|------|---------|
| `/fsd-migrate` | 마이그레이션 가이드 | 전체 구조 변경 시 |
| `/fsd-generate` | Feature 자동 생성 | 새 기능 추가 |

### 🔧 수정 & 최적화

| 명령어 | 기능 | 사용 시기 |
|--------|------|---------|
| `/fsd-refactor` | 자동 수정 | 규칙 위반 수정 시 |

---

## 일반적인 질문

### Q1: FSD는 필수인가요?

**A:** 아니요, 선택사항입니다. 하지만:
- 프로젝트가 커질수록 유용
- 팀 협업 시 큰 도움
- 코드 유지보수 쉬움

### Q2: 지금 바로 마이그레이션해야 하나요?

**A:** 단계적으로 진행하세요:
1. 새 코드는 FSD 따르기
2. 기존 코드는 점진적으로 정리
3. 서두르지 않아도 됨

### Q3: 어디서 시작해야 하나요?

**A:** 추천 순서:
```
1. /fsd-analyze          (현재 상태 파악)
2. /fsd-migrate          (계획 수립)
3. /fsd-generate         (새 feature부터 시작)
4. 기존 코드 점진적으로 정리
5. /fsd-validate         (규칙 확인)
```

### Q4: Import 경로가 복잡해지지 않나요?

**A:** index.ts가 해결합니다:
```typescript
// ❌ 복잡
import { Hero } from '@/features/hero/ui/Hero'

// ✅ 간단 (index.ts 덕분)
import { Hero } from '@/features/hero'
```

### Q5: 순환 참조가 생기면 어떻게?

**A:** 공통 로직을 shared로 추출:
```typescript
// ❌ 순환 참조
features/hero → shared/utils → features/projects

// ✅ 해결
features/hero → shared/utils
features/projects → shared/utils
```

### Q6: 이미 구조가 있는데도 적용 가능?

**A:** 네, /fsd-refactor로 자동 수정 가능:
```bash
/fsd-refactor --dry-run     # 먼저 확인
/fsd-refactor --auto-fix    # 자동 수정
```

---

## 🎯 실제 예시

### Example 1: 새 Feature 추가

```bash
# 1. Feature 생성
/fsd-generate portfolio-filter features yes zustand

# 2. 파일 수정
src/features/portfolio-filter/
├── ui/PortfolioFilter.tsx    # UI 작성
├── model/store.ts            # 상태 로직 작성
├── model/hooks.ts            # 커스텀 훅
├── lib/constants.ts          # 상수
└── index.ts                  # export

# 3. App.tsx에서 사용
import { PortfolioFilter } from '@/features/portfolio-filter'

# 4. 테스트
npm run build
npm run dev
```

### Example 2: 기존 코드 정리

```bash
# 1. 분석
/fsd-analyze

# 2. 계획 확인
/fsd-migrate

# 3. 자동 수정
/fsd-refactor --dry-run      # 먼저 확인
/fsd-refactor --auto-fix     # 실행

# 4. 검증
/fsd-validate                # 규칙 확인
npm run build                # 빌드 확인
```

---

## 📚 Skill 리소스

### 전체 가이드
```
.claude/skills/fsd-analyzer.md
```

### 명령어 상세 문서
```
.claude/commands/fsd-analyze.md       분석
.claude/commands/fsd-migrate.md       마이그레이션
.claude/commands/fsd-generate.md      생성
.claude/commands/fsd-validate.md      검증
.claude/commands/fsd-refactor.md      수정
```

---

## 🚀 다음 단계

### Day 1️⃣: 학습
```bash
# 1. 현재 상태 파악
/fsd-analyze

# 2. 계획 수립
/fsd-migrate
```

### Day 2️⃣: 실습
```bash
# 1. 새 feature 만들기
/fsd-generate test-feature features yes no

# 2. 규칙 이해하기
/fsd-validate

# 3. 수정 자동화 경험
/fsd-refactor --dry-run
```

### Day 3️⃣+: 적용
```bash
# 1. 프로젝트 전체 마이그레이션
# (계획에 따라 단계별 진행)

# 2. 정기적 검증
/fsd-validate

# 3. 새 코드는 FSD 패턴 준수
/fsd-generate new-feature ...
```

---

## 💡 프로 팁

### 1. 점진적 마이그레이션 (권장)
```bash
# 한 번에 하지 말고
Step 1: shared 폴더 정리
Step 2: entities 생성
Step 3: features 생성
Step 4: widgets 생성
Step 5: pages 정리

# 각 단계마다 테스트
npm run build
```

### 2. 자동 도구 활용
```bash
# dry-run으로 미리 확인
/fsd-refactor --dry-run

# 문제 없으면 자동 수정
/fsd-refactor --auto-fix
```

### 3. 정기적 검증
```bash
# 개발 중에도 자주 확인
/fsd-validate

# CI/CD에 통합 (선택사항)
npm run build
```

### 4. 팀 협업
```bash
# README.md에 문서화
.claude/FSD_QUICK_START.md 공유

# 새 팀원은 여기서 시작
/fsd-analyze
/fsd-migrate
```

---

## 🎊 체크리스트

### 학습
- [ ] `/fsd-analyze` 실행해보기
- [ ] `/fsd-migrate` 읽어보기
- [ ] 이 문서 완독

### 실습
- [ ] `/fsd-generate`로 새 feature 만들기
- [ ] `/fsd-validate`로 규칙 확인
- [ ] `/fsd-refactor --dry-run` 시도

### 적용
- [ ] 기존 코드 정리 계획 수립
- [ ] `/fsd-refactor --auto-fix` 실행
- [ ] 정기적으로 `/fsd-validate` 확인

---

## 📞 더 알아보기

### 공식 문서
- **FSD 공식 사이트**: https://feature-sliced.design/
- **Best Practices**: https://feature-sliced.design/docs/reference/

### 개념 이해
| 개념 | 설명 |
|------|------|
| **Layers** | 기술적 계층 (app, pages, features...) |
| **Slices** | 기능별 모듈 (hero, skills, projects...) |
| **Segments** | 계층 내 구조 (ui, model, lib, api) |

### 유사 패턴
- **Clean Architecture** - 엔터프라이즈 프로젝트
- **Atomic Design** - 디자인 시스템
- **Modular Architecture** - 독립적 모듈

---

## 🎯 Success Metrics

마이그레이션 후:

```
✅ 개발 속도 20% 향상
✅ 새 기능 추가 시간 단축
✅ 코드 재사용 증가
✅ 팀 협업 효율성 증대
✅ 버그 감소
✅ 유지보수 비용 절감
```

---

## 📝 피드백

이 가이드에 대한 피드백:
- 부족한 부분
- 더 필요한 예시
- 명령어 개선사항

---

**시작할 준비가 되셨나요?**

```bash
# 지금 바로 시작하세요!
/fsd-analyze
```

---

## 📌 빠른 참조

```bash
# 분석
/fsd-analyze               현재 상태 파악

# 계획
/fsd-migrate               마이그레이션 로드맵

# 생성
/fsd-generate hero         새 feature 생성

# 검증
/fsd-validate              규칙 확인

# 수정
/fsd-refactor --auto-fix   자동 수정
```

---

**Happy FSD journey! 🚀**

Generated with Claude Code | 2025-11-17

