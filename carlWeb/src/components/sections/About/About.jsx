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
              Calm systems,
              <span className="about-accent"> confident execution.</span>
            </h2>
            <p className="section-copy mt-6">
              Carl blends engineering discipline with creative instincts, shaping products
              that feel smooth, modern, and memorable from the first interaction.
            </p>
            <div className="about-pillars mt-8">
              <div className="about-pillar rounded-[1.5rem] p-5">
                <h3>Full-stack range</h3>
                <p>Comfortable moving from interface polish to backend architecture while keeping the whole experience cohesive.</p>
              </div>
              <div className="about-pillar rounded-[1.5rem] p-5">
                <h3>User-first mindset</h3>
                <p>Focused on clarity, responsiveness, and the little details that make software feel intentional.</p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="glass-panel about-card text-left"
          >
            <p className="about-story">
              Full-stack software developer passionate about building clean, efficient, and scalable applications.
              I have worked across a wide range of technologies and languages, including Python, Java, and JavaScript,
              delivering high-quality code in both frontend and backend environments.
            </p>
            <p className="about-story mt-6">
              What drives me most is the thrill of creating impactful, user-focused applications that solve real problems.
              I care about the full feel of a product, not just whether it technically works.
            </p>
            <p className="about-story mt-6">
              My journey into software began unexpectedly during an internship with a semi-pro soccer team.
              That experience brought me to a crossroads, and I chose to step away from graphic design and fully pursue programming.
              I have not looked back since.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
