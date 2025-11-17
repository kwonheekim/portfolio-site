# FSD Refactor - FSD 규칙 자동 수정

FSD 규칙 위반을 자동으로 감지하고 수정합니다.

---

## 📋 기능

이 명령어는 다음을 자동으로 수정합니다:

- ✅ Import 경로 정정 (`@/features/hero/ui/Hero` → `@/features/hero`)
- ✅ Index.ts 자동 생성 (missing public APIs)
- ✅ 파일 이동 (폴더 구조 정리)
- ✅ 의존성 추출 (공통 로직을 shared로 이동)
- ✅ 타입 정의 정리

---

## 🚀 사용 방법

### 기본 사용
```bash
/fsd-refactor
```

### 옵션
```bash
# 자동 수정
/fsd-refactor --auto-fix

# 드라이 런 (변경사항만 표시, 실제 수정 안 함)
/fsd-refactor --dry-run

# 특정 문제만 수정
/fsd-refactor --fix imports       # import 경로만
/fsd-refactor --fix index-files   # index.ts만
/fsd-refactor --fix structure     # 폴더 구조만

# 특정 레이어만
/fsd-refactor --layer features
/fsd-refactor --layer widgets
```

---

## 📊 수정 항목 상세

### 1. Import 경로 수정

**Before:**
```typescript
// src/components/Hero.tsx
import { Hero } from '@/features/hero/ui/Hero'
import { useHeroData } from '@/features/hero/model/hooks'
import type { HeroProps } from '@/features/hero/model/types'
```

**After:**
```typescript
// src/features/hero/ui/Hero.tsx
import { Hero } from '@/features/hero'
import { useHeroData } from '@/features/hero'
import type { HeroProps } from '@/features/hero'
```

### 2. Index.ts 자동 생성

**발견:**
```
src/features/projects/ (index.ts 없음)
├── ui/Projects.tsx
├── model/
│   ├── hooks.ts
│   ├── types.ts
│   └── store.ts
└── lib/
    ├── constants.ts
    └── utils.ts
```

**생성:**
```typescript
// src/features/projects/index.ts (자동 생성)
export { Projects } from './ui/Projects'
export { useProjectsData } from './model/hooks'
export { useProjectsStore } from './model/store'
export type { ProjectsProps } from './model/types'
```

### 3. 폴더 구조 정리

**Before:**
```
src/features/hero/
├── Hero.tsx              (잘못된 위치)
├── hooks.ts              (잘못된 위치)
├── types.ts              (잘못된 위치)
└── utils.ts              (잘못된 위치)
```

**After:**
```
src/features/hero/
├── ui/
│   ├── Hero.tsx
│   └── index.ts
├── model/
│   ├── hooks.ts
│   ├── types.ts
│   └── index.ts
├── lib/
│   ├── utils.ts
│   └── index.ts
└── index.ts
```

### 4. 의존성 추출

**발견 (순환 참조 또는 위반):**
```typescript
// src/shared/utils/helper.ts
import { useHeroData } from '@/features/hero'  // ❌ 위반!
```

**자동 해결:**
```typescript
// src/shared/utils/helper.ts
// import 제거, 함수만 분리

// src/shared/lib/commonHelper.ts (새로 생성)
export function commonHelperFn() { }

// src/features/hero/model/hooks.ts
import { commonHelperFn } from '@/shared/lib/commonHelper'
```

### 5. 타입 정의 정리

**Before:**
```typescript
// types가 여러 파일에 분산
src/features/hero/types.ts
src/features/hero/model/types.ts
src/features/hero/Hero.tsx  // inline types
```

**After:**
```typescript
// 중앙집중식 타입 정의
src/features/hero/model/types.ts
  ├─ HeroProps
  ├─ HeroState
  └─ HeroActions
```

---

## 🎯 실행 흐름

```
/fsd-refactor 실행
    ↓
1️⃣ 분석 단계
   ├─ FSD 규칙 검증 (/fsd-validate와 동일)
   ├─ 위반 항목 나열
   └─ 수정 방안 제시
    ↓
2️⃣ 확인 단계
   ├─ 수정할 사항 표시
   ├─ 영향받을 파일 목록
   └─ 사용자 확인 대기
    ↓
3️⃣ 백업 단계
   ├─ git commit 생성 (자동)
   └─ 이전 상태 보존
    ↓
4️⃣ 수정 단계
   ├─ Import 경로 수정
   ├─ 파일 이동
   ├─ Index.ts 생성
   └─ 타입 정리
    ↓
5️⃣ 검증 단계
   ├─ npm run build
   ├─ TypeScript 체크
   └─ /fsd-validate 재실행
    ↓
6️⃣ 완료
   └─ 결과 보고
```

---

## 📝 출력 예시

### Dry Run
```
═══════════════════════════════════════════════════════════
FSD Refactor - Dry Run
═══════════════════════════════════════════════════════════

🔍 발견된 문제: 8개

【1】Import 경로 수정 (5개)
────────────────────────────────────────────────────────

src/components/Header.tsx (라인 1)
  현재: import { Hero } from '@/features/hero/ui/Hero'
  변경: import { Hero } from '@/features/hero'
  파일: src/features/hero/index.ts (이미 존재)

src/App.tsx (라인 2)
  현재: import { Skills } from '@/features/skills/ui/Skills'
  변경: import { Skills } from '@/features/skills'
  파일: src/features/skills/index.ts (이미 존재)

[... 3개 더 ...]

【2】Index.ts 생성 (2개)
────────────────────────────────────────────────────────

src/features/projects/
  파일: index.ts (새로 생성)
  내용:
    export { Projects } from './ui/Projects'
    export { useProjectsStore } from './model/store'
    export type { ProjectsProps } from './model/types'

src/features/contact/
  파일: index.ts (새로 생성)
  내용:
    export { Contact } from './ui/Contact'
    export { useContactForm } from './model/hooks'

【3】폴더 구조 정리 (1개)
────────────────────────────────────────────────────────

src/features/about/
  移動:
    about/About.tsx → about/ui/About.tsx
    about/hooks.ts → about/model/hooks.ts
    about/types.ts → about/model/types.ts
  新規:
    about/ui/index.ts
    about/model/index.ts
    about/index.ts

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

영향받을 파일: 12개
변경: 8개 파일
생성: 5개 파일
이동: 3개 파일

⚠️ Dry Run: 실제 변경 없음

실제 실행:
  /fsd-refactor --auto-fix
```

### Auto Fix 결과
```
═══════════════════════════════════════════════════════════
FSD Refactor - Auto Fix 완료
═══════════════════════════════════════════════════════════

✅ 모든 수정 완료!

【1】Import 경로 수정 (5개) ✅
  ✓ src/components/Header.tsx
  ✓ src/App.tsx
  ✓ src/components/Navigation.tsx
  ✓ src/pages/Home.tsx
  ✓ src/pages/Portfolio.tsx

【2】Index.ts 생성 (2개) ✅
  ✓ src/features/projects/index.ts
  ✓ src/features/contact/index.ts

【3】폴더 구조 정리 (1개) ✅
  ✓ src/features/about/ (3개 파일 이동)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 통계
  변경 파일: 8개
  새 파일: 5개
  이동 파일: 3개

🔧 자동 작업
  [✓] git add -A
  [✓] git commit -m "refactor: apply FSD pattern"
  [✓] npm run build (성공)
  [✓] npx tsc --noEmit (성공)

✅ 빌드 검증: 성공
✅ TypeScript 검증: 성공 (에러 0)

📈 개선도
  이전: ⚠️ WARNING (이슈 8개)
  현재: ✅ PASS (이슈 0개)

🎉 FSD 패턴 완전 준수!

다음:
  /fsd-validate로 재검증
  git log로 변경사항 확인
```

---

## 🔧 고급 옵션

### 선택적 수정
```bash
# import 경로만 수정
/fsd-refactor --fix imports --dry-run

# 확인 후 적용
/fsd-refactor --fix imports --auto-fix
```

### 특정 레이어
```bash
# features만 처리
/fsd-refactor --layer features --auto-fix

# widgets만 처리
/fsd-refactor --layer widgets --auto-fix
```

### 특정 모듈
```bash
# hero feature만 처리
/fsd-refactor --module hero --auto-fix

# 여러 모듈
/fsd-refactor --module hero,skills,projects --auto-fix
```

---

## 🚨 주의사항

### 1. 백업 생성
```bash
# git commit 자동 생성
git log --oneline | head -1
# (refactor: apply FSD pattern)

# 이전 상태로 복원 가능
git revert HEAD
```

### 2. 대규모 변경
```bash
# 먼저 dry-run으로 확인
/fsd-refactor --dry-run

# 문제 없으면 실행
/fsd-refactor --auto-fix
```

### 3. IDE 캐시
```bash
# TypeScript 캐시 문제가 있으면
rm -rf node_modules/.vite
npm run dev  # IDE 재인식
```

---

## 💡 팁

### 수정 전 체크리스트
```
□ git status 확인 (clean 상태)
□ npm run build 성공
□ npm run dev 실행 확인
□ /fsd-validate로 현재 상태 확인
```

### 수정 후 검증
```bash
# 빌드 확인
npm run build

# TypeScript 검증
npx tsc --noEmit

# FSD 규칙 재검증
/fsd-validate

# git 로그 확인
git log --oneline -5
```

### 부분 수정
```bash
# 일부만 수정하고 싶으면 dry-run으로 확인
/fsd-refactor --dry-run

# 필요한 부분만 수동 수정
# 또는 특정 옵션으로 부분 적용
/fsd-refactor --fix imports --auto-fix
```

---

## 🎯 다음 단계

### 수정 후
```bash
1. 빌드 확인
   npm run build ✓

2. 테스트 (개발 서버)
   npm run dev ✓

3. 재검증
   /fsd-validate ✓

4. git 커밋 확인
   git log ✓
```

### 문제 발생 시
```bash
# 이전 상태로 복원
git revert HEAD

# 또는
git reset --hard HEAD~1

# 다시 시도
/fsd-refactor --help
```

---

## 📚 관련 명령어

- **분석**: `/fsd-analyze` - 현재 상태 분석
- **계획**: `/fsd-migrate` - 마이그레이션 가이드
- **생성**: `/fsd-generate` - 새 feature 생성
- **검증**: `/fsd-validate` - 규칙 검증

---

**FSD 리소스**: https://feature-sliced.design/

🔍 Generated with Claude Code
