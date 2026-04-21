import Link from "next/link";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";

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
    name: "HArutine",
    tagline: "AI 약사의 영양제 큐레이션",
    description:
      "증상·목적·복용 이력을 분석해 나에게 꼭 맞는 영양제를, 약사의 시선으로 추천합니다.",
    url: "https://harutine.net/",
    status: "live",
    category: "Healthcare",
  },
  {
    name: "웰빙이너스 스토어",
    tagline: "약사가 고른 건강기능식품",
    description:
      "HArutine의 데이터와 약사의 전문성을 바탕으로, 오늘부터 내일까지 필요한 건강기능식품을 엄선해 전합니다.",
    url: null,
    status: "soon",
    category: "Commerce",
  },
  {
    name: "운세한입",
    tagline: "AI 사주 · 운세 · 궁합",
    description:
      "사주·대운·궁합·혈액형·연간운세까지, 방대한 명리 데이터를 AI가 풀어내 오늘의 이야기를 건넵니다.",
    url: "https://unsehanip.vercel.app",
    status: "live",
    category: "Lifestyle",
  },
  {
    name: "AI 블로그 작성기",
    tagline: "전문가 수준의 콘텐츠 자동화",
    description:
      "주제만 입력하면 SEO 최적화된 블로그 글을 구성·작성·다듬어 완성해 드립니다.",
    url: "https://ai-blog-writer-eosin.vercel.app",
    status: "live",
    category: "Productivity",
  },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen">
      {/* ── Header ─────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/92 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" className="flex items-baseline gap-2.5 text-foreground">
            <span className="font-serif text-[1.35rem] tracking-[-0.01em] sm:text-[1.5rem]">
              Wellbeingin<span className="text-brand">.</span>
            </span>
            <span className="hidden text-[9.5px] font-medium tracking-[0.3em] text-subtle sm:inline">
              US
            </span>
          </Link>
          <nav className="flex items-center gap-7 text-[13px] font-medium text-muted sm:gap-9 sm:text-sm">
            <a href="#services" className="link-underline hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#about" className="link-underline hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="link-underline hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* ── Hero ──────────────────────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 pt-24 pb-24 sm:px-8 sm:pt-36 sm:pb-36 lg:pt-44 lg:pb-44">
          <p className="eyebrow enter">Established 2025</p>

          <h1 className="mt-10 font-serif type-display text-foreground enter delay-100">
            웰빙은, 우리 안에서
            <br />
            <span className="text-brand">시작</span>됩니다.
          </h1>

          <p className="mt-8 font-serif-light text-xl italic text-muted sm:text-[1.625rem] enter delay-200">
            Wellness, built into your day.
          </p>

          <div className="mt-16 max-w-2xl enter delay-300">
            <p className="type-lead text-muted">
              <span className="nowrap">주식회사 웰빙이너스</span>는
              <span className="text-foreground"> AI 기술과 현장의 전문성</span>을 엮어,
              일상의 판단과 선택을 정돈합니다.
            </p>
            <p className="type-lead mt-5 text-muted">
              상담·창작·헬스케어 — 분야는 다르지만,
              모든 제품은 &ldquo;더 가벼운 하루&rdquo; 라는 한 방향을 향합니다.
            </p>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-3 enter delay-400">
            <Magnetic strength={0.2}>
              <a
                href="#services"
                data-cursor="hover"
                className="group inline-flex items-center bg-accent px-7 py-4 text-[12px] font-medium tracking-[0.16em] uppercase text-background transition-colors hover:bg-accent-hover"
              >
                Explore Services
                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a
                href="#about"
                data-cursor="hover"
                className="inline-flex items-center border border-border-strong px-7 py-4 text-[12px] font-medium tracking-[0.16em] uppercase text-foreground transition-colors hover:bg-surface"
              >
                About the Company
              </a>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────── */}
      <section id="services" className="border-b border-border bg-background-alt">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
          <Reveal>
            <div className="mb-16 flex flex-col gap-8 sm:mb-20 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-xl">
                <p className="eyebrow">Services</p>
                <h2 className="mt-4 font-serif type-headline text-foreground">
                  일상과 업무를,
                  <br />
                  더 정돈되게.
                </h2>
              </div>
              <p className="max-w-sm text-[15px] leading-[1.85] text-muted sm:text-right">
                몸과 마음, 그리고 표현.
                웰빙이너스의 서비스들은 서로 다른 질문에서 출발하지만,
                결국 <span className="text-foreground font-medium">한 사람의 하루</span>라는 한 점에서 만납니다.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-1 border-t border-l border-border bg-surface sm:grid-cols-2">
              {SERVICES.map((service) => (
                <ServiceCard key={service.name} service={service} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Ecosystem / How They Connect ───── */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">The Framework</p>
            <h2 className="mt-4 font-serif type-headline text-foreground">
              하나의 하루를,
              <br />
              세 가지 차원으로.
            </h2>
            <p className="mx-auto mt-8 max-w-xl type-lead text-muted">
              서로 달라 보이는 네 개의 서비스는,
              결국 한 사람의 하루를 구성하는 세 축을 따라 자리잡습니다.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-20 grid grid-cols-1 gap-10 sm:mt-24 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-border-strong">
              <div className="px-0 sm:px-8 lg:px-12">
                <p className="font-serif text-4xl italic text-brand sm:text-5xl">
                  I.
                </p>
                <h3 className="mt-6 font-serif text-2xl text-foreground sm:text-[1.75rem]">
                  몸 <span className="text-subtle font-sans text-sm tracking-[0.22em] uppercase">Body</span>
                </h3>
                <p className="mt-5 text-[15px] leading-[1.9] text-muted">
                  전문가의 시선으로 정리한 영양과 건강.
                  무엇을, 왜, 얼마나 필요한지를 명확하게.
                </p>
                <div className="mt-7 space-y-1.5 text-[13px] tracking-wide text-foreground-soft">
                  <p>— HArutine</p>
                  <p>— 웰빙이너스 스토어</p>
                </div>
              </div>

              <div className="px-0 sm:px-8 lg:px-12">
                <p className="font-serif text-4xl italic text-brand sm:text-5xl">
                  II.
                </p>
                <h3 className="mt-6 font-serif text-2xl text-foreground sm:text-[1.75rem]">
                  마음 <span className="text-subtle font-sans text-sm tracking-[0.22em] uppercase">Mind</span>
                </h3>
                <p className="mt-5 text-[15px] leading-[1.9] text-muted">
                  오늘의 기분, 내일의 방향.
                  명리학의 오래된 지혜를 AI의 정확성으로 풀어냅니다.
                </p>
                <div className="mt-7 space-y-1.5 text-[13px] tracking-wide text-foreground-soft">
                  <p>— 운세한입</p>
                </div>
              </div>

              <div className="px-0 sm:px-8 lg:px-12">
                <p className="font-serif text-4xl italic text-brand sm:text-5xl">
                  III.
                </p>
                <h3 className="mt-6 font-serif text-2xl text-foreground sm:text-[1.75rem]">
                  표현 <span className="text-subtle font-sans text-sm tracking-[0.22em] uppercase">Voice</span>
                </h3>
                <p className="mt-5 text-[15px] leading-[1.9] text-muted">
                  쓰고 싶었지만 시간이 없었던 이야기들.
                  당신의 목소리를 대신 정리해 드립니다.
                </p>
                <div className="mt-7 space-y-1.5 text-[13px] tracking-wide text-foreground-soft">
                  <p>— AI 블로그 작성기</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── About ──────────────────────────── */}
      <section id="about" className="border-b border-border bg-background-alt">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32 lg:py-44">
          {/* Header */}
          <Reveal>
            <div className="mb-16 sm:mb-24">
              <p className="eyebrow">About · Company</p>
              <h2 className="mt-5 font-serif type-headline text-foreground">
                우리는,
                <br />
                매일의 작은 질문에서 시작되었습니다.
              </h2>
            </div>
          </Reveal>

          {/* Body: two-column editorial */}
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
            <Reveal delay={100} className="lg:col-span-7">
              <div className="space-y-8 text-[16px] leading-[2] text-muted sm:text-[17px]">
                <p>
                  <span className="nowrap">주식회사 웰빙이너스</span>의 시작은 거창한 기술이 아니라,
                  현장에서 하루에도 수없이 되풀이되는 한 문장이었습니다.
                </p>
                <p className="font-serif text-xl italic leading-[1.6] text-foreground sm:text-2xl">
                  &ldquo;어떤 걸 선택해야 할까요?&rdquo;
                </p>
                <p>
                  그 질문 뒤에는 언제나 <span className="text-foreground">몸의 이야기</span>가 있고,
                  말이 되지 못한 <span className="text-foreground">마음의 이야기</span>가 있고,
                  잘 정리되지 못한 <span className="text-foreground">스스로의 표현</span>이 있었습니다.
                </p>
                <p>
                  우리는 AI 기술을 빌려 그 이야기들에 형태를 부여합니다.
                  오래된 지혜와 데이터, 전문 지식과 알고리즘, 문장의 구조와 감각 —
                  서로 다른 언어들을 하나의 도구로 이어내는 일을 합니다.
                </p>
                <p>
                  복잡함은 기술에게, 가벼움은 사람에게.
                  그 단순한 원칙이 웰빙이너스가 만드는 모든 서비스의 출발점이며,
                  앞으로도 변하지 않을 방향입니다.
                </p>
              </div>
            </Reveal>

            {/* Side panel */}
            <Reveal delay={200} className="lg:col-span-5">
              <div className="border-t border-border-strong pt-10">
                <p className="eyebrow">Our Principle</p>
                <blockquote className="mt-6 font-serif text-2xl leading-[1.55] text-foreground sm:text-[1.75rem]">
                  &ldquo;웰빙은 어딘가 멀리 있는 것이 아니라,
                  우리 안에서 시작됩니다.&rdquo;
                </blockquote>
              </div>

              <dl className="mt-14 space-y-10 sm:mt-16">
                <div>
                  <dt className="eyebrow">Established</dt>
                  <dd className="mt-3 font-serif text-xl text-foreground sm:text-2xl">
                    2025
                  </dd>
                  <dd className="mt-2 text-[14px] leading-[1.8] text-muted">
                    AI · 헬스케어 · 콘텐츠
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">Focus</dt>
                  <dd className="mt-3 font-serif text-xl text-foreground sm:text-2xl">
                    Care × Technology
                  </dd>
                  <dd className="mt-2 text-[14px] leading-[1.8] text-muted">
                    현장의 전문성과 AI 기술을
                    <br />
                    일상의 도구로 엮어내는 일
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">Practice</dt>
                  <dd className="mt-3 font-serif text-xl text-foreground sm:text-2xl">
                    Small, Solid Tools
                  </dd>
                  <dd className="mt-2 text-[14px] leading-[1.8] text-muted">
                    화려함보다 단단함을,
                    <br />
                    새로움보다 쓸모를 먼저
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────── */}
      <footer id="contact" className="bg-dark-bg text-dark-fg">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: brand + contact */}
            <div className="lg:col-span-7">
              <p className="eyebrow text-dark-muted">Contact</p>
              <h3 className="mt-4 font-serif text-3xl leading-[1.2] text-dark-fg sm:text-4xl lg:text-5xl">
                Let&apos;s talk.
              </h3>
              <a
                href="mailto:wellbeinginus@gmail.com"
                data-cursor="hover"
                className="link-underline mt-8 inline-block text-lg text-dark-fg sm:text-xl"
              >
                wellbeinginus@gmail.com
              </a>
            </div>

            {/* Right: navigation */}
            <div className="lg:col-span-5">
              <p className="eyebrow text-dark-muted">Navigate</p>
              <ul className="mt-4 space-y-2 text-[15px] text-dark-fg">
                <li>
                  <a href="#services" className="link-underline hover:text-dark-fg">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="link-underline hover:text-dark-fg">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="https://harutine.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline hover:text-dark-fg"
                  >
                    HArutine ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom: small corporate info */}
          <div className="mt-20 border-t border-dark-border pt-8 sm:mt-24 sm:pt-10">
            <div className="flex flex-col gap-4 text-[11px] leading-relaxed text-dark-muted sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <p>&copy; {year} 주식회사 웰빙이너스. All rights reserved.</p>
              <p className="tracking-[0.22em]">WELLBEINGIN.US</p>
            </div>
            <p className="mt-4 text-[11px] leading-[1.8] text-dark-muted/80">
              <span className="nowrap">주식회사 웰빙이너스</span>
              <span className="mx-2 text-dark-muted/50">·</span>
              <span className="nowrap">대표 하윤지</span>
              <span className="mx-2 text-dark-muted/50">·</span>
              <span className="nowrap">사업자등록번호 570-86-03233</span>
              <br />
              <span className="nowrap">강원특별자치도 원주시 오성마을길 63-25, 201-p378</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const isLive = service.status === "live";

  const content = (
    <article
      data-cursor={isLive ? "view" : undefined}
      className={`group relative flex h-full flex-col border-r border-b border-border bg-surface p-8 transition-colors duration-500 sm:p-10 lg:p-14 ${
        isLive ? "hover:bg-brand-wash" : "opacity-75"
      }`}
    >
      <div className="mb-10 flex items-center justify-between">
        <p className="eyebrow">{service.category}</p>
        <span
          className={`inline-flex items-center gap-1.5 text-[10px] font-medium tracking-[0.22em] uppercase ${
            isLive ? "text-brand" : "text-subtle"
          }`}
        >
          <span
            className={`inline-block h-1.5 w-1.5 rounded-full ${
              isLive ? "bg-brand" : "bg-subtle"
            }`}
          />
          {isLive ? "Live" : "Soon"}
        </span>
      </div>

      <h3 className="font-serif text-2xl leading-tight text-foreground sm:text-[1.875rem]">
        {service.name}
      </h3>
      <p className="mt-3 text-[15px] font-medium text-foreground-soft">
        {service.tagline}
      </p>
      <p className="mt-5 flex-1 text-[14px] leading-[1.85] text-muted">
        {service.description}
      </p>

      {isLive && (
        <div className="mt-10 flex items-center gap-3 text-[12px] font-medium text-foreground">
          <span className="tracking-[0.22em] uppercase">Visit</span>
          <span className="relative block h-px w-10 overflow-hidden bg-border-strong">
            <span className="absolute inset-0 origin-left scale-x-0 bg-foreground transition-transform duration-500 group-hover:scale-x-100" />
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
