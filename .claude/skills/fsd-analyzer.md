# FSD (Feature-Sliced Design) Pattern Analyzer

Feature-Sliced Design 패턴을 분석하고 프로젝트에 적용하는 Claude Code 스킬입니다.

---

## 📋 스킬 개요

### 목적
- FSD 패턴의 이해 및 분석
- 프로젝트 구조 진단
- 마이그레이션 가이드 제공
- 베스트 프랙티스 제시

### 기능
- ✅ FSD 구조 설계
- ✅ 기존 프로젝트 분석
- ✅ 단계별 마이그레이션
- ✅ 코드 생성 및 리팩토링
- ✅ 의존성 관리
- ✅ 성능 최적화

---

## 🏗️ FSD 기본 구조

### Layer 구조

```
src/
├── app/              (Application Core)
│   ├── store/        (Global Store)
│   ├── router/       (Routing)
│   ├── config/       (Configuration)
│   └── App.tsx       (Root Component)
│
├── processes/        (Complex Business Logic)
│   ├── authentication/
│   ├── data-sync/
│   └── notifications/
│
├── pages/            (Page-level Components)
│   ├── home/
│   ├── about/
│   ├── projects/
│   └── contact/
│
├── features/         (Feature Modules)
│   ├── hero/
│   ├── skills/
│   ├── projects-showcase/
│   └── contact-form/
│
├── entities/         (Business Entities)
│   ├── user/
│   ├── project/
│   ├── skill/
│   └── social-link/
│
├── shared/           (Reusable Code)
│   ├── ui/           (Components)
│   ├── api/          (API Calls)
│   ├── utils/        (Utilities)
│   ├── hooks/        (Custom Hooks)
│   ├── lib/          (Third-party Setup)
│   └── types/        (Global Types)
│
└── widgets/          (UI Compositions)
    ├── header/
    ├── footer/
    ├── sidebar/
    └── navigation/
```

### Slice 구조 (각 레이어 내)

```
feature/section-name/
├── ui/               (UI Components)
│   ├── ComponentName.tsx
│   ├── ComponentName.module.css
│   └── index.ts
│
├── model/            (State & Business Logic)
│   ├── store.ts      (Zustand, Redux, etc)
│   ├── types.ts
│   ├── hooks.ts
│   └── index.ts
│
├── lib/              (Utilities for this slice)
│   ├── helpers.ts
│   ├── constants.ts
│   └── index.ts
│
├── api/              (API Integration)
│   ├── requests.ts
│   └── index.ts
│
├── index.ts          (Public API)
└── README.md         (Documentation)
```

---

## 🎯 FSD의 장점

### 1. 명확한 구조
```
각 파일의 역할이 명확함
→ 새 개발자도 쉽게 이해
```

### 2. 의존성 관리
```
상위 레이어는 하위 레이어만 참조
shared는 모든 곳에서 사용 가능
→ 순환 의존성 제거
```

### 3. 확장성
```
새 feature 추가 = 새 폴더 생성
기존 코드 수정 최소화
→ 쉬운 유지보수
```

### 4. 모듈화
```
feature/section이 독립적
각 feature는 자체 포함 가능
→ 코드 재사용 증가
```

---

## 📊 현재 프로젝트 분석 (Frontend Portfolio)

### 현재 구조

```
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── ui/
├── data/
│   ├── site.ts
│   ├── social.ts
│   ├── skills.ts
│   └── projects.ts
├── utils/
│   └── scroll.ts
├── App.tsx
├── main.tsx
└── index.css
```

### FSD 패턴으로의 변환

```
src/
├── app/
│   ├── config/
│   │   └── site-config.ts (site.ts)
│   └── App.tsx
│
├── pages/
│   └── portfolio/ (home page)
│       ├── ui/
│       │   └── PortfolioPage.tsx
│       ├── model/
│       │   ├── types.ts
│       │   └── hooks.ts
│       └── index.ts
│
├── features/
│   ├── hero/
│   │   ├── ui/
│   │   │   └── Hero.tsx
│   │   ├── lib/
│   │   │   └── constants.ts
│   │   └── index.ts
│   │
│   ├── skills/
│   │   ├── ui/
│   │   │   └── Skills.tsx
│   │   ├── model/
│   │   │   ├── store.ts (skills.ts)
│   │   │   ├── types.ts
│   │   │   └── hooks.ts
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   └── index.ts
│   │
│   ├── projects-showcase/
│   │   ├── ui/
│   │   │   └── Projects.tsx
│   │   ├── model/
│   │   │   ├── store.ts
│   │   │   ├── types.ts
│   │   │   └── hooks.ts
│   │   └── index.ts
│   │
│   ├── contact-section/
│   │   ├── ui/
│   │   │   └── Contact.tsx
│   │   ├── model/
│   │   │   ├── store.ts
│   │   │   ├── types.ts
│   │   │   └── hooks.ts
│   │   └── index.ts
│   │
│   └── about-section/
│       ├── ui/
│       │   └── About.tsx
│       ├── lib/
│       │   └── constants.ts
│       └── index.ts
│
├── entities/
│   ├── skill/
│   │   ├── model/
│   │   │   └── types.ts
│   │   └── index.ts
│   │
│   ├── project/
│   │   ├── model/
│   │   │   └── types.ts
│   │   └── index.ts
│   │
│   ├── social-link/
│   │   ├── model/
│   │   │   └── types.ts
│   │   └── index.ts
│   │
│   └── user/
│       ├── model/
│       │   └── types.ts
│       └── index.ts
│
├── widgets/
│   ├── header/
│   │   ├── ui/
│   │   │   └── Header.tsx
│   │   ├── model/
│   │   │   └── hooks.ts
│   │   └── index.ts
│   │
│   └── footer/
│       ├── ui/
│       │   └── Footer.tsx
│       └── index.ts
│
└── shared/
    ├── ui/
    │   └── (shadcn components)
    ├── api/
    │   ├── client.ts
    │   └── index.ts
    ├── utils/
    │   ├── scroll.ts
    │   └── index.ts
    ├── hooks/
    │   ├── useScrollDetection.ts
    │   └── index.ts
    ├── lib/
    │   ├── motion.ts
    │   └── tailwind.ts
    └── types/
        ├── common.ts
        └── index.ts
```

---

## 🚀 적용 방법

### 방법 1: 점진적 마이그레이션 (권장)

```
Step 1: Shared 폴더 정리
  └─ utils, ui를 shared로 이동

Step 2: Entities 생성
  └─ 데이터 타입 정의 (skill, project, social-link)

Step 3: Features 생성
  └─ 기능별 폴더 (hero, skills, projects, contact, about)

Step 4: Widgets 생성
  └─ 레이아웃 컴포넌트 (header, footer)

Step 5: App & Pages 정리
  └─ 루트 구조 정리
```

### 방법 2: 한번에 마이그레이션

```
전체 구조를 한 번에 변경
장점: 빨리 완료
단점: 위험성 높음
```

---

## 📝 Index.ts 패턴 (Public API)

### Feature의 index.ts

```typescript
// features/hero/index.ts
export { Hero } from './ui/Hero'
export { useHeroData } from './model/hooks'
export type { HeroProps } from './model/types'
```

### 사용

```typescript
// 좋은 방식
import { Hero } from '@/features/hero'

// 나쁜 방식 (직접 임포트)
import { Hero } from '@/features/hero/ui/Hero'
```

---

## 🧩 의존성 규칙

### 레이어별 의존성

```
app → (모든 곳 참조 가능)
processes → pages, features, entities, shared
pages → features, entities, widgets, shared
features → entities, shared
entities → shared
widgets → shared
shared → (아무것도 참조 불가)
```

### 위반 예시 (피해야 할 것)

```typescript
// ❌ Bad: shared가 features를 참조
// shared/utils/helper.ts
import { useHeroData } from '@/features/hero'

// ❌ Bad: features가 pages를 참조
// features/hero/ui/Hero.tsx
import { PortfolioPage } from '@/pages/portfolio'

// ✅ Good: 아래 방향만 참조
// features/hero/ui/Hero.tsx
import { useHeroData } from './model/hooks'
import { heroConstants } from './lib/constants'
import { motion } from '@/shared/lib/motion'
```

---

## 🎨 코드 생성 예시

### Feature 폴더 자동 생성

```bash
# 스킬이 feature 폴더 생성을 도와줄 수 있음
```

### 새 Feature 생성

```
features/new-feature/
├── ui/
│   ├── NewFeature.tsx
│   └── index.ts
├── model/
│   ├── types.ts
│   ├── hooks.ts
│   ├── store.ts
│   └── index.ts
├── lib/
│   ├── constants.ts
│   ├── helpers.ts
│   └── index.ts
├── api/
│   ├── requests.ts
│   └── index.ts
├── index.ts
└── README.md
```

---

## 📖 FSD 리소스

### 공식 문서
- https://feature-sliced.design/
- 영어 + 러시아어

### 핵심 개념
1. **Layer** - 기술적 계층
2. **Slice** - 기능별 모듈
3. **Segment** - 레이어 내 구조 (ui, model, lib, api)

### 커뮤니티
- GitHub Discussions
- Discord 커뮤니티

---

## 💡 이 스킬에서 할 수 있는 것

### 1. 프로젝트 분석
```
/fsd-analyze

현재 프로젝트를 FSD 관점에서 분석
- 현재 구조 평가
- 개선 가능 영역
- 마이그레이션 난이도
```

### 2. 마이그레이션 계획
```
/fsd-migrate

FSD로 마이그레이션하는 계획 수립
- 단계별 로드맵
- 각 단계 상세 가이드
- 위험 요소 파악
```

### 3. 코드 생성
```
/fsd-generate

새 Feature 폴더 구조 자동 생성
- 보일러플레이트 코드
- Index.ts 자동 생성
- TypeScript 타입 정의
```

### 4. 의존성 검증
```
/fsd-validate

FSD 규칙 위반 검사
- 잘못된 import 찾기
- 의존성 그래프 분석
- 리팩토링 제안
```

### 5. 리팩토링 자동화
```
/fsd-refactor

자동 리팩토링
- 파일 이동
- Import 경로 수정
- 인덱스 파일 자동 생성
```

---

## 🎯 Frontend Portfolio 프로젝트에서의 FSD

### 적용 예시

#### Before (현재)
```typescript
// src/components/Hero.tsx
import { heroCopy } from '../data/site'
import { scrollToSection } from '../utils/scroll'
```

#### After (FSD)
```typescript
// src/features/hero/ui/Hero.tsx
import { heroCopy } from '@/features/hero/model/constants'
import { useScroll } from '@/shared/hooks/useScroll'
```

### 이점
- ✅ 경로가 더 명확함
- ✅ Feature 독립적
- ✅ 재사용성 증가
- ✅ 팀 협업 용이

---

## 🚀 시작하기

### 1단계: 이해하기
```
이 스킬의 기본 개념 학습
```

### 2단계: 분석하기
```
/fsd-analyze

현재 프로젝트 분석
```

### 3단계: 계획하기
```
/fsd-migrate

마이그레이션 계획 수립
```

### 4단계: 실행하기
```
단계별로 구조 변경
테스트 및 검증
```

---

## 📚 추가 자료

### 패턴
- **Atomic Design** vs FSD (차이점)
- **Clean Architecture** vs FSD
- **Modular Architecture** vs FSD

### 실제 프로젝트
- React 프로젝트 예시
- Next.js 프로젝트 예시
- Vue 프로젝트 예시

---

**이 스킬은 프로젝트를 더 체계적이고 확장 가능한 구조로 만드는데 도움을 줍니다!** 🏗️

---

**Status**: 준비 완료 ✅
**Version**: 1.0
**Last Updated**: 2025-11-17
