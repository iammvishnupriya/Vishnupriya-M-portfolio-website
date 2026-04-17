const Skills = () => {
  const skillCategories = [
    { category: "Core Skills", skills: ["Java", "Spring Boot", "REST APIs", "Data Structures & Algorithms", "OOPs"] },
    { category: "Backend & API", skills: ["Spring Security", "JWT Authentication", "Microservices Architecture", "API Design", "WebSocket"] },
    { category: "Database", skills: ["MySQL", "MongoDB", "SQL Optimization"] },
    { category: "Frontend", skills: ["React.js", "HTML5", "CSS3", "JavaScript"] },
    { category: "AI & Modern Tech", skills: ["Prompt Engineering", "OpenAI API Integration", "Basic Machine Learning"] },
    { category: "Tools & DevOps", skills: ["Git & GitHub", "Postman", "Swagger / OpenAPI", "VS Code / IntelliJ IDEA", "Maven / Gradle", "Azure Portal", "MongoDB Compass", "MySQL Workbench", "Docker", "Jira / Agile Tools"] }
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Skills</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-[#8B1538] mb-3">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="bg-[#F5E6EA] text-[#8B1538] px-2 py-1 rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
