# 🚀 빠른 시작 가이드

프론트엔드 전문가 에이전트의 최적화 후 프로젝트를 다루는 방법입니다.

## 📦 설치 및 실행

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 시작 (HMR 활성화)
npm run dev
# → http://localhost:3001 에서 접속

# 3. 프로덕션 빌드
npm run build

# 4. 빌드 미리보기
npm run preview
```

---

## 📝 콘텐츠 수정 (가장 많이 사용하는 작업)

### 1. 소셜 링크 수정
**파일**: `src/data/social.ts`

```typescript
export const socialLinks: SocialLink[] = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:your.email@example.com",  // ← 여기 수정
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/your-username",  // ← 여기 수정
  },
  // ...
];
```

### 2. 개인정보 및 설정 수정
**파일**: `src/data/site.ts`

```typescript
export const siteConfig = {
  name: "Your Name",  // ← 여기 수정
  description: "Frontend Developer & Creative Problem Solver",  // ← 여기 수정
  url: "https://yourportfolio.com",  // ← 여기 수정
  // ...
};

export const heroCopy = {
  title: "Frontend Developer",  // ← 여기 수정
  subtitle: "멋진 웹 경험을 만드는 개발자입니다",  // ← 여기 수정
  // ...
};
```

### 3. 기술 스택 수정
**파일**: `src/data/skills.ts`

```typescript
export const skillsData: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS"],  // ← 여기 수정
  },
  // ...
];
```

### 4. 프로젝트 추가/수정
**파일**: `src/data/projects.ts`

```typescript
export const projectsData: Project[] = [
  {
    title: "프로젝트 이름",  // ← 여기 수정
    description: "프로젝트 설명",  // ← 여기 수정
    tech: ["React", "TypeScript"],  // ← 여기 수정
    gradient: "from-blue-500 to-cyan-500",  // ← 색상 선택
    githubUrl: "https://github.com/...",  // ← 여기 수정
    demoUrl: "https://...",  // ← 여기 수정
  },
  // ...
];
```

---

## 🎨 색상 선택 가이드 (Tailwind CSS)

프로젝트 카드의 `gradient` 필드에 사용:

### 추천 색상 조합

**파란 톤**
```
from-blue-500 to-cyan-500
from-blue-600 to-indigo-500
```

**보라 톤**
```
from-purple-500 to-pink-500
from-indigo-500 to-purple-500
```

**주황 톤**
```
from-orange-500 to-red-500
from-amber-500 to-orange-500
```

**초록 톤**
```
from-green-500 to-emerald-500
from-teal-500 to-cyan-500
```

**분홍 톤**
```
from-pink-500 to-rose-500
from-rose-500 to-pink-500
```

---

## 🔧 개발 팁

### 1. TypeScript 타입 확인

개발 중 타입 오류를 확인하려면:

```bash
# TypeScript 컴파일 확인
npx tsc --noEmit

# 개발 서버는 타입 오류를 표시하지 않으므로 필요시 수동 확인
```

### 2. Hot Module Replacement (HMR)

파일 저장 시 자동으로 리로드됩니다. 만약 작동하지 않으면:

```bash
# 브라우저 새로고침 (Ctrl+R 또는 Cmd+R)
# 개발 서버 재시작 (터미널에서 npm run dev)
```

### 3. 컴포넌트 추가

새로운 섹션을 추가하려면:

```bash
# 1. 컴포넌트 생성
src/components/NewSection.tsx

# 2. App.tsx에 import 및 추가
import { NewSection } from "./components/NewSection";

export default function App() {
  return (
    <div>
      {/* ... 기존 컴포넌트 ... */}
      <NewSection />  {/* ← 여기 추가 */}
    </div>
  );
}

# 3. 필요시 데이터 파일 생성
src/data/newSection.ts
```

---

## 🚨 일반적인 문제 해결

### Q: 포트 3000이 이미 사용 중입니다
**A**: Vite가 자동으로 다음 포트(3001, 3002...)를 선택합니다. 터미널 로그를 확인하세요.

### Q: 파일 수정 후 변경사항이 반영되지 않습니다
**A**: 브라우저를 새로고침하거나 개발 서버를 재시작하세요.

### Q: 새로운 npm 패키지를 추가하고 싶습니다
**A**: `npm install package-name` 후 서버를 재시작하세요.

### Q: 타입 오류가 많습니다
**A**: `tsconfig.json`의 `strict: true` 때문입니다.
- 영구적으로 해제하려면: `strict: false` 설정
- 권장: 타입을 정확히 정의하여 수정

---

## 📤 배포 준비

### 1. 환경 변수 설정

```bash
# .env.local 파일 생성 (.env.example 참조)
cp .env.example .env.local

# 실제 값으로 수정
VITE_GITHUB_URL=https://github.com/your-username
VITE_LINKEDIN_URL=https://linkedin.com/in/your-profile
# ...
```

### 2. 빌드 최적화 확인

```bash
# 프로덕션 빌드 생성
npm run build

# 출력 확인
# build/
# ├── index.html
# ├── assets/
# │   ├── index-*.js
# │   └── index-*.css
```

### 3. 배포 옵션

#### Vercel (권장)
```bash
# 1. Vercel 계정 생성 (vercel.com)
# 2. GitHub 저장소 연결
# 3. 자동 배포 활성화
```

#### Netlify
```bash
# 1. Netlify 계정 생성
# 2. GitHub 저장소 연결
# 3. 빌드 명령: npm run build
# 4. 배포 디렉토리: build
```

#### GitHub Pages
```bash
# vite.config.ts에 base 설정
export default {
  base: '/portfolio/',  // 저장소 이름
  // ...
}

# 배포
npm run build
# build 폴더를 GitHub Pages에 배포
```

---

## 📊 성능 측정

### Lighthouse 테스트

```bash
# Chrome DevTools 열기 (F12)
# Lighthouse 탭 → Generate report
```

### 목표 점수
```
Performance: 90+
Accessibility: 90+
Best Practices: 90+
SEO: 95+
```

---

## 📚 파일 구조 이해

```
src/
├── components/
│   ├── Header.tsx        # 고정 헤더 네비게이션
│   ├── Hero.tsx          # 메인 랜딩 섹션
│   ├── About.tsx         # 자기소개 섹션
│   ├── Skills.tsx        # 기술 스택 섹션
│   ├── Projects.tsx      # 포트폴리오 섹션
│   ├── Contact.tsx       # 연락처 섹션
│   ├── ui/               # shadcn 컴포넌트
│   └── figma/            # 커스텀 유틸리티
│
├── data/                 # 📝 콘텐츠 데이터
│   ├── site.ts          # 사이트 전역 설정
│   ├── social.ts        # 소셜 미디어 링크
│   ├── skills.ts        # 기술 스택
│   └── projects.ts      # 프로젝트
│
├── utils/               # 유틸리티 함수
│   └── scroll.ts        # 스크롤 관련 함수
│
├── App.tsx              # 루트 컴포넌트
├── main.tsx             # 진입점
└── index.css            # 전역 스타일

root/
├── tsconfig.json        # TypeScript 설정
├── vite.config.ts       # Vite 설정
├── tailwind.config.ts   # Tailwind 설정
├── .gitignore           # Git 무시 목록
├── .env.example         # 환경 변수 템플릿
└── package.json         # 의존성 및 스크립트
```

---

## 🎯 다음 단계

### 우선순위
1. **지금**: 콘텐츠 수정 (소셜 링크, 프로젝트 등)
2. **내일**: 로컬에서 테스트
3. **일주일**: Vercel 배포
4. **2주**: 다크모드 추가
5. **1개월**: 성능 최적화

### 학습 자료
- 🔗 [React 공식 문서](https://react.dev)
- 🔗 [TypeScript Handbook](https://www.typescriptlang.org/docs)
- 🔗 [Tailwind CSS Docs](https://tailwindcss.com/docs)
- 🔗 [Vite Guide](https://vitejs.dev/guide)

---

## ❓ 도움이 필요하신가요?

### 리소스
- 📖 `IMPROVEMENTS.md` - 상세 개선 내역
- 📖 `FRONTEND_EXPERT_REVIEW.md` - 전문가 코드 리뷰
- 📖 `CLAUDE.md` - 프로젝트 가이드

### 일반적인 질문
- TypeScript 오류? → `tsconfig.json` 설정 확인
- 스타일 문제? → `tailwind.config.ts` 확인
- 성능 문제? → Lighthouse 테스트 실행

---

**행운을 빕니다! 멋진 포트폴리오를 만들어보세요! 🚀**
