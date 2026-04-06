export function HeroSection() {
  return (
    <section
      className="relative py-8 md:py-12"
      aria-label="히어로"
    >
      <div className="mx-auto max-w-[160rem] px-6 md:px-10 lg:px-16 w-full">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="animate-fade-up">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
              OLYM Communications
            </p>
            <h1 className="text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-tight" style={{ fontFamily: 'var(--font-hero)' }}>
              We can make a <em className="not-italic text-primary">Difference</em>
            </h1>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs md:text-right animate-fade-up [animation-delay:200ms]">
            사용자 분석과 스토리텔링을 결합하여, 브랜드 정체성을 보여주는 온라인 경험을 설계합니다.
          </p>
        </div>
      </div>
    </section>
  )
}
