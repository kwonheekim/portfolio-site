# project-start 명령어 업데이트 가이드

**업데이트 일시**: 2025-11-17
**버전**: 2.0 (에이전트 검증 기능 추가)

---

## 📋 업데이트 내용

### 이전 버전 (1.0)
```
/project-start
    ↓
빌드 + 개발 서버 실행
    ↓
npm run dev 시작
```

**문제점**: 오류가 있어도 개발 서버가 실행됨

### 새로운 버전 (2.0)
```
/project-start
    ↓
빌드 (필요 시만)
    ↓
lint-error-fixer 에이전트 검증
    ↓
✓ 오류 없음 → npm run dev (로컬 실행)
✗ 오류 발견 → 오류 보고서 (실행 중단)
```

**개선점**: 오류를 먼저 감지하고 검증된 상태에서만 실행

---

## 🎯 주요 변경사항

### 1️⃣ 에이전트 검증 추가 ✨

**빌드 후 자동으로 lint-error-fixer 에이전트가 검증:**

```
검증 항목:
✅ TypeScript 타입 에러
✅ Import 경로 유효성
✅ 미사용 변수/함수
✅ 의존성 문제
✅ 보안 취약점
✅ 코드 품질
✅ ESLint 규칙
```

### 2️⃣ 조건부 실행 로직 업데이트

```
이전:
npm install → npm run build → npm run dev (항상)

새로운:
package.json 변경? → YES: npm install, NO: 스킵
         ↓
    npm run build
         ↓
    lint-error-fixer 검증
         ↓
    오류 없음? → YES: npm run dev, NO: 오류 보고
```

### 3️⃣ 오류 처리 개선

**오류 발견 시:**
- 개발 서버 실행 중단
- 상세한 오류 보고서 제시
- 수정 방법 안내
- 수정 후 다시 실행 가능

---

## 📚 사용 방법

### 기본 사용법 (동일)
```bash
/project-start
```

### VS Code에서 실행
1. `Cmd+Shift+P` (Mac) 또는 `Ctrl+Shift+P` (Windows)
2. "project-start" 검색
3. Enter 클릭

### 실행 결과

#### ✅ 모든 검증 통과
```
✓ npm install (필요 시만)
✓ npm run build
✓ lint-error-fixer 검증 (오류 없음)
✓ npm run dev 시작

개발 서버 준비 완료:
http://localhost:3000
```

#### ❌ 오류 발견
```
✓ npm install (필요 시만)
✓ npm run build
✗ lint-error-fixer 검증 (오류 발견)

오류 보고서:
─────────────────────────────────
❌ src/features/hero/ui/Hero.tsx:10
   - Type 'string' is not assignable to type 'number'
   - 수정: heroCopy.title의 타입 확인

❌ src/App.tsx:5
   - Module not found: Cannot find module
   - 수정: Import 경로 확인

─────────────────────────────────

npm run dev 실행 안 함 (중단됨)
```

---

## 🔄 워크플로우 비교

### 이전 (1.0)
```
코드 수정
    ↓
npm run build
npm run dev
    ↓
개발 서버 실행
    ↓
❌ 오류 발견 (개발 중)
    ↓
수정 후 다시 시작
```

### 새로운 (2.0)
```
코드 수정
    ↓
/project-start
    ↓
✓ 검증 통과 → 개발 서버 실행 ✅
✗ 오류 발견 → 보고서 확인 후 수정
    ↓
/project-start (다시 실행)
```

---

## 📊 장점 분석

| 항목 | 이전 | 새로운 |
|------|------|--------|
| **실행 속도** | 항상 최소 3-5초 | 필요 시만 (0.5-1초 가능) |
| **오류 발견 시점** | 개발 중 | 실행 전 |
| **안전성** | 낮음 (오류 상태 실행) | 높음 (검증 후 실행) |
| **디버깅** | 어려움 (런타임 에러) | 쉬움 (상세 보고서) |
| **개발 효율** | 낮음 | 높음 |

---

## 🎯 예상 효과

### 1. 개발 속도 향상 ⚡
- 불필요한 재시작 감소
- 오류 대기 시간 제거
- 검증된 상태에서만 실행

### 2. 코드 품질 향상 📈
- 빌드 에러 자동 감지
- TypeScript 오류 조기 발견
- 보안 취약점 사전 차단

### 3. 개발 경험 개선 🚀
- 명확한 오류 메시지
- 자동 수정 제안
- 한 번의 명령으로 모든 처리

### 4. 팀 협업 효율성 증대 👥
- 오류 코드 공유 방지
- 일관된 검증 기준
- 품질 관리 자동화

---

## ⚠️ 주의사항

### 1. 개발 서버가 시작되지 않는 경우
```
→ 오류 보고서를 확인하세요
→ 오류 수정 후 /project-start 다시 실행
```

### 2. 오류가 아닌데 경고가 나오는 경우
```
→ ESLint 규칙 조정 필요
→ .eslintrc.json 파일 수정
```

### 3. 특정 오류를 무시하고 싶은 경우
```typescript
// 코드 상단에 다음 주석 추가
// @ts-ignore
const variable: any = null;

// 또는
// eslint-disable-next-line
const variable: any = null;
```

---

## 🔧 설정 파일

### .claude/commands/project-start.md
전체 동작 설명 및 시나리오 가이드

### 관련 파일들
- `vite.config.ts` - 빌드 설정
- `tsconfig.json` - TypeScript 설정
- `package.json` - 의존성 및 스크립트

---

## 📞 문제 발생 시

### 문제: lint-error-fixer 검증이 느림
**해결**: 에이전트가 처음 실행될 때 초기화 시간이 필요합니다.

### 문제: 오류 없는데 검증 실패
**해결**: 종속성을 다시 설치해보세요
```bash
rm -rf node_modules package-lock.json
npm install
/project-start
```

### 문제: npm run dev가 시작되지 않음
**해결**: 포트 3000이 이미 사용 중일 수 있습니다
```bash
# 기존 프로세스 종료 후 다시 시도
/project-start
```

---

## 🎉 결론

**project-start 2.0은 완전히 자동화되고 검증된 개발 환경을 제공합니다.**

한 번의 명령으로:
- ✅ 스마트한 빌드
- ✅ 자동 오류 검증
- ✅ 안전한 실행

개발에만 집중하세요! 🚀
