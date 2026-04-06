# Design System — OLYM Communications

## Product Context
- **What this is:** 웹 디자인/개발 에이전시 포트폴리오. 사용자 분석과 스토리텔링 기반.
- **Who it's for:** 브랜딩/웹사이트 제작이 필요한 기업, 기관 담당자
- **Space/industry:** 디자인 에이전시 포트폴리오 (Pentagram, BASIC/DEPT, Sagmeister & Walsh 등과 경쟁)
- **Project type:** 단순 포트폴리오 (Contact/Form 없음)

## Aesthetic Direction
- **Direction:** Editorial Warmth — 차가운 미니멀리즘과 브루탈리스트 사이의 따뜻한 에디토리얼
- **Decoration level:** Intentional — 타이포그래피가 주역, 미묘한 구분선과 여백이 리듬을 만듦
- **Mood:** 신뢰감 있고 따뜻하면서도 전문적. 매거진을 펼친 느낌.
- **Differentiation:** 대부분의 에이전시가 순백+산세리프 또는 순흑+모노스페이스를 쓰는데, OLYM은 warm cream + 한글 명조 조합으로 독특한 포지션

## Typography
- **Hero/Display:** 대한체 (Daehan-Bold) — 히어로 헤드라인 전용. 강렬한 첫인상.
  - CDN: `https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Daehan-Bold.woff`
  - CSS: `font-family: 'Daehan-Bold'`
- **Heading/Serif:** 조선일보명조 (ChosunIlboMyungjo) — 섹션 타이틀, 프로젝트명. 한국적 에디토리얼 권위.
  - CDN: `https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Chosunilbo_myungjo.woff`
  - CSS: `font-family: 'ChosunIlboMyungjo'`
- **Body/UI:** Wanted Sans Variable — 본문, 레이블, 버튼, UI 전반.
  - CDN: `https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.3/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css`
  - CSS: `font-family: 'Wanted Sans Variable', 'Wanted Sans', system-ui, sans-serif`
- **Mono/Data:** Geist Mono — 코드, 데이터, 타임스탬프
  - CSS: `font-family: 'Geist Mono', ui-monospace, monospace`
- **Scale:**
  - Hero: `clamp(3rem, 8vw, 7.5rem)` — line-height 0.95
  - H2: `clamp(2.5rem, 5vw, 4.5rem)` — line-height 1.1
  - H3: `2rem` — line-height 1.2
  - Body: `1rem` — line-height 1.6
  - Small: `0.875rem`
  - Caption: `0.75rem` — letter-spacing 0.15em, uppercase

## Color
- **Approach:** Restrained + 장식적 강조
- **Background:** `oklch(0.965 0.008 75)` — warm cream
- **Foreground:** `oklch(0.18 0.015 55)` — warm near-black
- **Primary:** `oklch(0.42 0.11 30)` — deep terracotta. 강조, 링크, 호버.
- **Secondary:** `#8A9E7F` — muted sage green. 테라코타의 따뜻함에 시원한 균형.
- **Muted BG:** `oklch(0.92 0.005 75)`
- **Muted Text:** `oklch(0.52 0.015 55)`
- **Border:** `oklch(0.88 0.008 75)`
- **Card:** `oklch(0.955 0.006 75)`
- **Semantic:** success `#4A7C59`, warning `#C4892E`, error `#B44B3A`, info `#5B7FA5`
- **Dark mode:** 어두운 크림 배경 `oklch(0.15 0.01 55)`, 채도 10-20% 감소, primary를 `oklch(0.55 0.09 30)`으로 밝게 조정

## Spacing
- **Base unit:** 8px
- **Density:** Comfortable
- **Scale:** xs(4) sm(8) md(16) lg(24) xl(32) 2xl(48) 3xl(64)

## Layout
- **Approach:** Grid-disciplined, 비대칭 에디토리얼 배치
- **Grid:** 12 columns
- **Max content width:** 90rem (1440px)
- **Padding:** `clamp(24px, 4vw, 64px)`
- **Border radius:** minimal — sm:2px, md:4px, lg:6px (에디토리얼 미학에 맞게 각진 형태 유지)
- **Risk — 한국어 세로 텍스트 마진 장식:** '올림', '사용자분석', '스토리텔링' 같은 레이블을 12px로 마진에 세로 배치. 문화적 시그니처.

## Motion
- **Approach:** Intentional — 이해를 돕는 전환 + 미묘한 등장 애니메이션
- **Easing:** enter `cubic-bezier(0.16, 1, 0.3, 1)`, exit `ease-in`, move `ease-in-out`
- **Duration:** micro(50-100ms) short(150-250ms) medium(250-400ms) long(400-700ms)
- **Patterns:**
  - fade-up: opacity 0→1 + translateY(2rem→0), 1s, enter easing
  - scale-x: opacity 0→1 + scaleX(0→1), 1s, enter easing, origin left
  - reveal: IntersectionObserver 기반 스크롤 등장
- **Reduced motion:** `prefers-reduced-motion: reduce` 시 모든 애니메이션 비활성화

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-06 | 대한체를 Hero 전용 폰트로 선정 | 강렬한 첫인상, 한글 헤드라인에서 독특한 무게감 |
| 2026-04-06 | 조선일보명조를 Heading 폰트로 선정 | 한국 에디토리얼 전통의 권위, 섹션 타이틀과 프로젝트명에 적합 |
| 2026-04-06 | Wanted Sans를 Body 폰트로 선정 | 한글 가독성이 뛰어나고 제네릭하지 않은 현대적 산세리프 |
| 2026-04-06 | sage green (#8A9E7F) 보조색 도입 | 테라코타 따뜻함에 시원한 균형, 디자인 에이전시 카테고리에서 차별화 |
| 2026-04-06 | warm cream 배경 유지 | 경쟁사 대부분 순백/순흑 사용, OLYM의 시각적 정체성 |
| 2026-04-06 | Contact/Form 섹션 미포함 | 단순 포트폴리오 페이지, 불필요한 복잡도 제거 |
| 2026-04-06 | 초기 디자인 시스템 생성 | /design-consultation 기반, 경쟁사 리서치 + Claude 서브에이전트 의견 종합 |
