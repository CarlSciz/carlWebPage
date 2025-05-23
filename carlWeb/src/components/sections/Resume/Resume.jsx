import "./Resume.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaFilePdf } from "react-icons/fa";

const Resume = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="resume" className="resume-section min-h-screen flex items-center justify-center">
      <div className="text-center z-10 px-4 w-full">
      <h1
  data-aos="fade-up"
  className="text-5xl md:text-7xl resume-heading mb-10 leading-tight flex items-center justify-center gap-3"
>
  Resume
  <a href="/Resume_Carl_Scozzari.pdf" download>
    <FaFilePdf size={40} className="text-white hover:text-gray-400" />
  </a>
</h1>


        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-left space-y-8 max-w-2xl mx-auto text-lg resume-text"
        >
          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">University of Michigan</h3>
              <p className="text-sm resume-dates">Jan 2023 – Present</p>
            </div>
            <p className="resume-role">Full Stack Applications Developer</p>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Nucamp</h3>
              <p className="text-sm resume-dates">Sep 2021 – May 2023</p>
            </div>
            <p className="resume-role">Software Developer Instructor</p>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Geonexus</h3>
              <p className="text-sm resume-dates">Mar 2021 – Aug 2022</p>
            </div>
            <p className="resume-role">Software Developer</p>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Larky</h3>
              <p className="text-sm resume-dates">Feb 2020 – Jan 2021</p>
            </div>
            <p className="resume-role">Full-Stack/Mobile Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
