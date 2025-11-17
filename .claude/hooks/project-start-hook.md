# Project Start Hook - Smart Conditional Execution with Auto-Invocation

스마트 조건부 실행으로 최적화된 프로젝트 시작과 자동 에이전트 호출을 구현합니다.

## 🚀 Hook Configuration

When `/project-start` is triggered:

```json
{
  "name": "project-start-hook",
  "type": "smart-conditional-execution",
  "description": "package.json 변경 여부를 감지하여 필요한 작업만 수행",
  "triggers": [
    "/project-start 명령어 실행",
    "package.json 변경 감지",
    "빌드 에러 발생"
  ]
}
```

## 🔍 Execution Logic (스마트 조건부)

### Phase 1️⃣: 변경 감지 (Detection Phase)

```javascript
// 감지 우선순위

if (package.json !== package-lock.json) {
  // 새 라이브러리 추가됨
  EXECUTE → npm install
} else if (!node_modules exist) {
  // node_modules 없음
  EXECUTE → npm install
} else {
  // package.json 변경 없음
  SKIP → npm install
}
```

**감지 항목:**
- ✅ package.json 버전 변경
- ✅ 새 의존성 추가
- ✅ 기존 의존성 제거
- ✅ node_modules 폴더 누락
- ✅ package-lock.json 불일치

### Phase 2️⃣: 빌드 (Build Phase)

```javascript
if (npm run build FAILS) {
  // 빌드 실패 시 자동 복구
  EXECUTE → npm install (재설치)
  RETRY → npm run build (재시도)
  REPORT → 에이전트 상세 분석
} else {
  // 빌드 성공
  PROCEED → npm run dev
}
```

### Phase 3️⃣: 개발 서버 (Development Phase)

```javascript
if (npm run dev SUCCESS) {
  TRIGGER → lint-error-fixer 에이전트
} else {
  REPORT → 포트 충돌 또는 에러
}
```

### Phase 4️⃣: 에이전트 분석 (Analysis Phase)

```javascript
// 자동으로 lint-error-fixer 에이전트 실행
ANALYZE → {
  의존성 상태,
  TypeScript 에러,
  보안 취약점,
  빌드 결과,
  개발 서버 상태,
  코드 구조,
  성능 메트릭,
  권장사항
}
```

## 📊 Real-time Decision Tree

```
/project-start 실행
    ↓
┌────────────────────────────┐
│  package.json 변경 감지?    │
└─┬──────────────────────┬───┘
  │ YES                  │ NO
  ↓                      ↓
npm install            스킵
  ↓                      ↓
  └──────┬───────────────┘
         ↓
   npm run build
    ↓  ↓
  성공 실패
   ↓   ↓
  ✓   npm install + 재시도
   ↓   ↓
  npm run dev ← 모두 연결
    ↓
 ✓ 에이전트 실행
    ↓
 상세 분석 보고서
```

## ✨ Agent Auto-Invocation

### When Triggered

프로젝트 실행이 완료되면 **자동으로** lint-error-fixer 에이전트가 실행됩니다:

```
npm run dev 성공
    ↓
자동으로 에이전트 호출
    ↓
다음을 분석:
- 의존성 상태 및 버전
- TypeScript 컴파일 상태
- npm audit 보안 취약점
- 빌드 시간 및 번들 크기
- 개발 서버 포트 및 HMR
- 코드 구조 및 아키텍처
- 성능 메트릭
- 권장사항
```

### Agent Configuration

```json
{
  "subagent_type": "lint-error-fixer",
  "auto_trigger": true,
  "trigger_condition": "npm run dev SUCCESS",
  "description": "스마트 조건부 실행 후 자동 프로젝트 분석",
  "analysis_depth": "comprehensive",
  "report_format": "detailed"
}
```

## Auto-Execution Triggers

The lint-error-fixer agent automatically runs when:

- `/project-start` command is executed
- Project files are modified (rebuild triggered)
- Dependencies are updated
- Configuration files change

## What Gets Checked

✅ **의존성**
- npm/pnpm 패키지 설치 상태
- 버전 호환성
- 취약점 검사

✅ **코드 품질**
- TypeScript 타입 에러
- Linting 이슈
- Import 문제

✅ **성능**
- 빌드 시간
- 번들 크기
- 모듈 변환 상태

✅ **보안**
- npm audit 취약점
- 의존성 보안 업데이트
- 환경 변수 검증

✅ **서버 상태**
- 개발 서버 포트
- HMR 연결
- 브라우저 자동 열기

## Output Format

```
═══════════════════════════════════════════════════════════════
프로젝트 분석 완료 보고서
═══════════════════════════════════════════════════════════════

프로젝트 상태: ✅ HEALTHY / ⚠️ WARNING / ❌ ERROR

1. 의존성 상태
   - 설치된 패키지: 45개
   - 취약점: 1개 (낮은 심각도)

2. 빌드 상태
   - 결과: ✅ 성공
   - 시간: 935ms
   - 번들 크기: 302.66 kB (gzip: 98.11 kB)

3. 개발 서버
   - 상태: 🟢 실행 중
   - 주소: http://localhost:3000
   - HMR: ✅ 활성화

4. 발견된 문제 (있으면)
   - TypeScript 에러: 80+ (무해)
   - 보안 취약점: 1개 (낮음)

5. 권장사항
   - npm audit fix --force 실행
   - vite.config.ts 정리 (선택)
```

## Manual Trigger

명령어로 수동 호출:

```bash
/project-start
```

또는 에이전트 직접 호출:

```bash
# CLI에서
claude-code run-agent lint-error-fixer --prompt "프로젝트 검사..."
```

## Customization

기본 검사 항목을 수정하려면:

1. `.claude/hooks/project-start-hook.md` 파일 수정
2. `prompt` 섹션에서 검사 항목 추가/제거
3. 파일 저장 후 `/project-start` 실행

## Integration with CI/CD

GitHub Actions 또는 다른 CI/CD에서 사용:

```yaml
name: Project Validation
on: [push, pull_request]
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run lint-error-fixer
        run: npm run dev
        # /project-start가 자동으로 lint-error-fixer 호출
```

---

**Status**: ✅ Active (자동 호출 활성화됨)
**Last Updated**: 2025-11-17
**Agent**: lint-error-fixer
