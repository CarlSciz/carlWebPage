import "./Home.css";

const Home = () => {
  return (
    <header id="home" className="home-section flex items-center">
      <div className="section-frame relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="home-fade space-y-7 text-left">
            <div className="space-y-4">
              <p className="home-kicker">Full-Stack Software Engineer</p>
              <h1 id="home-title" className="home-title">
                Architecting scalable applications
                <span className="home-title-accent">for real-world complexity.</span>
              </h1>
            </div>
            <p className="home-copy">
              Full-stack software engineer with a track record of building high-performance applications,
              backend services, and API-driven workflows that streamline operations and support data-driven
              decision making. Experienced across Python, Java, and JavaScript, with hands-on depth in
              distributed systems, CI/CD pipelines, cloud tooling, and resilient platform design.
            </p>
            <div className="home-fade-delay flex flex-wrap gap-3">
              <span className="home-chip rounded-full px-4 py-2 text-sm font-semibold">Python, Java, JavaScript</span>
              <span className="home-chip rounded-full px-4 py-2 text-sm font-semibold">Backend Services + API Design</span>
              <span className="home-chip rounded-full px-4 py-2 text-sm font-semibold">Cloud, CI/CD, Distributed Systems</span>
            </div>
            <div className="home-fade-delay-2 flex flex-wrap gap-4">
              <a href="#contact" className="home-primary-link rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.18em]">
                Start a Conversation
              </a>
              <a href="#resume" className="home-secondary-link rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.18em]">
                View Experience
              </a>
            </div>
            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              <div className="home-stat-card rounded-[1.5rem] p-5">
                <p className="home-stat-value">5+</p>
                <p className="mt-2 text-sm font-medium text-[var(--ink-700)]">Years building across the stack</p>
              </div>
              <div className="home-stat-card rounded-[1.5rem] p-5">
                <p className="home-stat-value">API</p>
                <p className="mt-2 text-sm font-medium text-[var(--ink-700)]">Workflow automation, integrations, and platform services</p>
              </div>
              <div className="home-stat-card rounded-[1.5rem] p-5">
                <p className="home-stat-value">Cloud</p>
                <p className="mt-2 text-sm font-medium text-[var(--ink-700)]">Docker, AWS, Airflow, PostgreSQL, MySQL</p>
              </div>
            </div>
          </div>

          <div className="home-fade-delay relative flex justify-center lg:justify-end">
            <div className="home-portrait-wrap">
              <div className="home-portrait-ring" />
              <div className="glass-panel home-card relative max-w-md overflow-hidden p-6">
                <div className="mb-5 flex justify-end text-left">
                  <div className="rounded-full bg-white/70 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--teal-700)]">
                    Available
                  </div>
                </div>

                <div className="overflow-hidden rounded-[1.7rem] bg-[linear-gradient(180deg,rgba(139,195,209,0.22),rgba(255,255,255,0.86))] p-4">
                  <img
                    src="/self_2d_image.png"
                    alt="A 2D illustration of Carl, a full-stack software developer"
                    className="mx-auto h-auto w-72 object-contain drop-shadow-[0_18px_30px_rgba(20,54,66,0.18)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
