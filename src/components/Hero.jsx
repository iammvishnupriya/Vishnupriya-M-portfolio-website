import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white px-4 pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-block bg-gradient-to-r from-[#8B1538] to-[#A0153E] text-white px-6 py-3 rounded-full text-lg font-bold mb-4 shadow-lg">
              ✨ Welcome to my portfolio
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="text-[#8B1538] whitespace-nowrap">Vishnupriya M</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-medium">
              Java Full Stack Developer
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Specializing in Spring Boot, React, and AI Integration
            </p>
            <p className="text-base text-gray-600 mb-8">
              <span className="text-[#8B1538] font-semibold">1.4 Years Experience</span> at HEPL | Building scalable backend systems with intelligent AI-driven solutions
            </p>
            <div className="flex gap-4">
              <a href="#projects" className="bg-[#8B1538] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6B0F2A] transition-all shadow-lg">
                View Projects
              </a>
              <a href="#contact" className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold border-2 border-gray-300 hover:border-[#8B1538] hover:text-[#8B1538] transition-all">
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#A0153E] to-[#8B1538] rounded-full blur-2xl opacity-20"></div>
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-[#A0153E] to-[#8B1538] p-2 shadow-2xl">
                <img src={profileImg} alt="Vishnupriya M" className="w-full h-full rounded-full object-cover bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
