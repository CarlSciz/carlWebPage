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
    summary: "Building and supporting modern applications with an emphasis on maintainability, usability, and delivery."
  },
  {
    company: "Nucamp",
    dates: "Sep 2021 - May 2023",
    role: "Software Developer Instructor",
    summary: "Taught development fundamentals, mentored students, and translated technical concepts into practical outcomes."
  },
  {
    company: "Geonexus",
    dates: "Mar 2021 - Aug 2022",
    role: "Software Developer",
    summary: "Worked across product and engineering needs to deliver reliable software in collaborative team environments."
  },
  {
    company: "Larky",
    dates: "Feb 2020 - Jan 2021",
    role: "Full-Stack/Mobile Developer",
    summary: "Contributed to cross-platform experiences spanning mobile, backend services, and user-facing product work."
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
            <h2 className="section-title mt-6">Experience with depth and range.</h2>
            <p className="section-copy mt-6">
              A track record that spans product delivery, instruction, and hands-on engineering across multiple stacks.
            </p>
            <a href="/Resume_Carl_Scozzari.pdf" download className="resume-download mt-8">
              <FaFilePdf size={20} />
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
                    <div>
                      <h3 className="m-0 text-xl font-semibold text-[var(--ink-900)]">{item.company}</h3>
                      <p className="resume-role text-base font-semibold">{item.role}</p>
                    </div>
                    <p className="resume-dates m-0">{item.dates}</p>
                  </div>
                  <p className="resume-role mt-4">{item.summary}</p>
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
