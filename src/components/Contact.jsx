const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-gradient-to-br from-[#8B1538] to-[#6B0F2A]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Let's Connect</h2>
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20">
          <p className="text-white/90 mb-4">Open to new opportunities and collaborations</p>
          <div className="mb-6">
            <p className="text-white/80 text-sm mb-2">Email</p>
            <a href="mailto:vishdhana35@gmail.com" className="text-white text-xl font-bold hover:text-[#D4A5B3] transition-colors">
              vishdhana35@gmail.com
            </a>
          </div>
          <div className="flex justify-center gap-4">
            <a href="https://www.linkedin.com/in/m-vishnupriya-884a27272" target="_blank" rel="noopener noreferrer" className="bg-white text-[#8B1538] px-6 py-2 rounded-lg font-semibold hover:bg-[#F5E6EA] transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/iammvishnupriya" target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
