import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="about" className="about-section min-h-screen flex items-center justify-center">
      <div className="text-center z-10 px-4 max-w-3xl mx-auto">
        <h1
          data-aos="fade-up"
          className="text-5xl md:text-7xl about-heading mb-6 leading-tight"
        >
          About me
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg leading-relaxed text-left about-text"
        >
          Full-stack software developer passionate about building clean, efficient, and scalable applications.
          I’ve worked across a wide range of technologies and languages — including Python, Java, and JavaScript —
          delivering high-quality code in both frontend and backend environments.
          <br /><br />
          What drives me most is the thrill of creating impactful 
          user-focused applications that solve real problems.
          <br /><br />
          My journey into software began unexpectedly during an internship with a semi-pro soccer team.
          That experience brought me to a crossroads — and I made the decision to hang up my graphic design career
          and fully pursue my passion for programming. I haven’t looked back since.
        </p>
      </div>
    </section>
  );
};

export default About;
