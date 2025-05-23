import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="text-center z-10 max-w-2xl w-full">
        {/* Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://github.com/CarlSciz/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaGithub size={40} />
          </a>
          <a href="https://linkedin.com/in/carl-scozzari/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaLinkedin size={40} />
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start gap-10">
  {/* Contact Info */}
  <div className="flex flex-col justify-start flex-shrink-0 text-left">
    <p
      className="font-bold text-white text-[156px] leading-[0.9em]"
      style={{ fontFamily: "'Unbounded', sans-serif" }}
    >
      Tag
    </p>
    <p
      className="font-bold text-orange-600 text-[156px] leading-[0.8em]"
      style={{ fontFamily: "'Unbounded', sans-serif" }}
    >
      In
    </p>
  </div>

        {/* Contact Form */}
        <div className="w-full max-w-md mx-auto">
          <form className="bg-grey shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4 space-y-4">
              {/* Name input */}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
              />

              {/* Email input */}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />

              {/* Message input */}
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Message"
                rows="4"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
