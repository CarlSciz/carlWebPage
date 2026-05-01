import "./Home.css";
import { FaDatabase } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import {
  SiAmazonwebservices,
  SiCss3,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiMysql,
  SiOpenjdk,
  SiOracle,
  SiPostgresql,
  SiPython,
  SiSap,
  SiSwift,
  SiTypescript,
} from "react-icons/si";

const techGroups = [
  {
    label: "Programming Languages",
    items: [
      { name: "Python", Icon: SiPython, color: "#3776ab" },
      { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
      { name: "Java", Icon: SiOpenjdk, color: "#f89820" },
      { name: "Swift", Icon: SiSwift, color: "#f05138" },
      { name: "Kotlin", Icon: SiKotlin, color: "#7f52ff" },
      { name: "HTML", Icon: SiHtml5, color: "#e34f26" },
      { name: "CSS", Icon: SiCss3, color: "#1572b6" },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "Postgres", Icon: SiPostgresql, color: "#4169e1" },
      { name: "MySQL", Icon: SiMysql, color: "#4479a1" },
      { name: "SQL", Icon: FaDatabase, color: "#2d7b83" },
      { name: "Oracle", Icon: SiOracle, color: "#f80000" },
      { name: "SAP", Icon: SiSap, color: "#0faaff" },
    ],
  },
  {
    label: "Cloud Technology",
    items: [
      { name: "AWS", Icon: SiAmazonwebservices, color: "#ff9900" },
      { name: "Azure", Icon: VscAzure, color: "#0078d4" },
      { name: "Google Cloud", Icon: SiGooglecloud, color: "#4285f4" },
    ],
  },
];

const renderTechChip = ({ name, Icon, color }) => (
  <span key={name} className="home-tech-chip" style={{ "--tech-color": color }}>
    <Icon className="home-tech-icon" aria-hidden="true" />
    {name}
  </span>
);

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
              Full-stack software engineer and data engineer with a track record of building high-performance
              applications, backend services, and data pipelines that power real-world systems. I&apos;ve worked
              across Python, Java, and JavaScript, with hands-on experience in distributed systems, CI/CD,
              cloud infrastructure, and resilient platform design. Much of my work sits at the intersection
              of application development and data &mdash; building API-driven workflows, ETL pipelines, and systems
              that turn raw data into something teams can actually use &mdash; and I&apos;m at my best digging into
              problems, optimizing performance, and wrestling with code until things work the right way.
            </p>
            <div className="home-fade-delay home-tech-groups" aria-label="Technology stack">
              {techGroups.map((group) => (
                <div key={group.label} className="home-tech-group">
                  <p className="home-tech-label">{group.label}</p>
                  <div className="home-tech-grid">
                    {group.items.map(renderTechChip)}
                  </div>
                </div>
              ))}
            </div>
            <div className="home-fade-delay-2 flex flex-wrap gap-4">
              <a href="#contact" className="home-primary-link rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.18em]">
                Start a Conversation
              </a>
              <a href="#resume" className="home-secondary-link rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.18em]">
                View Experience
              </a>
            </div>
          </div>

          <div className="home-fade-delay relative flex justify-center lg:justify-end">
            <div className="home-portrait-wrap">
              <div className="home-portrait-ring" />
              <div className="glass-panel home-card relative max-w-md overflow-hidden p-6">
                <div className="mb-5 flex justify-end text-left">
                  <div className="home-availability rounded-full bg-white/70 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--teal-700)]">
                    <span className="home-availability-dot" aria-hidden="true" />
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
