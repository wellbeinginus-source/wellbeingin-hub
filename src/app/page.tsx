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
      "사주·대운·궁합·혈액형·연간운세까지, 방대한 명리 데이터를 AI가 풀어내 오늘의 이야기를 건넵니다.",
    url: "https://unsehanip.vercel.app",
    status: "live",
    category: "라이프스타일",
  },
  {
    name: "AI 블로그 작성기",
    tagline: "전문가 수준의 콘텐츠 자동화",
    description:
      "주제만 입력하면 SEO 최적화된 블로그 글을 구성·작성·다듬어 완성해 드립니다.",
    url: "https://ai-blog-writer-eosin.vercel.app",
    status: "live",
    category: "생산성",
  },
  {
    name: "HArutine",
    tagline: "AI 약사의 영양제 큐레이션",
    description:
      "증상·목적·복용 이력을 분석해 나에게 꼭 맞는 영양제를, 약사의 시선으로 추천합니다.",
    url: "https://harutine.net/",
    status: "live",
    category: "헬스케어",
  },
  {
    name: "웰빙이너스 스토어",
    tagline: "약사가 고른 건강기능식품",
    description:
      "HArutine의 데이터와 약사의 전문성을 바탕으로, 오늘부터 내일까지 필요한 건강기능식품을 엄선해 전합니다.",
    url: null,
    status: "soon",
    category: "커머스",
  },
];

const PILLARS = [
  {
    kicker: "AI",
    title: "기술",
    body: "복잡한 계산과 반복되는 작업은 AI에게 맡기고, 사람은 더 중요한 일에 집중합니다.",
  },
  {
    kicker: "Pharmacist",
    title: "전문성",
    body: "약사의 시선에서 검증한 정보와 제품만을, 책임지는 언어로 전달합니다.",
  },
  {
    kicker: "Daily",
    title: "일상",
    body: "매일의 루틴에 자연스럽게 스며드는 가벼움 — 그것이 진짜 웰빙의 시작입니다.",
  },
];

const STATS = [
  { value: "04", label: "Services Live", sub: "운영 중인 서비스" },
  { value: "2025", label: "Established", sub: "설립 연도" },
  { value: "01", label: "Mission", sub: "우리 안에서 시작되는 웰빙" },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen">
      {/* ── Header ─────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
          <Link href="/" className="flex items-baseline gap-3">
            <span className="font-serif text-[1.125rem] tracking-tight text-foreground sm:text-xl">
              웰빙이너스
            </span>
            <span className="hidden text-[10px] font-medium tracking-[0.22em] text-subtle md:inline">
              WELLBEING · IN · US
            </span>
          </Link>
          <nav className="flex items-center gap-5 text-[13px] font-medium text-muted sm:gap-8 sm:text-sm">
            <a href="#services" className="link-underline hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#philosophy" className="link-underline hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="link-underline hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* ── Hero ──────────────────────────── */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto max-w-7xl px-5 pt-16 pb-20 sm:px-8 sm:pt-28 sm:pb-32 lg:pt-36 lg:pb-40">
          <div className="mb-12 flex items-center gap-4 reveal-in">
            <span className="draw-line h-px w-12 bg-brand sm:w-16" />
            <p className="eyebrow">Established 2025 · Seoul & Wonju</p>
          </div>

          <h1 className="font-serif type-display text-foreground reveal-up delay-100">
            웰빙은,
            <br />
            우리 안에서
            <span className="inline-block text-brand"> 시작</span>됩니다.
          </h1>

          <p className="mt-7 font-serif-light text-xl italic text-muted sm:mt-8 sm:text-2xl lg:text-[1.75rem] reveal-up delay-200">
            Wellness, built into your day.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-16 lg:grid-cols-12 lg:gap-16 reveal-up delay-300">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4">Manifesto — 2025</p>
              <p className="font-serif text-xl leading-[1.5] text-foreground-soft sm:text-2xl">
                복잡함은 기술에게,
                <br />
                가벼움은 당신에게.
              </p>
            </div>
            <div className="border-l-2 border-brand pl-6 type-lead text-muted lg:col-span-7">
              <p>
                주식회사 웰빙이너스는 <span className="text-foreground">AI 기술과 약사의 전문성</span>을
                결합해, 일상의 판단과 선택을 정돈합니다. 상담·창작·헬스케어 —
                분야는 다르지만, 모든 제품은 &ldquo;더 가벼운 하루&rdquo; 라는 한 방향을 향합니다.
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-3 reveal-up delay-400 sm:mt-16">
            <a
              href="#services"
              className="group inline-flex items-center rounded-none bg-accent px-7 py-4 text-[13px] font-medium tracking-[0.1em] uppercase text-background transition-all hover:bg-accent-hover hover:px-9"
            >
              Explore Services
              <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#philosophy"
              className="inline-flex items-center rounded-none border border-border-strong px-7 py-4 text-[13px] font-medium tracking-[0.1em] uppercase text-foreground transition-all hover:bg-surface"
            >
              About the Company
            </a>
          </div>
        </div>

        {/* Decorative numeral */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-6 -right-8 select-none font-serif text-[12rem] leading-none text-border sm:-bottom-12 sm:-right-10 sm:text-[18rem] lg:text-[24rem]"
        >
          2025
        </div>
      </section>

      {/* ── Pillars ────────────────────────── */}
      <section className="border-b border-border bg-background-alt">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border px-5 sm:px-8 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {PILLARS.map((p, i) => (
            <div key={p.title} className="px-0 py-14 lg:px-10 lg:py-20">
              <div className="mb-6 flex items-center gap-3">
                <span className="section-number text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="eyebrow text-brand">{p.kicker}</p>
              </div>
              <h3 className="font-serif text-3xl text-foreground sm:text-4xl">
                {p.title}
              </h3>
              <p className="mt-5 text-[15px] leading-[1.9] text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ───────────────────────── */}
      <section id="services" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
          <div className="mb-14 flex flex-col gap-6 sm:mb-20 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="mb-6 flex items-center gap-4">
                <span className="section-number text-sm">01</span>
                <span className="h-px w-12 bg-brand" />
                <p className="eyebrow">Our Services</p>
              </div>
              <h2 className="font-serif type-headline text-foreground">
                일상과 업무를,
                <br className="sm:hidden" />
                <span className="sm:ml-3">더 정돈되게.</span>
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-[1.8] text-muted sm:text-right">
              현재 운영 중인 세 가지 서비스와
              <br />
              곧 공개될 웰빙이너스 스토어. <br />
              각각은 독립적이되, 서로를 보완하도록 설계됩니다.
            </p>
          </div>

          <div className="grid grid-cols-1 border-t border-l border-border bg-surface sm:grid-cols-2">
            {SERVICES.map((service, idx) => (
              <ServiceCard key={service.name} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Manifesto / Quote ──────────────── */}
      <section className="relative overflow-hidden border-b border-border bg-brand-wash">
        <div className="mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 sm:py-32 lg:py-40">
          <p className="eyebrow mb-8 text-brand">Our Promise</p>
          <blockquote className="font-serif text-3xl leading-[1.35] text-foreground sm:text-4xl lg:text-5xl">
            &ldquo;<span className="text-brand">작지만 단단한 도구</span>가
            <br className="hidden sm:block" />
            매일의 무게를 가볍게 만듭니다.&rdquo;
          </blockquote>
          <p className="mx-auto mt-10 max-w-2xl text-[15px] leading-[1.9] text-muted sm:text-base">
            우리는 화려한 혁신보다, 매일 쓰이는 정직한 도구를 만들고 싶습니다.
            <br className="hidden sm:block" />
            AI와 약사의 전문성을 매개로, 한 사람의 하루에 조용히 스며듭니다.
          </p>

          {/* Decorative circle element */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full border border-brand/15 sm:h-96 sm:w-96"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -right-24 h-72 w-72 rounded-full border border-brand/10 sm:h-[28rem] sm:w-[28rem]"
          />
        </div>
      </section>

      {/* ── By the Numbers ─────────────────── */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mb-14 flex items-center gap-4 sm:mb-16">
            <span className="section-number text-sm">02</span>
            <span className="h-px w-12 bg-brand" />
            <p className="eyebrow">By the Numbers</p>
          </div>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-10">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="group relative">
                <p className="font-serif type-stat text-brand">{stat.value}</p>
                <div className="mt-4 h-px w-12 bg-brand transition-all duration-500 group-hover:w-24" />
                <p className="mt-4 text-[11px] font-semibold tracking-[0.22em] text-foreground uppercase">
                  {stat.label}
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Philosophy ─────────────── */}
      <section id="philosophy" className="border-b border-border bg-background-alt">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <div className="mb-6 flex items-center gap-4">
                <span className="section-number text-sm">03</span>
                <span className="h-px w-12 bg-brand" />
                <p className="eyebrow">Philosophy</p>
              </div>
              <h2 className="font-serif type-headline text-foreground">
                기술로 만드는
                <br />
                가벼운 일상.
              </h2>
              <div className="mt-12 inline-block border-l-2 border-brand pl-5">
                <p className="font-serif text-lg italic leading-[1.65] text-foreground-soft sm:text-xl">
                  웰빙은 어딘가 멀리 있는 것이 아니라,
                  <br />
                  우리 안에서 시작됩니다.
                </p>
              </div>
            </div>

            <div className="space-y-8 text-[16px] leading-[1.95] text-muted lg:col-span-7 sm:text-[17px]">
              <p className="drop-cap">
                주식회사 웰빙이너스는 AI 기술을 일상의 문제 해결에 접목하는
                회사입니다. 복잡한 계산과 반복되는 작업은 AI에게, 판단과 감성은
                사람에게. 이 단순한 원칙이 우리가 만드는 모든 서비스의 출발점입니다.
              </p>
              <p>
                운세 상담, 블로그 글쓰기, 영양제 큐레이션, 그리고 약사가 직접
                선별한 건강기능식품까지 — 서로 다른 영역이지만 모두
                &ldquo;<span className="text-foreground font-medium">더 나은 하루</span>&rdquo;
                라는 한 가지 방향을 공유합니다.
              </p>
              <p>
                각 서비스는 독립적으로 기능하되, 결국 한 사람의 하루를 더 가볍게
                만드는 데 기여합니다. 우리는 그 믿음을 따라 오늘도 작지만 단단한
                도구들을, 그리고 검증된 제품들을 만들어 갑니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer / Contact ───────────────── */}
      <footer id="contact" className="bg-dark-bg text-dark-fg">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
          <div className="mb-14 flex items-center gap-4 sm:mb-20">
            <span className="section-number text-sm text-dark-muted">04</span>
            <span className="h-px w-12 bg-dark-border" />
            <p className="eyebrow text-dark-muted">Contact</p>
          </div>

          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <h3 className="font-serif text-3xl leading-[1.2] text-dark-fg sm:text-4xl lg:text-5xl">
                주식회사
                <br />
                웰빙이너스
              </h3>
              <p className="mt-6 font-serif-light text-base italic text-dark-muted sm:text-lg">
                Wellness, built into your day.
              </p>

              <div className="mt-12">
                <p className="text-[10px] font-semibold tracking-[0.22em] text-dark-muted uppercase">
                  General Inquiry
                </p>
                <a
                  href="mailto:wellbeinginus@gmail.com"
                  className="link-underline mt-3 inline-block text-lg text-dark-fg sm:text-xl"
                >
                  wellbeinginus@gmail.com
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-[10px] font-semibold tracking-[0.22em] text-dark-muted uppercase">
                Corporate Information
              </p>
              <dl className="mt-6 divide-y divide-dark-border border-t border-b border-dark-border">
                <div className="grid grid-cols-[110px_1fr] items-start gap-4 py-5 sm:grid-cols-[180px_1fr] sm:gap-8">
                  <dt className="text-[13px] text-dark-muted tracking-wide">
                    대표자
                  </dt>
                  <dd className="text-[15px] text-dark-fg sm:text-base">하윤지</dd>
                </div>
                <div className="grid grid-cols-[110px_1fr] items-start gap-4 py-5 sm:grid-cols-[180px_1fr] sm:gap-8">
                  <dt className="text-[13px] text-dark-muted tracking-wide">
                    사업자등록번호
                  </dt>
                  <dd className="text-[15px] tabular-nums text-dark-fg sm:text-base">
                    570-86-03233
                  </dd>
                </div>
                <div className="grid grid-cols-[110px_1fr] items-start gap-4 py-5 sm:grid-cols-[180px_1fr] sm:gap-8">
                  <dt className="text-[13px] text-dark-muted tracking-wide">
                    주소
                  </dt>
                  <dd className="text-[15px] leading-[1.75] text-dark-fg sm:text-base">
                    강원특별자치도 원주시
                    <br />
                    오성마을길 63-25, 201-p378
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-20 flex flex-col items-start gap-4 border-t border-dark-border pt-10 text-xs text-dark-muted sm:flex-row sm:items-center sm:justify-between sm:gap-3">
            <p className="leading-relaxed">
              &copy; {year} 주식회사 웰빙이너스. All rights reserved.
            </p>
            <p className="tracking-[0.22em]">WELLBEINGIN.US</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const isLive = service.status === "live";
  const number = String(index + 1).padStart(2, "0");

  const content = (
    <article
      className={`group relative flex h-full flex-col border-r border-b border-border bg-surface p-7 transition-all duration-500 sm:p-10 lg:p-12 ${
        isLive ? "hover:bg-brand-wash" : "opacity-80"
      }`}
    >
      <div className="mb-10 flex items-start justify-between gap-3">
        <span className="section-number text-sm">{number}</span>
        <span
          className={`shrink-0 px-2.5 py-1 text-[10px] font-medium tracking-[0.15em] uppercase ${
            isLive
              ? "bg-brand text-background"
              : "border border-border-strong text-subtle"
          }`}
        >
          {isLive ? "Live" : "Coming Soon"}
        </span>
      </div>

      <p className="eyebrow mb-3">{service.category}</p>
      <h3 className="font-serif text-2xl leading-tight text-foreground sm:text-[1.75rem]">
        {service.name}
      </h3>
      <p className="mt-3 text-[15px] font-medium text-foreground-soft">
        {service.tagline}
      </p>
      <p className="mt-4 flex-1 text-[14px] leading-[1.85] text-muted">
        {service.description}
      </p>

      {isLive && (
        <div className="mt-10 flex items-center gap-3 text-[13px] font-medium text-brand">
          <span className="tracking-[0.18em] uppercase">Visit</span>
          <span className="relative h-px w-8 overflow-hidden bg-border-strong">
            <span className="absolute inset-0 origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100" />
          </span>
          <span className="transition-transform duration-500 group-hover:translate-x-1">
            →
          </span>
        </div>
      )}
    </article>
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
