import "./Resume.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaFilePdf } from "react-icons/fa";

const experience = [
  {
    company: "University of Michigan",
    dates: "Jan 2023 - Present",
    role: "Full Stack Applications Developer",
    logoDomain: "umich.edu",
  },
  {
    company: "Nucamp",
    dates: "Sep 2021 - May 2023",
    role: "Software Developer Instructor",
    logoDomain: "nucamp.co",
  },
  {
    company: "Geonexus",
    dates: "Mar 2021 - Aug 2022",
    role: "Software Developer",
    logoDomain: "geonexus.com",
    logoUrl: "https://media.glassdoor.com/sqll/1264219/geonexus-technologies-squareLogo-1613504531903.png",
  },
  {
    company: "Larky",
    dates: "Feb 2020 - Jan 2021",
    role: "Full-Stack/Mobile Developer",
    logoDomain: "larky.com",
    logoUrl: "https://www.sharetec.com/wp-content/uploads/2023/06/Larky_LOGO-hz1-2clr-1024x311.png",
    logoType: "wide",
  }
];

const Resume = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="resume" className="resume-section min-h-screen flex items-center">
      <div className="section-frame">
        <div className="resume-layout">
          <div data-aos="fade-up" className="glass-panel resume-panel text-left">
            <span className="section-eyebrow">Resume</span>
            <h2 className="section-title mt-6">From Complexity to Clarity</h2>
            <p className="section-copy mt-6">
              Fintech startups to GIS-driven utility systems to healthcare-focused applications in higher education, I&apos;ve built and shipped across very different domains &mdash;
              bringing a practical, problem-solving mindset to each.
            </p>
            <a href="/Resume_Carl_Scozzari.pdf" download className="resume-download mt-8">
              <FaFilePdf size={20} aria-hidden="true" />
              Download PDF
            </a>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="glass-panel resume-panel"
          >
            <div className="resume-list text-left">
              {experience.map((item) => (
                <article key={item.company} className="resume-item rounded-[1.5rem] p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="resume-company">
                      <span
                        className={`resume-company-logo ${item.logoType === "wide" ? "wide" : ""}`}
                        aria-hidden="true"
                      >
                        <img
                          src={item.logoUrl || `https://www.google.com/s2/favicons?sz=64&domain=${item.logoDomain}`}
                          alt=""
                        />
                      </span>
                      <div>
                        <h3 className="m-0 text-xl font-semibold text-[var(--ink-900)]">{item.company}</h3>
                        <p className="resume-role text-base font-semibold">{item.role}</p>
                      </div>
                    </div>
                    <p className="resume-dates m-0">{item.dates}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
