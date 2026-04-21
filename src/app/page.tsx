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
          <Link href="/" className="font-serif text-lg tracking-tight text-foreground">
            웰빙이너스
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
          <p className="eyebrow enter">Established 2025 · Seoul & Wonju</p>

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
              주식회사 웰빙이너스는
              <span className="text-foreground"> AI 기술과 약사의 전문성</span>을 결합해,
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
                현재 운영 중인 세 가지 서비스와
                곧 공개될 웰빙이너스 스토어.
                각각은 독립적이되, 서로를 보완하도록 설계됩니다.
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

      {/* ── About ──────────────────────────── */}
      <section id="about" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow">About</p>
              <h2 className="mt-4 font-serif type-headline text-foreground">
                기술로 만드는
                <br />
                가벼운 일상.
              </h2>
              <p className="mt-10 font-serif text-lg italic leading-[1.6] text-brand sm:text-xl">
                &ldquo;웰빙은 어딘가 멀리 있는 것이 아니라,
                <br />
                우리 안에서 시작됩니다.&rdquo;
              </p>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-7">
              <div className="space-y-7 text-[16px] leading-[1.95] text-muted sm:text-[17px]">
                <p>
                  주식회사 웰빙이너스는 AI 기술을 일상의 문제 해결에 접목하는 회사입니다.
                  복잡한 계산과 반복되는 작업은 AI에게, 판단과 감성은 사람에게.
                  이 단순한 원칙이 우리가 만드는 모든 서비스의 출발점입니다.
                </p>
                <p>
                  운세 상담, 블로그 글쓰기, 영양제 큐레이션, 그리고 약사가 직접 선별한 건강기능식품까지.
                  서로 다른 영역이지만 모두
                  &ldquo;<span className="text-foreground font-medium">더 나은 하루</span>&rdquo;
                  라는 한 가지 방향을 공유합니다.
                </p>
                <p>
                  각 서비스는 독립적으로 기능하되,
                  결국 한 사람의 하루를 더 가볍게 만드는 데 기여합니다.
                  우리는 그 믿음을 따라 오늘도 작지만 단단한 도구들을 만들어 갑니다.
                </p>
              </div>
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
              주식회사 웰빙이너스 &middot; 대표 하윤지 &middot; 사업자등록번호 570-86-03233
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> &middot; </span>
              강원특별자치도 원주시 오성마을길 63-25, 201-p378
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
