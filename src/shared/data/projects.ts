export interface Project {
  id: string;
  title: string;
  period: string;
  role: string;
  tech: string[];
  gradient: string;

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
    id: "mobx-recoil-migration",
    title: "MobX → Recoil, React Query 상태관리 마이그레이션",
    period: "2025.01 ~ 2025.08",
    role: "리드 FE (상태 관리 구조 재설계, 비동기 로직 개선)",
    tech: ["Recoil", "React Query", "TypeScript", "React"],
    gradient: "from-blue-500 to-cyan-500",
    background: {
      issue: "WordPress에서 React로 전환 후 서비스 규모가 커지면서 MobX 전역 상태가 비대화",
      challenge: "팀원 증가로 \"어디서 어떤 상태가 바뀌는지\" 이해하는 데 시간이 소요되고 비동기 로직이 복잡하게 얽혀 버그 추적과 신규 기능 개발 속도 저하",
    },
    solution: {
      approach: "로컬 UI 상태와 서버 상태를 분리하고 비동기 흐름을 표준화하기 위해 MobX에서 Recoil + React Query로 마이그레이션",
      keyPoints: [
        "상태관리 전략 수립: MobX 구조의 한계 분석 및 Recoil + React Query 조합 선정",
        "아키텍처 설계: Recoil atom/selector 설계, 기존 MobX 스토어를 점진적으로 대체할 수 있도록 모듈 단위 전환 구조",
        "핵심 코드 구현: 공통 쿼리, 훅, 상태 관리 패턴 직접 구현 및 중복 비동기 로직 공통화",
        "팀 공유 및 문서화: 상태 관리 규칙, 네이밍, 디렉터리 구조를 Notion에 가이드화",
      ],
    },
    results: {
      metrics: [
        "상태 구조 단순화: MobX 전역 스토어를 Recoil atom/selector로 재구성해 화면별 필요 상태만 참조",
        "비동기 로직 표준화: React Query 기반 서버 상태 일원화로 캐싱·리패칭·로딩/에러 처리 공통화",
        "개발 속도 향상: 상태 변경 지점을 명확히 해 버그 재현/분석 시간 단축",
      ],
      impact: "상태 관리 컨벤션 문서화로 신규 개발자의 러닝 커브 단축 및 코드 리뷰 기준 통일",
    },
  },
  {
    id: "react-spa-renewal",
    title: "1차 React SPA 리뉴얼",
    period: "2022.12 ~ 2023.04",
    role: "리드 FE (2인 중 1) – 공통 컴포넌트 설계, API 통신 구조 설계, 반응형 UI 구현",
    tech: ["React", "JavaScript", "styled-components", "Axios"],
    gradient: "from-purple-500 to-pink-500",
    background: {
      issue: "기존 WordPress 환경이 페이지 단위 기능 확장에 어렵고, 플러그인과 스크립트가 누적되면서 DOM 조작 위주의 산발적 코드 증가",
      challenge: "신규 기능 추가 시마다 기존 UI와 로직을 복사·수정하는 방식으로 코드 중복과 유지보수 비용 증가, 반응형 대응도 화면마다 따로 처리하면서 QA 이슈와 개발 피로도 높음",
    },
    solution: {
      approach: "React 기반 SPA로 전면 리뉴얼하여 컴포넌트 중심의 구조 구축",
      keyPoints: [
        "초기 환경 설정: ESLint + Prettier로 팀 공통 코드 스타일·품질 기준 정립",
        "폴더 구조 및 아키텍처 설계: src 레이어를 명확히 구분하고 jsconfig 절대 경로 설정으로 모듈 결합도 감소",
        "공통 컴포넌트, 디자인 시스템: Atomic Design 패턴으로 공통 컴포넌트 체계화, styled-components + ThemeProvider로 디자인 토큰 관리",
        "API 통신 및 렌더링 최적화: Context API + Custom Hook으로 전역 UI 상태 최소화, 스켈레톤 UI로 체감 성능 개선",
      ],
    },
    results: {
      metrics: [
        "개발 생산성 향상: Atomic Design과 공통 컴포넌트·디자인 토큰 도입으로 화면 개발 시 재사용성 증대, 기능 추가·수정 소요 시간 단축",
        "성능 개선: 불필요한 DOM 조작 제거, 가상 스크롤·스켈레톤 UI 도입으로 페이지 로딩 속도 평균 2.5초 → 1초 이하 달성",
        "서비스 성장: 구조적 리뉴얼 이후 서비스 신뢰도·사용성 향상으로 MAU 500명 → 10,000명(약 20배 성장)",
      ],
      impact: "API 통신, 폴더 구조, 코드 스타일을 표준화해 신규 기능·페이지 추가 시에도 일관된 방식으로 개발 및 리뷰 가능",
    },
  },
  {
    id: "next-seo-renewal",
    title: "검색엔진(SEO) 최적화 및 Next.js 2차 리뉴얼",
    period: "2023.12 ~ 2024.04",
    role: "FE 개발 (2인 중 1인) – SSR 구조 설계, 타입 시스템 도입, 성능 및 SEO 최적화",
    tech: ["Next.js", "TypeScript", "React"],
    gradient: "from-orange-500 to-red-500",
    background: {
      issue: "1차 리뉴얼 이후 트래픽 증가로 검색·광고 비즈니스 중요성 대두, 하지만 CSR 기반 구조로 인해 초기 로딩 속도 느리고 검색 크롤러가 콘텐츠 인식 지연",
      challenge: "JavaScript만 사용해 개발하다 보니 데이터 스키마를 구두·문서로 맞추는 과정에서 타입 기준이 사람마다 달라지고, 협업 시 리뷰·수정 오류 증가",
    },
    solution: {
      approach: "Next.js 기반 SSR 전환과 TypeScript 도입으로 성능과 코드 품질 동시 개선",
      keyPoints: [
        "렌더링 전략 설계: CSR 구조를 분석하고 주요 페이지를 Next.js SSR/SSG로 재구성, Dynamic Import + Code Splitting으로 초기 번들 크기 최소화",
        "SEO 및 메타 구조: 페이지 타입별 title/description, OG 태그, robots.txt, sitemap 구조 정의",
        "타입 시스템 도입: TypeScript로 공용 타입 정의, ESLint + Prettier 규칙 통합, 빌드 단계에서 자동 타입·린트 체크",
        "API 레이어 분리: 백엔드 API 호출을 별도 모듈로 분리해 UI와 비즈니스 로직 분리, 공통 응답 타입·에러 핸들링 로직 정의",
      ],
    },
    results: {
      metrics: [
        "초기 로딩 속도 개선: Next.js SSR + 코드 스플리팅으로 TTFB 약 45% 개선, LCP 1.2초 단축 → 첫 화면 로딩 체감 속도 향상으로 이탈률 감소",
        "검색 노출 향상: SEO 메타 태그·sitemap·robots·구조화 데이터 적용으로 검색 노출률 증가, 주요 키워드 자연 유입 개선",
        "협업 품질 향상: TypeScript + 공용 타입으로 런타임 타입 오류 감소, QA 단계에서 발견되던 타입 불일치 이슈 감소",
      ],
      impact: "ESLint/Prettier, API 레이어 분리로 일관된 코드 스타일과 구조 확보, 신규 페이지·기능 추가 시에도 동일한 패턴으로 빠르게 확장 가능",
    },
  },
  {
    id: "hr-casting-system",
    title: "HR 시스템 개발 (캐스팅 지원자 관리)",
    period: "2023.04 ~ 2023.12",
    role: "FE 개발 (단독) – 시스템 기획, UI 설계, 데이터 구조화, 지원자 관리 기능 구현",
    tech: ["React.js", "TypeScript"],
    gradient: "from-indigo-500 to-blue-500",
    background: {
      issue: "배우·모델 지원 현장이 주로 엑셀·이메일·종이 프로필로 관리되고 있어 이력 누락·중복 혼선 빈번 발생",
      challenge: "공고별 지원자 현황을 한눈에 보기 어렵고, 검색/필터/분류 기능 없어 \"누가 어디까지 진행됐는지\" 파악하는 데 많은 시간 소요",
    },
    solution: {
      approach: "지원자 관리를 위한 통합 웹 HR 시스템 기획·개발",
      keyPoints: [
        "업무 플로우 분석: 디렉터/PD/캐스팅 담당자 인터뷰로 기존 워크플로우 파악, \"공고 등록 → 지원 접수 → 서류 합격 → 오디션 → 캐스팅 확정\" 상태 플로우 정의",
        "데이터 구조 설계: 공고·지원자·이력 관계 정리, 공고별·인물별로 이력이 추적 가능한 구조 설계",
        "UI/UX 및 화면 설계: 한 화면에서 지원자 목록·검색/필터·상태 변경 가능한 관리 UI, \"프로필 확인 → 상태 변경 → 메모/영상 확인\" 워크플로우 구성",
        "프론트엔드 구현: React + TypeScript 기반 컴포넌트 구조 개발, 운영 과정 피드백 반영한 검색·필터·정렬·태그 기능 유지보수",
      ],
    },
    results: {
      metrics: [
        "업무 효율 향상: 엑셀·메일·종이로 흩어져 있던 프로세스를 하나의 웹 시스템으로 통합하여 지원자 관리 시간 약 60% 단축",
        "데이터 품질 개선: 공고별·지원자별 데이터베이스화로 데이터 누락 0건 유지, 동일 인물·지원 이력 추적 용이해져 커뮤니케이션 오류 감소",
        "서비스 경쟁력 강화: 일일 평균 10명 이상의 디렉터 신규 가입, \"엑셀 대신 이 시스템이 더 편하다\"는 평가로 플랫폼 내 핵심 기능으로 자리 잡음",
      ],
      impact: "효율적인 지원자 관리 시스템 제공으로 캐스팅 에이전시의 업무 생산성 극대화 및 서비스 신뢰도 강화",
    },
  },
  {
    id: "responsive-design-system",
    title: "반응형 개발 표준화 시스템 구축 및 공통 UI 가이드",
    period: "2020.09 ~ 2022.11",
    role: "FE 개발 (기획 1, 디자인 1, 개발 본인 1) – 신규 설계, 반응형 UI 구축, 운영 개선",
    tech: ["Styled-components", "Media Query", "Flex/Grid Layout"],
    gradient: "from-teal-500 to-green-500",
    background: {
      issue: "클라이언트별·프로젝트별로 반응형 기준이 제각각이라 화면마다 브레이크포인트와 레이아웃 규칙이 달랐음",
      challenge: "PC/Tablet/Mobile 해상도별 레이아웃 깨짐, 요소 겹침, 터치 영역 문제가 반복적으로 발생하고, 같은 문제를 프로젝트마다 다시 해결하느라 개발 비용 증가",
    },
    solution: {
      approach: "반응형 기준과 구현 방식을 통합한 \"반응형 시스템 UI 가이드\" 체계화",
      keyPoints: [
        "반응형 전략 수립: 기획자·디자이너와 함께 주요 해상도(PC/Tablet/Mobile), 콘텐츠 우선순위 정의, Google Analytics로 실제 사용자 해상도 비율 분석",
        "반응형 시스템 설계: styled-components theme에 브레이크포인트 통합 관리, Media Query를 mixin으로 모듈화해 모든 컴포넌트에서 재사용 가능하게 설계",
        "공통 UI/반응형 가이드: 브레이크포인트·컴포넌트 반응형 패턴 문서화, 신규 프로젝트에서 그대로 사용 가능한 공통 템플릿·컴포넌트 정리",
        "QA 및 운영 개선: 실제 디바이스 테스트로 터치 영역 문제 조기 발견, 이슈를 패턴별로 묶어 가이드에 반영, 이후 프로젝트에서 같은 문제 재발 방지",
      ],
    },
    results: {
      metrics: [
        "반응형 기준 표준화: 뷰포트·레이아웃 기준을 하나의 시스템으로 통일해 화면 설계·구현 시 기준 명확화, 기획/디자인/개발 간 의견 충돌 감소",
        "개발 속도 향상: 공통 반응형 시스템과 컴포넌트 재사용으로 신규 프로젝트 UI 개발 기간 평균 4일 → 2일로 약 50% 단축",
        "QA 이슈 감소: Tablet·Mobile 환경에서 레이아웃 깨짐, 터치 영역 문제 관련 QA 이슈 크게 줄어 사용자 접근성·완성도 개선",
      ],
      impact: "반응형 가이드를 중심으로 기획·디자인·개발 간 소통 구조 정리, 전체적인 협업 효율과 개발 생산성 향상",
    },
  },
  {
    id: "aws-cicd-pipeline",
    title: "AWS·GitHub Actions 기반 CI/CD 구축",
    period: "2021.04 ~ 2022.11",
    role: "FE 개발 (2인 중 1) – 웹 배포 설계, 도메인 연결, 운영 관리",
    tech: ["AWS S3", "CloudFront", "GitHub Actions", "Route53"],
    gradient: "from-amber-500 to-orange-500",
    background: {
      issue: "여러 외주 웹 프로젝트를 동시 진행하면서 수동 FTP 업로드 → 캐시 수동 갱신 → 각 도메인별 설정 관리를 반복",
      challenge: "수정 빈도가 높은 랜딩/프로모션 페이지는 배포 한 번에 10~15분 소요, 긴급 이슈 대응과 빈번한 업데이트에 피로감 증가",
    },
    solution: {
      approach: "AWS 기반 정적 호스팅 + GitHub Actions CI/CD 파이프라인 구축",
      keyPoints: [
        "배포 인프라 설계: AWS S3를 정적 웹 호스팅 스토리지로 구성, CloudFront를 앞단에 두어 전송 속도·캐싱 효율 최적화, Route53으로 커스텀 도메인 연결, Certificate Manager로 SSL 인증서 발급·HTTPS 환경 구축",
        "보안 및 트래픽 설정: CloudFront에 SSL 인증서 적용, HTTP 자동 HTTPS 리다이렉션, 기본 캐싱 전략·에러 페이지·리다이렉트 규칙 명확히 정의",
        "CI/CD 파이프라인 구성: GitHub Actions 워크플로우로 main 브랜치 push → build → S3 업로드 → CloudFront 캐시 무효화까지 전체 과정 자동화, dev/staging/prod 환경 분리",
        "알림 체계 구축: 배포 성공·실패 내역을 Slack 알림으로 연동해 팀 내 공유 체계 마련",
      ],
    },
    results: {
      metrics: [
        "배포 시간 단축: 기존 수동 FTP 대비 배포 시간 약 15분 → 3분 수준으로 80% 이상 단축",
        "배포 안정성 향상: dev/staging/prod 환경 분리와 GitHub Actions 기록을 기반으로 특정 커밋 기준 롤백·재배포 용이, 운영 리스크 감소",
        "협업 효율 개선: 배포 프로세스 표준화 및 Slack 알림 도입으로 \"누가 언제 무엇을 배포했는지\"를 팀 전체가 실시간 공유",
      ],
      impact: "빠른 배포와 안정적인 운영 환경으로 신규 기능 출시·이슈 대응 속도 향상, 팀의 운영 부담 경감",
    },
  },
  {
    id: "lg-accessibility",
    title: "LG OLED Display 웹 접근성 개선",
    period: "2021.06 ~ 2021.08",
    role: "FE 개발 (3인 중 1) – 웹 접근성 개선, 시맨틱 구조 설계, 성능 최적화",
    tech: ["React", "Lighthouse", "Axe DevTools"],
    gradient: "from-rose-500 to-pink-500",
    background: {
      issue: "기존 사이트를 React로 마이그레이션하는 과정에서 시맨틱 구조, 포커스 처리, 대체 텍스트 등이 충분히 고려되지 않아 웹 접근성 진단 도구에서 다수의 오류 발생",
      challenge: "클라이언트의 요청으로 WCAG/KWCAG 기준을 충족하는 수준으로 접근성을 개선해야 함",
    },
    solution: {
      approach: "Axe DevTools, Lighthouse를 활용한 접근성 이슈 진단 및 체계적 개선",
      keyPoints: [
        "접근성 이슈 진단 및 우선순위 선정: Axe DevTools, Lighthouse 진단 결과를 심각도·빈도 기준으로 분류, 우선순위에 따라 단계적 개선",
        "시맨틱 구조 재설계: W3C WCAG 2.1·KWCAG 가이드에 맞게 시맨틱 태그와 ARIA 속성 재정비, 스크린 리더를 통한 핵심 콘텐츠 인식률 100% 달성",
        "키보드 포커스 이동 로직 수정: 탭 순서·포커스 표시·숨김 요소 처리 등을 수정해 주요 UI 요소를 키보드만으로 전체 탐색 가능하도록 개선",
      ],
    },
    results: {
      metrics: [
        "접근성 점수 향상: 전체적으로 Lighthouse 접근성 점수 58점 → 95점으로 크게 향상",
        "스크린 리더 호환성: 시맨틱 태그·ARIA 속성으로 스크린 리더를 통한 핵심 콘텐츠 인식률 100% 달성",
        "키보드 네비게이션: 포커스 이동 흐름을 수정해 주요 UI 요소를 키보드만으로 전체 탐색 가능한 구조로 개선",
      ],
      impact: "시각장애 사용자의 접근성과 서비스 신뢰도 향상, 웹 접근성 기준 충족으로 포용성 있는 서비스 제공",
    },
  },
];

