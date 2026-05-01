import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="about" className="about-section min-h-screen flex items-center">
      <div className="section-frame">
        <div className="about-grid">
          <div data-aos="fade-up" className="glass-panel about-card text-left">
            <span className="section-eyebrow">About</span>
            <h2 className="section-title mt-6">
              Built through iteration,
              <span className="about-accent"> refined through challenge.</span>
            </h2>
            <p className="section-copy mt-6">
              I&apos;m Carl &mdash; a full-stack developer with a background in building scalable internal tools,
              data pipelines, and user-focused applications. My work spans everything from Flask-based
              systems and APIs to modern frontend experiences, with a strong emphasis on performance,
              reliability, and clean design.
            </p>
            <p className="section-copy mt-4">
              I enjoy wrestling with code &mdash; digging into problems, tracing edge cases, and pushing
              through complexity until things click. Whether it&apos;s debugging production issues,
              optimizing workflows, or designing systems that scale, I&apos;m at my best when I&apos;m solving
              challenges that require both persistence and creativity.
            </p>
            <div className="about-pillars mt-8">
              <div className="about-pillar rounded-[1.5rem] p-5">
                <h3>Full-stack execution</h3>
                <p>
                  From frontend interfaces to backend systems, I build cohesive applications that are
                  both intuitive for users and maintainable at scale.
                </p>
              </div>
              <div className="about-pillar rounded-[1.5rem] p-5">
                <h3>Problem-driven mindset</h3>
                <p>
                  I thrive on solving complex problems &mdash; breaking them down, iterating quickly, and
                  delivering solutions that are thoughtful, efficient, and reliable.
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="glass-panel about-card text-left"
          >
            <p className="about-story">
              Outside of code, I&apos;m a Detroit sports fan through and through, a comic book fanatic,
              and a pro wrestling aficionado &mdash; which probably explains why I enjoy a good challenge.
              I like getting in the ring with tough problems, breaking them down, and working through
              them until they&apos;re solved the right way.
            </p>
            <p className="about-story mt-6">
              My path into software wasn&apos;t traditional. I started in graphic design and found my way
              into development during an internship with a semi-pro soccer team. That moment forced a
              decision, and I chose to go all in on programming. Since then, I&apos;ve been driven by the
              same thing &mdash; building meaningful systems, solving real problems, and continuously getting
              better at the craft.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
