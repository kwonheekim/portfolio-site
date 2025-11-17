# FSD Migrate - Feature-Sliced Design 마이그레이션 계획

Frontend Portfolio Site 프로젝트를 Feature-Sliced Design 패턴으로 마이그레이션하는 단계별 계획을 수립합니다.

---

## 🎯 마이그레이션 가이드

### 🏗️ 기본 개념

**Feature-Sliced Design (FSD)**는 프로젝트를 다음과 같이 구성합니다:

```
src/
├── app/              (애플리케이션 핵심)
├── processes/        (복잡한 비즈니스 로직)
├── pages/            (페이지 레벨 컴포넌트)
├── features/         (기능 모듈)
├── entities/         (비즈니스 엔티티)
├── widgets/          (UI 레이아웃 컴포넌트)
└── shared/           (재사용 가능한 코드)
```

### 📋 마이그레이션 단계

#### **Step 1: Shared 폴더 정리** (1-2시간)

현재 상태:
```
src/utils/
src/data/
```

목표:
```
src/shared/
├── ui/           (shadcn 컴포넌트들)
├── utils/
│   └── scroll.ts (기존 utils/)
├── hooks/
│   └── useScrollDetection.ts (scroll 관련 hooks)
├── types/
│   └── common.ts (공통 타입)
└── data/
    ├── social.ts
    ├── skills.ts
    ├── projects.ts
    └── site.ts
```

**실행:**
```bash
mkdir -p src/shared/{ui,utils,hooks,types,data}
mv src/utils/* src/shared/utils/
mv src/data/* src/shared/data/
```

#### **Step 2: Entities 생성** (1-2시간)

비즈니스 엔티티 정의 (데이터 타입 중심):

```
src/entities/
├── project/
│   ├── model/
│   │   ├── types.ts          (Project interface)
│   │   └── index.ts
│   └── index.ts              (public API)
├── skill/
│   ├── model/
│   │   ├── types.ts          (SkillGroup interface)
│   │   └── index.ts
│   └── index.ts
├── social-link/
│   ├── model/
│   │   ├── types.ts          (SocialLink interface)
│   │   └── index.ts
│   └── index.ts
└── user/
    ├── model/
    │   ├── types.ts
    │   └── index.ts
    └── index.ts
```

**파일 예시:**
```typescript
// src/entities/project/model/types.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  githubUrl?: string;
  demoUrl?: string;
}

// src/entities/project/index.ts
export type { Project } from './model/types'
```

#### **Step 3: Features 생성** (2-3시간)

기능 모듈 (재사용 가능한 기능):

```
src/features/
├── hero/
│   ├── ui/
│   │   ├── Hero.tsx
│   │   └── index.ts
│   ├── model/
│   │   ├── hooks.ts
│   │   ├── types.ts
│   │   └── index.ts
│   ├── lib/
│   │   ├── constants.ts
│   │   └── index.ts
│   ├── index.ts              (public API)
│   └── README.md
├── skills/
│   ├── ui/
│   │   ├── Skills.tsx
│   │   └── index.ts
│   ├── model/
│   │   ├── store.ts
│   │   ├── hooks.ts
│   │   ├── types.ts
│   │   └── index.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   └── index.ts
│   ├── index.ts
│   └── README.md
├── projects-showcase/
├── contact-section/
└── about-section/
```

**주요 패턴:**
```typescript
// src/features/hero/index.ts (public API)
export { Hero } from './ui/Hero'
export { useHeroData } from './model/hooks'
export type { HeroProps } from './model/types'

// 사용
import { Hero } from '@/features/hero'
```

#### **Step 4: Widgets 생성** (1-2시간)

레이아웃 컴포넌트 (여러 features 조합):

```
src/widgets/
├── header/
│   ├── ui/
│   │   ├── Header.tsx
│   │   └── index.ts
│   ├── model/
│   │   ├── hooks.ts
│   │   └── index.ts
│   ├── index.ts
│   └── README.md
└── footer/
    ├── ui/
    │   ├── Footer.tsx
    │   └── index.ts
    ├── index.ts
    └── README.md
```

#### **Step 5: Pages 정리** (1시간)

페이지 레벨 컴포넌트:

```
src/pages/
└── portfolio/
    ├── ui/
    │   ├── PortfolioPage.tsx
    │   └── index.ts
    ├── model/
    │   ├── types.ts
    │   └── index.ts
    └── index.ts
```

### 🔄 마이그레이션 순서 (권장)

```
1️⃣ Shared 폴더 정리 (기초 작업)
   └─ 모든 다른 단계가 이것에 의존

2️⃣ Entities 생성 (데이터 타입)
   └─ Features와 Pages가 참조함

3️⃣ Features 생성 (기능 모듈)
   └─ Widgets와 Pages가 조합함

4️⃣ Widgets 생성 (레이아웃)
   └─ Pages가 배치함

5️⃣ Pages & App 정리 (최상위)
   └─ 최종 조정

6️⃣ Import 경로 업데이트
   └─ tsconfig.json alias 확인
   └─ 모든 import 수정
```

---

## 📊 현재 프로젝트 분석

### 현재 상태
```
✅ 이미 분리됨:
   - src/data/ (skills, projects, social, site)
   - src/utils/ (scroll.ts)

⚠️ 개선 필요:
   - components/ 구조화 필요
   - feature별 모듈화 필요
   - 타입 정의 체계화 필요
```

### FSD 준비도
```
완료도: ⭐⭐⭐ (60%)
  - 데이터 분리 완료
  - 유틸 추출 완료
  - 타입 정의 부분 완료

남은 것:
  - Feature 폴더 구조화
  - Widget 분리
  - 의존성 규칙 적용
```

---

## 🚀 실제 마이그레이션 예시

### Before (현재)
```typescript
// src/components/Hero.tsx
import { heroCopy } from '../data/site'
import { scrollToSection } from '../utils/scroll'

export function Hero() {
  return (
    <motion.div onClick={() => scrollToSection('about')}>
      {heroCopy.title}
    </motion.div>
  )
}
```

### After (FSD)
```typescript
// src/features/hero/ui/Hero.tsx
import { heroCopy } from '@/shared/data/site'
import { scrollToSection } from '@/shared/utils/scroll'

export function Hero() {
  return (
    <motion.div onClick={() => scrollToSection('about')}>
      {heroCopy.title}
    </motion.div>
  )
}

// src/features/hero/index.ts (public API)
export { Hero } from './ui/Hero'
```

---

## ⚠️ 마이그레이션 시 주의사항

1. **Import 경로 업데이트**
   ```typescript
   // ❌ 이전
   import { scrollToSection } from '../utils/scroll'

   // ✅ 이후
   import { scrollToSection } from '@/shared/utils/scroll'
   ```

2. **의존성 규칙 준수**
   ```
   ✅ 가능: features → entities, shared
   ❌ 불가능: shared → features (순환 참조)
   ```

3. **Index.ts 작성**
   - 각 feature/widget의 public API 명확하게
   - 직접 import 방지 (예: `@/features/hero/ui/Hero` ❌)

4. **테스트 후 커밋**
   - 각 단계 완료 후 테스트
   - npm run build 성공 확인
   - git commit으로 진행 상황 기록

---

## 💡 마이그레이션 팁

### 빠르게 진행하기
```bash
# 단계별로 폴더 생성
mkdir -p src/{shared,entities,features,widgets,pages}

# 파일 이동
mv src/utils src/shared/utils
mv src/data src/shared/data

# 빌드 테스트
npm run build
```

### 에러 처리
```bash
# 빌드 실패 시
npm run build

# TypeScript 에러 확인
npx tsc --noEmit

# 부분 테스트
npm run dev  # HMR로 즉시 확인
```

---

## 📈 예상 효과

```
마이그레이션 후:

✅ 명확한 구조
   - 각 파일의 역할이 명확
   - 새 개발자도 쉽게 이해

✅ 확장성 증대
   - 새 feature 추가 = 새 폴더 생성
   - 기존 코드 수정 최소화

✅ 의존성 관리
   - 순환 참조 제거
   - 모듈 독립성 증대

✅ 코드 재사용
   - feature 독립적
   - 다른 프로젝트에서도 활용 가능
```

---

## 🎯 다음 단계

```bash
# 1. 현재 상태 분석
/fsd-analyze

# 2. 마이그레이션 실행 (이 가이드 참고)
Step 1 → Step 2 → Step 3 → Step 4 → Step 5

# 3. 마이그레이션 검증
/fsd-validate

# 4. 새 Feature 추가 시
/fsd-generate feature-name
```

---

**FSD 리소스**: https://feature-sliced.design/

🔍 Generated with Claude Code
