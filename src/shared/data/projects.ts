export interface Project {
  id: string;
  title: string;
  period: string;
  role: string;
  tech: string[];
  gradient: string;
  company?: {
    name: string;
    position?: string;
    responsibilities?: string;
  };

  background: {
    issue: string;
    challenge?: string;
  };

  solution: {
    approach: string;
    keyPoints?: string[];
  };

  results: {
    metrics: string[];
    impact: string;
  };

  githubUrl?: string;
  demoUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "slack-onboarding-bot",
    title: "슬랙 온보딩 AI 봇(MVP) – LangChain + Claude Code 워크플로우",
    period: "2025.03 ~ 2025.08",
    role: "FE 개발 (PoC → 파일럿 운영)",
    tech: ["Slack Bolt", "OpenAI SDK", "Claude Code", "LangChain", "GitHub Actions"],
    gradient: "from-indigo-500 to-purple-500",
    company: {
      name: "(주)플필",
      position: "대리",
      responsibilities: "PoC 기획 및 파일럿 운영",
    },
    background: {
      issue: "스타트업에서 온보딩 문서가 여러 도구(노션, 컨플루언스 등)에 분산되어 새로운 팀원들이 찾기 어렵고, 동료들에게 반복적인 Q&A가 발생해 팀 생산성 저하",
      challenge: "AI/RAG 기술을 현업에 빠르게 검증하면서, 기존 온보딩 프로세스를 개선해야 하는 요구사항과 기술 도입 일정의 충돌",
    },
    solution: {
      approach: "Slack 기반 AI 봇 MVP를 3일 이내에 구축하여 온보딩 문서 검색 및 Q&A 자동화",
      keyPoints: [
        "문서 수집 및 정제: 직무별(기획/디자인/개발/CS) 필수 문서 및 FAQ 선별, 정책/가이드/위키 정제",
        "AI 파이프라인 구성: 정제된 문서 임베딩 → LangChain 체인 구성으로 RAG 시스템 구현",
        "Slack 통합: Slack Bolt로 /onboard 커맨드, 모달 체크리스트, 스레드 Q&A 구현",
        "Claude Code 활용: 바이브 코딩으로 서브 에이전트/스킬/커맨드 빠르게 프로토타입",
      ],
    },
    results: {
      metrics: [
        "초기 MVP 구축: 바이브 코딩 활용으로 3일 이내 완성",
        "온보딩 효율 개선: 온보딩 탐색 시간 40% 단축, 반복 질의 감소",
        "모듈화 및 확장성: 에이전트·스킬·커맨드 모듈화로 기능 확장/교체 용이",
      ],
      impact: "AI 기반 온보딩 자동화로 팀의 인사 담당 부담 경감 및 신규 입사자 대기 시간 단축",
    },
  },
  {
    id: "backoffice-system",
    title: "고객 정보 관리 및 대시보드 개발 운영 (BackOffice)",
    period: "2024.04 ~ 2024.08",
    role: "FE 개발 (요구사항 수집 → 대시보드 UX 설계 → 기능 구현)",
    tech: ["React", "TypeScript", "React Query", "Recoil", "Axios", "Recharts"],
    gradient: "from-cyan-500 to-blue-500",
    company: {
      name: "(주)플필",
      position: "대리",
      responsibilities: "운영팀 백오피스 시스템 개발",
    },
    background: {
      issue: "플랫폼 운영 과정에서 고객 정보 수정, 결제 수단, 환불 처리 등 CS 업무가 발생할 때마다 개발자에게 직접 수정 요청을 해야 했으며, 백오피스가 없어 운영팀이 스스로 처리 불가",
      challenge: "운영팀의 반복적인 개발 의존으로 개발 리소스 소모, 오류 발생 가능성 증가, 응대 속도 저하",
    },
    solution: {
      approach: "운영팀이 직접 처리 가능한 전문 백오피스 시스템 개발 (고객 관리·결제/정산·대시보드)",
      keyPoints: [
        "요구사항 수집: 운영·CS 팀 인터뷰로 실제 업무 플로우와 불편 지점 파악",
        "관리자 UX 설계: SaaS형 관리자 페이지 패턴 기준으로 정보 구조·화면 흐름 설계",
        "핵심 기능 구현: 대시보드(KPI 시각화), 유저 관리(검색/필터/정렬), 멤버십 관리, 결제 관리(승인/취소/환불/정산)",
        "권한 및 감시 로그: 변경 이력 추적 및 유효성 검증으로 비개발자도 안전하게 운영",
      ],
    },
    results: {
      metrics: [
        "CS 처리 속도 개선: 고객정보 수정·결제 확인/환불 등을 백오피스에서 즉시 처리 → 개발자 전달 및 재작업 감소",
        "운영 자율성 강화: 권한·유효성 검증·활동 로그로 비개발자도 안전하게 처리, 변경 이력 추적 가능",
        "데이터 가시성: 대시보드로 일/주/월 KPI를 실시간 모니터링해 이슈 감지 및 의사결정 리드타임 단축",
      ],
      impact: "백오피스 기능 1차 오픈(MVP)으로 반복 수작업 제품화, 운영팀의 업무 자율성 강화 및 개발팀의 운영 부담 경감",
    },
  },
  {
    id: "mobx-recoil-migration",
    title: "MobX → Recoil, React Query 상태관리 마이그레이션",
    period: "2025.01 ~ 2025.04",
    role: "리드 FE (상태 관리 구조 재설계, 비동기 로직 개선)",
    tech: ["Recoil", "React Query", "TypeScript", "React"],
    gradient: "from-blue-500 to-cyan-500",
    company: {
      name: "(주)플필",
      position: "대리",
      responsibilities: "상태관리 전략 수립 및 마이그레이션 주도",
    },
    background: {
      issue: "서비스 규모 확대로 MobX 전역 상태와 비동기 로직이 복잡하게 얽혀 오류 추적과 신규 개발 속도 저하, 상태 흐름 파악 난이도로 협업 어려움",
      challenge: "팀원 증가로 \"어디서 어떤 상태가 바뀌는지\" 이해하는 데 시간이 소요되고 상태 흐름이 복잡해져 버그 재현 및 분석 어려움",
    },
    solution: {
      approach: "로컬/서버 상태를 분리하고 비동기 흐름을 표준화하기 위해 MobX에서 Recoil + React Query로 마이그레이션",
      keyPoints: [
        "상태관리 전략: MobX 구조 분석 및 로컬/서버 상태 분리 방향 정의",
        "마이그레이션 설계: Recoil + React Query 조합 선정 및 로드맵 수립, 기존 MobX 스토어를 점진적으로 대체 가능하도록 구조 설계",
        "핵심 구현: Recoil atom/selector 설계, 공통 query/hooks/상태 관리 패턴 직접 구현, 중복 비동기 로직 공통화",
        "팀 협업: 상태 관리 컨벤션, 디렉터리 구조, atom/쿼리 가이드 문서화",
      ],
    },
    results: {
      metrics: [
        "상태 구조 단순화: MobX 전역 스토어를 Recoil atom/selector로 재구성해 화면별 필요 상태만 참조",
        "비동기 로직 표준화: React Query 기반 서버 상태 일원화로 캐싱·리패칭·로딩/에러 처리 공통화",
        "개발 속도 및 디버깅: 상태 변경 지점을 명확히 해 버그 재현/분석 시간 단축, 신규 기능 개발 개선",
      ],
      impact: "상태 관리 컨벤션 문서화로 신규 개발자의 러닝 커브 단축 및 코드 리뷰 기준 통일",
    },
  },
  {
    id: "react-spa-renewal",
    title: "WordPress → React SPA 마이그레이션",
    period: "2022.12 ~ 2023.04",
    role: "FE 개발 (2인 중 1) – 아키텍처 설계, 공통 컴포넌트 체계화, 성능 최적화",
    tech: ["React", "JavaScript", "styled-components", "Axios"],
    gradient: "from-purple-500 to-pink-500",
    company: {
      name: "(주)플필",
      position: "대리",
      responsibilities: "SPA 리뉴얼 및 기술 아키텍처 설계",
    },
    background: {
      issue: "기존 WordPress 환경에서는 페이지 단위 기능 확장이 어렵고, 플러그인과 스크립트가 누적되면서 DOM 조작 위주의 산발적 코드가 계속 쌓이는 상태",
      challenge: "신규 기능 추가 시마다 기존 UI와 로직을 복사·수정하며 중복 발생, 반응형 대응도 화면마다 따로 처리하면서 QA 이슈와 개발 피로도 높음",
    },
    solution: {
      approach: "React 기반 SPA로 전면 리뉴얼하여 컴포넌트 중심의 체계적인 구조 구축",
      keyPoints: [
        "코드 표준 정립: ESLint + Prettier를 통합해 팀 공통 코드 스타일·품질 기준 정립",
        "폴더 구조 및 레이어 설계: src/{assets, components, hooks, pages, services, utils, styles}로 명확히 레이어화, jsconfig 절대 경로 설정으로 모듈 결합도 감소",
        "공통 컴포넌트 체계화: Atomic Design 패턴으로 공통 컴포넌트를 체계적으로 분리",
        "디자인 시스템: styled-components + ThemeProvider로 색상·타이포그래피·반응형 규칙을 디자인 토큰으로 관리",
        "API 통신 구조: services/api 하위에 Axios 인스턴스 구성(공통 헤더, 인터셉터, 에러 처리)",
        "상태 관리 및 성능: Context API + Custom Hook으로 전역 UI 상태를 최소화, 스켈레톤 UI 적용으로 체감 성능 개선",
      ],
    },
    results: {
      metrics: [
        "개발 생산성 및 유지보수 효율: Atomic Design과 공통 컴포넌트/디자인 토큰 도입으로 화면 개발 시 재사용성 증대, 기능 추가·수정 소요 시간 단축, 코드 중복률 감소",
        "페이지 로딩 속도 및 체감 성능: React SPA 구조 정리, 불필요한 DOM 조작 제거, 가상 스크롤/스켈레톤 UI 도입으로 평균 2.5초 → 1초 이하로 개선",
        "서비스 안정성 및 확장성: API 통신·폴더 구조·코드 스타일을 표준화해 신규 기능/페이지 추가 시에도 일관된 방식으로 개발 및 리뷰 가능",
      ],
      impact: "구조적 리뉴얼 이후 서비스 신뢰도와 사용성 향상으로 MAU 500명 → 10,000명(약 20배 성장) 달성",
    },
  },
  {
    id: "next-seo-renewal",
    title: "React SPA → Next.js SSR 마이그레이션",
    period: "2023.12 ~ 2024.04",
    role: "FE 개발 (2인 중 1) – SSR 구조 설계, 타입 시스템 도입, 성능 및 SEO 최적화",
    tech: ["Next.js", "TypeScript", "React"],
    gradient: "from-orange-500 to-red-500",
    company: {
      name: "(주)플필",
      position: "대리",
      responsibilities: "SEO 최적화 및 성능 개선 전담",
    },
    background: {
      issue: "1차 리뉴얼 후 트래픽·캠페인이 확대되며 검색·광고 유입의 중요성이 커졌지만 CSR 구조로 초기 로딩, 크롤러 인식이 지연되고 JS 단독 개발로 타입 기준이 흔들림",
      challenge: "협업 비용 증가, 검색 엔진 노출 지연, 성능 저하로 인한 사용자 이탈 증가",
    },
    solution: {
      approach: "Next.js 기반 SSR 전환, SEO 템플릿 도입, TypeScript 적용으로 2차 리뉴얼 추진",
      keyPoints: [
        "렌더링 전략: 기존 React CSR 구조를 분석하고 주요 페이지를 Next.js 기반 SSR/SSG로 재구성",
        "번들 최적화: Dynamic Import + Code Splitting 전략으로 초기 번들 크기 최소화",
        "SEO 메타 구조: 페이지 타입별 title/description, OG 태그, canonical URL, robots.txt, sitemap 구조 정의",
        "타입 시스템: TypeScript 도입 및 공용 타입 정의, ESLint + Prettier 규칙 통합, 빌드 단계에서 자동 타입·린트 체크",
        "API 분리: 백엔드 API 호출을 별도 모듈로 분리해 UI와 비즈니스 로직 분리",
      ],
    },
    results: {
      metrics: [
        "초기 로딩 속도 개선: Next.js SSR 전환 및 코드 스플리팅으로 TTFB 약 45% 개선, LCP 1.2초 단축 → 첫 화면 로딩 체감 속도 향상으로 이탈률 감소",
        "검색 노출 향상: SEO 메타 태그·sitemap·robots·구조화 데이터 적용으로 검색 노출률 약 30% 증가, 주요 키워드 자연 유입 개선",
        "협업 품질: TypeScript + 공용 타입 정의로 런타임 타입 오류 감소, QA 단계에서 발견되던 타입 불일치 이슈 감소, 코드 리뷰 효율 향상",
      ],
      impact: "ESLint/Prettier, API 레이어 분리로 일관된 코드 스타일과 구조 확보, 신규 페이지·기능 추가 시에도 동일한 패턴으로 빠르게 확장 가능",
    },
  },
  {
    id: "hr-casting-system",
    title: "캐스팅 지원자 HR 시스템 개발",
    period: "2023.04 ~ 2023.12",
    role: "FE 개발 (단독) – 업무 분석, UI 설계, 데이터 구조 설계, 시스템 개발 운영",
    tech: ["React", "TypeScript"],
    gradient: "from-indigo-500 to-blue-500",
    company: {
      name: "(주)딜리셔스랑고",
      position: "매니저",
      responsibilities: "HR 시스템 전체 개발 주도",
    },
    background: {
      issue: "엑셀·이메일·종이 프로필로 지원자 데이터를 관리하며 누락·중복 발생, 검색·분류 기능 부재로 \"누가 어디까지 진행됐는지\" 파악 어려움",
      challenge: "상태 추적이 어려워 협업 지연과 커뮤니케이션 오류 반복, 수작업으로 인한 업무 시간 과다 소요",
    },
    solution: {
      approach: "지원자 관리를 위한 통합 웹 HR 시스템 기획·개발 (공고/지원자/이력 통합 관리)",
      keyPoints: [
        "업무 분석: 디렉터·운영진 인터뷰로 AS-IS 업무 분석 → 기능 우선순위 수립(MVP 먼저)",
        "UI/UX 설계: SaaS형 관리자 페이지 패턴 기준으로 목록-상세-상태 변경이 빠른 관리 UI 정의, 반응형 화면 흐름 설계",
        "핵심 기능: 공고 등록/관리, 지원자 CRUD 및 상태 파이프라인(지원→서류합격→오디션 예정→캐스팅), 고급 검색/필터/태그, 연기 영상 업로드/미리보기",
        "데이터 및 운영: 스키마·에러 규격 합의, Axios 인스턴스/인터셉터 표준화, 권한·변경 이력·활동 로그, CSV 내보내기, 운영 가이드 문서화",
      ],
    },
    results: {
      metrics: [
        "업무 효율: 수작업 프로세스를 웹 시스템으로 통합 → 지원자 관리 시간 약 60% 단축",
        "데이터 품질: 데이터베이스화로 누락 0건 유지, 동일 인물·지원 이력 추적 용이 → 커뮤니케이션 오류 감소",
        "서비스 성과: 일일 평균 10명+ 신규 디렉터 가입, \"엑셀 대신 더 편하다\"는 평가로 플랫폼 핵심 기능화",
      ],
      impact: "수동 프로세스 전면 대체로 운영팀의 상시 업무를 제품화, 협업 효율과 서비스 경쟁력 동시 강화",
    },
  },
  {
    id: "responsive-design-system",
    title: "반응형 개발 표준화 시스템 구축 및 공통 UI 가이드",
    period: "2020.09 ~ 2022.11",
    role: "FE 개발 (기획 1, 디자인 1, 개발 본인) – 신규 설계, 표준 시스템 구축, 가이드 문서화",
    tech: ["Styled-components", "Media Query", "Flex/Grid Layout"],
    gradient: "from-teal-500 to-green-500",
    company: {
      name: "(주)딜리셔스랑고",
      position: "매니저",
      responsibilities: "반응형 시스템 설계 및 구축",
    },
    background: {
      issue: "프로젝트별로 반응형 기준이 제각각이라 UI 파편화·레이아웃 깨짐이 반복적으로 발생하고, 유사 레이아웃을 매번 새로 구현",
      challenge: "PC/Tablet/Mobile 해상도별로 화면이 깨지고, 같은 문제를 프로젝트마다 다시 해결하며 개발·유지보수 비용 증가",
    },
    solution: {
      approach: "GA로 실제 사용자 해상도 분석 → 표준 브레이크포인트 정의 → 공통 반응형 시스템 구축",
      keyPoints: [
        "반응형 전략: GA로 주요 해상도 구간(PC/Tablet/Mobile) 분석 → 표준 브레이크포인트 합의",
        "디자인 시스템: 색·폰트·간격을 ThemeProvider로 디자인 토큰화, 일관된 스케일 적용",
        "Grid/Flex 시스템: Grid/Flex 기반 그리드 시스템과 반응형 Mixin 제작, 헤더·카드·리스트 등 공통 컴포넌트화",
        "운영 가이드: 사용 예시·금지 패턴·접근성 체크리스트 정리, 실제 디바이스 크로스 테스트로 터치 영역/픽셀 오차 사전 검출",
      ],
    },
    results: {
      metrics: [
        "개발 속도 향상: 신규 화면 평균 4일 → 2일로 약 50% 단축",
        "QA 이슈 감소: 모바일/태블릿 레이아웃 이슈·접근성(탭/포커스/명도 대비) 준수율 개선",
        "운영 표준화: 새로운 프로젝트에서 도메인/SSL/배포 구성을 템플릿화, 팀 커뮤니케이션 Slack 자동 공지로 투명성 향상",
      ],
      impact: "기획·디자인·개발 간 공통 언어 정립으로 협업 마찰 감소, 전체적인 개발 생산성 및 유지보수 효율 향상",
    },
  },
  {
    id: "aws-cicd-pipeline",
    title: "AWS + GitHub Actions 기반 CI/CD 구축",
    period: "2021.04 ~ 2022.11",
    role: "FE 개발 (2인 중 1) – 인프라 설계, 배포 파이프라인 구축, 운영 관리",
    tech: ["AWS S3", "CloudFront", "Route 53", "GitHub Actions", "Slack Webhook"],
    gradient: "from-amber-500 to-orange-500",
    company: {
      name: "(주)딜리셔스랑고",
      position: "매니저",
      responsibilities: "CI/CD 파이프라인 구축 및 운영",
    },
    background: {
      issue: "외주 프로젝트에서 수동 FTP 배포로 시간이 오래 걸리고, 캐시 무효화 누락·롤백 어려움 등으로 가용성·일관성이 떨어짐",
      challenge: "도메인/SSL 세팅도 매번 반복되어 운영 피로 높음, 긴급 수정 시 배포 리드타임 길음",
    },
    solution: {
      approach: "AWS 기반 정적 호스팅 + GitHub Actions CI/CD 자동화로 배포 프로세스 표준화",
      keyPoints: [
        "배포 인프라: S3 정적 호스팅 + CloudFront CDN, Route53 도메인, ACM SSL 적용(HTTP→HTTPS 리다이렉트)",
        "환경 분리: dev/staging/prod 버킷·배포 분리, CloudFront 태그 기반 무효화",
        "CI/CD 자동화: Actions에서 lint·type-check·build 선행, 실패 시 즉시 중단",
        "모니터링 및 알림: 배포 로그·접속 로그를 CloudWatch/S3로 적재, Slack 알림 연동(성공/실패·변경 내역)",
      ],
    },
    results: {
      metrics: [
        "배포 시간 단축: 15분 → 3분으로 80% 이상 단축, 야간/긴급 수정 리드타임 대폭 감소",
        "배포 안정성: 무중단 배포 100%(CloudFront 오리진 교체/버전 롤백으로 다운타임 없음)",
        "캐시 이슈 감소: 경로/태그 기반 정밀 무효화로 잘못된 리소스 노출 0건 유지",
        "배포 품질: 빌드 전 품질 게이트 + 자동 롤백으로 배포 실패/재작업 50% 감소",
      ],
      impact: "운영 표준 정립: 신규 프로젝트 도메인·SSL·배포 구성을 템플릿화하여 온보딩 시간 50% 단축, 팀 커뮤니케이션을 Slack 자동 공지로 투명성 향상",
    },
  },
  {
    id: "lg-accessibility",
    title: "LG OLED Display 웹 접근성 개선",
    period: "2021.06 ~ 2021.08",
    role: "FE 개발 (3인 중 1) – 접근성 진단, 시맨틱 구조 개선, 성능 최적화",
    tech: ["React", "Lighthouse", "Axe DevTools", "WCAG 2.1/KWCAG"],
    gradient: "from-rose-500 to-pink-500",
    company: {
      name: "(주)딜리셔스랑고",
      position: "매니저",
      responsibilities: "웹 접근성 개선 및 시맨틱 구조 개선",
    },
    background: {
      issue: "React 마이그레이션 후 시맨틱 구조·대체 텍스트·포커스 처리 미비로 접근성 진단에서 다수 오류 발생",
      challenge: "클라이언트 요청에 따라 WCAG/KWCAG 표준 수준까지 개선이 필요했음",
    },
    solution: {
      approach: "Lighthouse/Axe로 이슈 유형 분류 & 우선순위 수립 → 체계적 개선",
      keyPoints: [
        "이슈 진단 및 우선순위: Lighthouse/Axe로 이슈 분류, 심각도 기준 우선순위 수립",
        "시맨틱 구조: header/nav/main/section/footer 등 시맨틱 태그 재정비, 적절한 ARIA(role/aria-label) 적용",
        "키보드 접근성: 탭 순서, 포커스 인디케이터, 숨김 요소 개선으로 키보드 전용 사용자 전 구간 탐색 가능",
        "재발 방지: 접근성 체크리스트/코딩 가이드 문서화 및 신규 개발자 교육",
      ],
    },
    results: {
      metrics: [
        "접근성 점수: Lighthouse 58점 → 95점 달성, 핵심 페이지 전반 품질 상향",
        "스크린 리더: 시맨틱 구조 및 ARIA 적용으로 스크린 리더 기준 핵심 콘텐츠 인식률 100%",
        "키보드 네비게이션: 포커스 링·탭 흐름 표준화로 키보드 전용 사용자도 전 구간 탐색 가능",
        "유지보수 효율: 체크리스트 정착으로 신규 페이지 사전 검수 체계화, 반복 이슈 대폭 감소",
      ],
      impact: "시각장애 사용자의 접근성 확보, 웹 접근성 기준(WCAG/KWCAG) 충족으로 포용성 있는 서비스 제공",
    },
  },
];

