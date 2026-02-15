const Projects = () => {
  const projects = [
    { title: "LiveWire – Product Demo Tracker", tech: "Java Spring Boot, React, MySQL", description: "Demo tracking and monitoring system for product teams.", github: "https://github.com/iammvishnupriya", type: "Company" },
    { title: "Outlet Approval System", tech: "Spring Boot, GPT-4 API", description: "Retail outlet approval workflow with AI image validation.", github: "https://github.com/iammvishnupriya", type: "Company" },
    { title: "LMS System", tech: "Spring Boot + React", description: "Multi-role login system for Salon Owner, Stylist, and Admin with JWT Authentication and admin approval workflow.", github: "https://github.com/iammvishnupriya", type: "Company" },
    { title: "PPE Compliance System", tech: "Python, AI, Image Processing", description: "Automated visual safety compliance detection system.", github: "https://github.com/iammvishnupriya", type: "Hackathon" },
    { title: "Intrusion Detection on Smart Grid", tech: "Python, LSTM, Ensemble Learning", description: "Ensemble-based IDS using LSTM for smart grid cybersecurity with 86% accuracy. MCA final year project.", github: "https://github.com/iammvishnupriya", type: "Academic" },
    { title: "Placement Management System", tech: "Java Spring Boot, MySQL", description: "Java Spring Boot application for managing campus placements with full CRUD operations.", github: "https://github.com/iammvishnupriya", type: "Academic" }
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition border-t-4 border-[#8B1538]">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                <span className="bg-[#F5E6EA] text-[#8B1538] px-2 py-1 rounded text-xs font-semibold">{project.type}</span>
              </div>
              <p className="text-[#8B1538] font-medium text-sm mb-2">{project.tech}</p>
              <p className="text-gray-700 text-sm mb-3">{project.description}</p>
              <a href={project.github} className="text-[#8B1538] hover:text-[#6B0F2A] font-medium text-sm" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
