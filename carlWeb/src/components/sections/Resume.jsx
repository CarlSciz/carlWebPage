import "./Resume.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="resume" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-800">
      <div className="text-center z-10 px-4 w-full">
        <h1
          data-aos="fade-up"
          className="text-5xl md:text-7xl font-bold mb-10 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent leading-tight"
        >
          Resume
        </h1>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-left text-gray-300 space-y-8 max-w-2xl mx-auto text-lg"
        >
          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">University of Michigan</h3>
              <p className="text-sm text-gray-400">Jan 2023 – Present</p>
            </div>
            <p className="text-gray-400">Full Stack Applications Developer</p>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Nucamp</h3>
              <p className="text-sm text-gray-400">Sep 2021 – May 2023</p>
            </div>
            <p className="text-gray-400">Software Developer Instructor</p>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Geonexus</h3>
              <p className="text-sm text-gray-400">Mar 2021 – Aug 2022</p>
            </div>
            <p className="text-gray-400">Software Developer</p>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Larky</h3>
              <p className="text-sm text-gray-400">Feb 2020 – Jan 2021</p>
            </div>
            <p className="text-gray-400">Full-Stack/Mobile Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
