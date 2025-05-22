import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {    
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <section
          id="about"
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-800"
        >
          <div className="text-center z-10 px-4 max-w-3xl mx-auto">
            <h1
              data-aos="fade-up"
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent leading-tight"
            >
              About me
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              style={{ fontFamily: "Inter, sans-serif" }}
              className="text-gray-300 text-lg leading-relaxed text-left"
            >
              Full-stack software developer passionate about building clean, efficient, and scalable applications.
              I’ve worked across a wide range of technologies and languages — including Python, Java, and JavaScript —
              delivering high-quality code in both frontend and backend environments.
              <br /><br />
              What drives me most is the thrill of creating impactful, user-focused web applications that solve real problems.
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
