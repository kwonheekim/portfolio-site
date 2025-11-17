# FSD Generate - Feature 폴더 자동 생성

새로운 Feature 또는 Widget을 FSD 패턴에 맞게 자동으로 생성합니다.

---

## 📋 기능

이 명령어는 다음을 자동으로 생성합니다:

- ✅ 폴더 구조 (ui, model, lib, api)
- ✅ 보일러플레이트 코드
- ✅ TypeScript 타입 정의
- ✅ Index.ts (public API)
- ✅ README.md (문서)

---

## 🚀 사용 방법

### 방법 1: 명령어 실행

```bash
/fsd-generate
```

그러면 다음을 입력하도록 안내됩니다:

```
? Feature 또는 Widget 이름을 입력하세요:
> new-feature

? 어느 레이어에 생성할까요?
❯ features
  widgets
  entities

? UI 컴포넌트를 생성할까요?
❯ Yes
  No

? Store/State management이 필요할까요?
❯ No
  Zustand
  Redux
```

### 방법 2: 프롬프트로 직접 지정

```bash
/fsd-generate feature-name features yes zustand
```

---

## 📂 생성되는 구조

### 기본 Feature
```bash
/fsd-generate my-feature features yes no
```

생성되는 폴더:
```
src/features/my-feature/
├── ui/
│   ├── MyFeature.tsx
│   └── index.ts
├── model/
│   ├── types.ts
│   ├── hooks.ts
│   └── index.ts
├── lib/
│   ├── constants.ts
│   ├── helpers.ts
│   └── index.ts
├── index.ts              (public API)
└── README.md
```

### Store가 있는 Feature
```bash
/fsd-generate my-feature features yes zustand
```

생성되는 폴더:
```
src/features/my-feature/
├── ui/
│   ├── MyFeature.tsx
│   └── index.ts
├── model/
│   ├── store.ts          ← Zustand store
│   ├── types.ts
│   ├── hooks.ts
│   └── index.ts
├── lib/
│   ├── constants.ts
│   ├── helpers.ts
│   └── index.ts
├── api/                  ← (선택사항)
│   ├── requests.ts
│   └── index.ts
├── index.ts
└── README.md
```

### Widget
```bash
/fsd-generate my-widget widgets yes no
```

생성되는 폴더:
```
src/widgets/my-widget/
├── ui/
│   ├── MyWidget.tsx
│   └── index.ts
├── model/
│   ├── hooks.ts
│   ├── types.ts
│   └── index.ts
├── index.ts
└── README.md
```

---

## 📝 생성되는 파일 예시

### UI Component (MyFeature.tsx)
```typescript
import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import type { MyFeatureProps } from '../model/types'

export function MyFeature({ }: MyFeatureProps) {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      {/* 콘텐츠 */}
    </motion.section>
  )
}
```

### Types (types.ts)
```typescript
export interface MyFeatureProps {
  // props 정의
}

export interface MyFeatureState {
  // state 정의
}
```

### Hooks (hooks.ts)
```typescript
import { useCallback } from 'react'

export function useMyFeature() {
  const handleAction = useCallback(() => {
    // 로직
  }, [])

  return {
    handleAction,
  }
}
```

### Store (store.ts) - Zustand
```typescript
import { create } from 'zustand'
import type { MyFeatureState } from './types'

interface MyFeatureStore extends MyFeatureState {
  // actions
}

export const useMyFeatureStore = create<MyFeatureStore>((set) => ({
  // initial state
  // actions
}))
```

### Public API (index.ts)
```typescript
export { MyFeature } from './ui/MyFeature'
export { useMyFeature } from './model/hooks'
export type { MyFeatureProps, MyFeatureState } from './model/types'
```

### README.md
```markdown
# MyFeature

MyFeature의 설명...

## 구조

- **ui/**: 컴포넌트
- **model/**: 상태 및 비즈니스 로직
- **lib/**: 유틸 함수 및 상수

## 사용

\`\`\`tsx
import { MyFeature } from '@/features/my-feature'

export function App() {
  return <MyFeature />
}
\`\`\`
```

---

## 🔧 고급 옵션

### API Layer 추가
```bash
/fsd-generate data-fetch features yes no api
```

생성:
```
src/features/data-fetch/
├── api/
│   ├── requests.ts
│   └── index.ts
├── ui/
├── model/
└── ...
```

### Custom 경로
생성된 파일을 다른 경로로 이동할 수 있습니다:

```bash
# 생성 후
mv src/features/my-feature src/entities/my-entity
```

---

## 📋 Workflow 예시

### 1단계: Feature 생성
```bash
/fsd-generate filters features yes zustand
```

### 2단계: 파일 수정
```
src/features/filters/
├── ui/Filters.tsx       # ← UI 작성
├── model/store.ts       # ← 상태 로직 작성
├── model/types.ts       # ← 타입 정의
└── model/hooks.ts       # ← 커스텀 훅 작성
```

### 3단계: App에 추가
```typescript
// src/App.tsx
import { Filters } from '@/features/filters'

export function App() {
  return (
    <main>
      <Filters />
    </main>
  )
}
```

### 4단계: 테스트
```bash
npm run dev
# http://localhost:3000에서 확인
```

---

## 💡 팁

### 빠른 시작 템플릿
```bash
# 간단한 컴포넌트
/fsd-generate simple-component features yes no

# 데이터 페칭
/fsd-generate data-service features yes no api

# 상태 관리
/fsd-generate counter features yes zustand
```

### 파일 이름 규칙
- 컴포넌트: PascalCase (MyFeature.tsx)
- 타입: PascalCase (MyFeatureProps)
- 함수/훅: camelCase (useMyFeature)
- 상수: UPPER_SNAKE_CASE (MY_CONSTANT)

### Import 경로
```typescript
// ✅ Good
import { MyFeature } from '@/features/my-feature'

// ❌ Bad
import { MyFeature } from '@/features/my-feature/ui/MyFeature'
```

---

## 🎯 다음 단계

생성 후:

1. **파일 수정**
   - UI 로직 작성
   - 상태 정의
   - 타입 확인

2. **테스트**
   ```bash
   npm run build
   npm run dev
   ```

3. **문서 업데이트**
   - README.md 보충
   - 사용 예시 추가

4. **Validation**
   ```bash
   /fsd-validate
   ```

---

## 🚨 문제 해결

### Q: 파일이 생성되지 않음
```bash
# 폴더 권한 확인
ls -la src/features/

# 수동 생성
mkdir -p src/features/my-feature/{ui,model,lib}
```

### Q: TypeScript 에러
```bash
# 빌드 확인
npm run build

# 타입 확인
npx tsc --noEmit
```

### Q: 파일명이 마음에 안 들 때
생성 후 수동으로 이름 변경:
```bash
mv src/features/my-feature src/features/my-renamed-feature
# import 경로 업데이트 필요
```

---

## 📚 참고

- **FSD 구조**: `/fsd-analyze`
- **마이그레이션 가이드**: `/fsd-migrate`
- **검증**: `/fsd-validate`

---

**FSD 리소스**: https://feature-sliced.design/

🔍 Generated with Claude Code
