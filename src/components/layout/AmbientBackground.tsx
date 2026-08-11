export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[var(--bg)] transition-colors duration-500" />

      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(color-mix(in srgb, var(--text) 14%, transparent) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 90%)",
        }}
      />

      <div
        className="absolute -top-32 left-1/4 h-[520px] w-[520px] rounded-full opacity-25 blur-[120px] animate-float-slower"
        style={{ background: "var(--primary)" }}
      />
      <div
        className="absolute top-1/3 -right-24 h-[420px] w-[420px] rounded-full opacity-20 blur-[110px] animate-float-slow"
        style={{ background: "var(--accent)" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[460px] w-[460px] rounded-full opacity-[0.14] blur-[130px] animate-float-slower"
        style={{ background: "var(--primary)" }}
      />

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.07]"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="neural-lines"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 60 L60 0 L120 60 L60 120 Z"
              fill="none"
              stroke="var(--text)"
              strokeWidth="0.6"
            />
            <circle cx="60" cy="0" r="1.4" fill="var(--text)" />
            <circle cx="0" cy="60" r="1.4" fill="var(--text)" />
            <circle cx="120" cy="60" r="1.4" fill="var(--text)" />
            <circle cx="60" cy="120" r="1.4" fill="var(--text)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#neural-lines)" />
      </svg>
    </div>
  );
}
