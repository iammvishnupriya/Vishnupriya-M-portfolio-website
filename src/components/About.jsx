const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">About Me</h2>
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            I started my journey in technology with a strong academic foundation, completing my MCA from Meenakshi College of Engineering with 92% and securing 9th rank under Anna University. Before that, I graduated as a college topper in B.Sc. Mathematics with 94% from Thiruvalluvar University, earning a meritorious scholarship. My interest has always been in building systems that solve real problems, which led me into software development.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Currently, I work as a Developer Trainee at HEPL, where I design and build backend systems using Java and Spring Boot. I've worked on multiple real-world applications including Learning Management Systems, outlet approval workflows, and Agile platforms. My work involves developing REST APIs, implementing JWT-based authentication, integrating Azure services, and enabling real-time features using WebSockets. I have also explored AI integrations, including GPT-based image validation and intelligent workflows.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Beyond work, I've led a hackathon team to build an AI-based PPE compliance system, securing a top position among 26 teams. I also enjoy experimenting with combining backend systems and AI to create smarter applications.
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
              Strong proficiency in Java, Spring Boot, REST APIs, React, MySQL, MongoDB, and AI Integration. Hands-on experience in developing enterprise-level applications, integrating GPT-4, working with JWT authentication, WebSockets, Azure services, multi-database sync, and scheduled jobs.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#A0153E] to-[#8B1538] p-6 rounded-xl text-white">
            <h3 className="text-xl font-bold mb-2">🎯 Career Goal</h3>
            <p className="text-sm">
              Looking ahead, I aim to grow into a Software Engineer role where I can build scalable systems, work on distributed architectures, and integrate AI into production-grade applications. I'm open to opportunities that challenge me to think deeper, build better, and solve meaningful problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
