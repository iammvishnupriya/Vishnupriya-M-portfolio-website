const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">About Me</h2>
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Driven IT professional with an MCA degree, equipped with a solid foundation in software development, database management, and project coordination. Committed to continuous learning and professional growth, I aim to collaborate with forward-thinking teams to drive impactful technological advancements.
          </p>
          <div className="bg-gradient-to-br from-[#8B1538] to-[#6B0F2A] p-6 rounded-xl text-white">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <span>🏆</span> Academic Excellence
            </h3>
            <div className="space-y-3">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border-2 border-white/30">
                <p className="font-bold text-lg">Master of Computer Applications (MCA)</p>
                <p className="text-sm">Meenakshi College of Engineering</p>
                <p className="text-sm">2022-2024 | GPA: 9.3/10</p>
                <p className="text-white font-bold text-base mt-2 bg-white/20 px-3 py-1 rounded inline-block">🥇 College Topper</p>
                <p className="text-white font-bold text-base mt-2 bg-white/20 px-3 py-1 rounded inline-block ml-2">⭐ 9th Rank in Anna University</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border-2 border-white/30">
                <p className="font-bold text-lg">BSc. Mathematics</p>
                <p className="text-sm">C. Kandaswami Naidu College for Women</p>
                <p className="text-sm">2019-2022 | GPA: 9.4/10</p>
                <p className="text-white font-bold text-base mt-2 bg-white/20 px-3 py-1 rounded inline-block">🏅 Meritorious Student Award</p>
                <p className="text-white font-bold text-base mt-2 bg-white/20 px-3 py-1 rounded inline-block ml-2">💰 ₹40,000 Memorial Scholarship</p>
                <p className="text-xs mt-1 text-white/80">(Thiruvalluvar University)</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2 text-gray-900">💻 Technical Expertise</h3>
            <p className="text-gray-700 text-sm">
              Strong proficiency in Java, Spring Boot, REST APIs, React, MySQL, and AI Integration. Hands-on experience in developing enterprise-level applications, integrating GPT-4, and working with JWT authentication, multi-database sync, and scheduled jobs.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#A0153E] to-[#8B1538] p-6 rounded-xl text-white">
            <h3 className="text-xl font-bold mb-2">🎯 Career Goal</h3>
            <p className="text-sm">
              Seeking a challenging role in a dynamic environment where I can apply my programming expertise, enhance my technical skills, and contribute to innovative solutions that solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
