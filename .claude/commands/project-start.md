# Project Start - Smart Build & Validation

코드 수정 후 프로젝트를 자동으로 실행합니다.
**빌드 → 검증 → 오류 없으면 로컬 실행** 의 자동화된 흐름으로 안전한 개발 환경을 제공합니다.

## 실행 흐름

```
┌─────────────────────────────────────────┐
│ 1️⃣ yarn build (프로젝트 빌드)            │
└──────────────┬──────────────────────────┘
               │
               ├─ 빌드 성공?
               │
      ┌────────▼──────────┐
      │ 2️⃣ 오류 검증        │
      │ - TypeScript 체크  │
      │ - Import 경로 확인  │
      └────────┬───────────┘
               │
          ┌────▼────┐
          │  오류?   │
          └┬───────┬─┘
           │       │
        YES       NO
           │       │
        ┌──▼──┐  ┌─▼─────────────┐
        │오류  │  │ 3️⃣ yarn dev  │
        │보고  │  │  (로컬 실행)  │
        └─────┘  └───────────────┘
                       │
                  http://localhost:3000
```

---

## 단계별 동작

### 1️⃣ 빌드 단계
- `yarn build` 실행
- 빌드 실패 시 자동으로 `yarn install` 재시도 후 재빌드
- 빌드 완료 후 다음 단계로 진행

### 2️⃣ 검증 단계
- **TypeScript 타입 체크** (`npx tsc --noEmit`)
  - 타입 에러 감지 시 오류 보고
  - 수정 필요한 부분을 명시

- **Import 경로 검증**
  - 잘못된 import 감지
  - 해당 파일과 라인 번호 표시

- **진단 정보 수집**
  - 코드 구조 분석
  - 안전성 검사

### 3️⃣ 로컬 실행 단계
- 모든 검증 통과 시 `yarn dev` 실행
- 개발 서버 자동 시작 (http://localhost:3000)
- HMR(Hot Module Replacement) 활성화

---

## 사용 방법

### 명령어 실행
```bash
# VS Code Command Palette에서:
# Cmd+Shift+P (Mac) 또는 Ctrl+Shift+P (Windows)
# "project-start" 검색
# Enter
```

또는 터미널에서:
```bash
yarn start
```

---

## 시나리오별 실행 결과

### ✅ 시나리오 1: 모든 검증 통과
```
✓ 빌드 성공
✓ TypeScript 타입 체크 통과
✓ Import 경로 검증 통과
✓ yarn dev 실행 시작

http://localhost:3000 에서 개발 서버 시작됨
```

### ❌ 시나리오 2: 타입 에러 발견
```
✓ 빌드 성공
✗ TypeScript 타입 에러 발견!

오류 보고서:
─────────────────────────────
❌ src/features/hero/ui/Hero.tsx:10
   Type 'string' is not assignable to type 'number'
─────────────────────────────

yarn dev 실행 중단
→ 오류를 수정 후 다시 /project-start 실행하세요
```

### ❌ 시나리오 3: Import 경로 오류
```
✓ 빌드 성공
✗ Import 경로 검증 실패

오류 보고서:
─────────────────────────────
❌ src/pages/portfolio/ui/PortfolioPage.tsx
   Cannot find module '/src/features/career/index.ts'
─────────────────────────────

yarn dev 실행 중단
→ 해당 파일이 존재하는지 확인 후 다시 실행하세요
```

---

## 주요 기능

✅ **자동 빌드**
- `yarn build` 자동 실행
- 빌드 실패 시 의존성 재설치 후 재시도

✅ **자동 검증**
- TypeScript 타입 체크
- Import 경로 검증
- 코드 진단

✅ **오류 보고**
- 명확한 오류 메시지
- 파일명과 라인 번호 표시
- 오류 수정 가이드

✅ **자동 실행**
- 검증 통과 시 `yarn dev` 자동 실행
- 개발 서버 즉시 시작

---

## 개발 워크플로우

```
1. 코드 수정
   ↓
2. /project-start 실행
   ↓
3. 자동 빌드 → 검증 → 실행
   ├─ ✓ 오류 없음 → 개발 시작
   └─ ✗ 오류 발견 → 보고서 확인 → 수정 → 다시 /project-start
```

---

## 개발 서버 종료

개발 서버를 종료하려면:
```bash
Ctrl+C
```

---

## 빠른 참조

| 명령어 | 설명 |
|------|------|
| `/project-start` | 전체 빌드-검증-실행 프로세스 |
| `yarn build` | 프로젝트 빌드만 수행 |
| `yarn dev` | 개발 서버만 시작 |
| `npx tsc --noEmit` | TypeScript 타입 검사만 수행 |

