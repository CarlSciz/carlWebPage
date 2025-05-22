import "./Home.css"

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16 p-8">
        <div className="animate-text-bounce-in text-center z-10 px-4 max-w-lg mx-auto">
          <h1 className="text-2xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent leading-tight">
            What up Doe, I'm Carl!
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Full-Stack Software Developer <br />
            Professional Wrestling aficionado
          </p>
        </div>
        <div>
          <img
            src="/self_2d_image.png"
            alt="Carl 2D Selfie"
            className="animate-selfie-bounce-in w-80 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
