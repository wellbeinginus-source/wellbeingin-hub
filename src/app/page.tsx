import Link from "next/link";

type Service = {
  name: string;
  tagline: string;
  description: string;
  url: string | null;
  status: "live" | "soon";
  category: string;
};

const SERVICES: Service[] = [
  {
    name: "운세한입",
    tagline: "AI 사주 · 운세 · 궁합",
    description:
      "사주·대운·궁합·혈액형·연간운세까지, AI가 풀어드리는 오늘의 운세.",
    url: "https://unsehanip.vercel.app",
    status: "live",
    category: "라이프스타일",
  },
  {
    name: "AI 블로그 작성기",
    tagline: "블로그 글쓰기, AI에게 맡기세요",
    description:
      "주제만 입력하면 AI가 SEO 최적화된 블로그 글을 완성해드립니다.",
    url: "https://ai-blog-writer-eosin.vercel.app",
    status: "live",
    category: "생산성",
  },
  {
    name: "노무사 계산기",
    tagline: "퇴직금 · 연차 · 4대보험",
    description:
      "퇴직금·실수령액·연차·4대보험·주휴수당·연장야간휴일 6종 무료 계산.",
    url: "https://labor-calc.vercel.app",
    status: "live",
    category: "업무 도구",
  },
  {
    name: "하루틴",
    tagline: "AI 약사의 영양제 큐레이션",
    description:
      "증상·목적을 입력하면 AI 약사가 나에게 꼭 맞는 영양제를 추천해드립니다.",
    url: "https://harutine.vercel.app",
    status: "live",
    category: "헬스케어",
  },
  {
    name: "상권분석",
    tagline: "데이터 기반 상권 리포트",
    description:
      "행정동별 유동인구·업종·배달 비중까지, AI가 정리한 상권 인사이트.",
    url: null,
    status: "soon",
    category: "비즈니스",
  },
  {
    name: "TradeUp",
    tagline: "부동산 교환 매칭 플랫폼",
    description:
      "1:1 교환부터 삼각 교환까지, 원하는 부동산으로 업그레이드하세요.",
    url: null,
    status: "soon",
    category: "부동산",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            웰빙이너스
          </Link>
          <nav className="flex items-center gap-6 text-sm text-muted">
            <a href="#services" className="hover:text-foreground transition-colors">
              서비스
            </a>
            <a href="#about" className="hover:text-foreground transition-colors">
              소개
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              문의
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium tracking-wider text-subtle uppercase">
            Wellbeing · In · Us
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-tight">
            웰빙, 우리 안에서
            <br />
            시작됩니다.
          </h1>
          <p className="mt-6 text-lg text-muted sm:text-xl">
            Wellness, built into your day.
          </p>
          <p className="mt-8 max-w-2xl text-base text-muted leading-relaxed">
            주식회사 웰빙이너스는 AI 기술로 일상 속 번거로움을 덜어드립니다.
            계산·상담·창작·헬스케어까지, 더 가벼운 하루를 위한 도구들을 만듭니다.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#services"
              className="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              서비스 둘러보기
            </a>
            <a
              href="#about"
              className="inline-flex items-center rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-card-bg transition-colors"
            >
              법인 소개
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-border bg-card-bg">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium tracking-wider text-subtle uppercase">
              Our Services
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              일상과 업무를 더 가볍게
            </h2>
            <p className="mt-4 text-muted">
              현재 제공 중인 서비스와 곧 만나보실 서비스입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium tracking-wider text-subtle uppercase">
              About
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              기술로 만드는 <br className="sm:hidden" />
              가벼운 일상
            </h2>
            <div className="mt-8 space-y-6 text-base text-muted leading-relaxed">
              <p>
                주식회사 웰빙이너스는 AI 기술을 일상의 문제 해결에 접목하는
                회사입니다. 복잡한 계산과 반복되는 작업은 AI에게 맡기고,
                사람은 더 중요한 일에 집중할 수 있도록 돕습니다.
              </p>
              <p>
                운세 상담부터 블로그 글쓰기, 세무·노무 계산, 영양제 큐레이션까지 —
                서로 다른 영역이지만 모두 &ldquo;<strong className="text-foreground">더 나은 하루를 만든다</strong>&rdquo;는
                한 가지 방향을 공유합니다.
              </p>
              <p>
                웰빙이너스(Wellbeing in Us). 웰빙은 어딘가 멀리 있는 것이 아니라
                우리 안에서 시작된다는 믿음으로, 오늘도 작은 도구들을 만들어갑니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border bg-card-bg">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-base font-semibold">주식회사 웰빙이너스</h3>
              <p className="mt-2 text-sm text-muted">
                Wellness, built into your day.
              </p>
              <a
                href="mailto:wellbeinginus@gmail.com"
                className="mt-4 inline-block text-sm text-link hover:underline"
              >
                wellbeinginus@gmail.com
              </a>
            </div>
            <div className="text-sm text-muted space-y-1">
              <p>
                <span className="inline-block w-24 text-subtle">대표자</span>
                하윤지
              </p>
              <p>
                <span className="inline-block w-24 text-subtle">사업자등록번호</span>
                570-86-03233
              </p>
              <p className="flex">
                <span className="inline-block w-24 shrink-0 text-subtle">주소</span>
                <span>강원특별자치도 원주시 오성마을길 63-25, 201-p378</span>
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-border pt-6 text-center text-xs text-subtle">
            &copy; {new Date().getFullYear()} 주식회사 웰빙이너스. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const isLive = service.status === "live";
  const content = (
    <div
      className={`group relative flex h-full flex-col rounded-xl border border-border bg-background p-6 transition-all ${
        isLive
          ? "hover:border-foreground/30 hover:shadow-sm"
          : "opacity-70"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium tracking-wider text-subtle uppercase">
            {service.category}
          </p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight">
            {service.name}
          </h3>
        </div>
        <span
          className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${
            isLive
              ? "bg-foreground text-background"
              : "border border-border text-subtle"
          }`}
        >
          {isLive ? "서비스 중" : "Coming Soon"}
        </span>
      </div>
      <p className="mt-3 text-sm font-medium text-foreground">
        {service.tagline}
      </p>
      <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
        {service.description}
      </p>
      {isLive && (
        <div className="mt-5 flex items-center text-sm font-medium text-foreground">
          바로가기
          <svg
            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      )}
    </div>
  );

  if (isLive && service.url) {
    return (
      <a
        href={service.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {content}
      </a>
    );
  }
  return <div className="h-full">{content}</div>;
}
