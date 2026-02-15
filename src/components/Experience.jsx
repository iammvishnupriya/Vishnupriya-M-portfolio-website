const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Experience</h2>
        <div className="space-y-6">
          <div className="bg-[#F5E6EA] p-6 rounded-xl shadow-md border-l-4 border-[#8B1538]">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Developer Trainee</h3>
                <p className="text-lg text-[#8B1538] font-semibold">HEPL</p>
              </div>
              <span className="bg-[#8B1538] text-white px-3 py-1 rounded-full text-sm font-bold">1.4 Years</span>
            </div>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>✓ Built backend modules using Java, Spring Boot, and MySQL</li>
              <li>✓ Developed REST APIs and handled production support</li>
              <li>✓ Integrated GPT-4 for image validation workflows</li>
              <li>✓ Worked on SQL queries and data validation</li>
              <li>✓ Participated and Led Hackathon Team</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-[#8B1538] to-[#6B0F2A] p-6 rounded-xl shadow-md text-white">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🥉</span>
              <div>
                <h3 className="text-xl font-bold">Bronze Winner – Domain Specific Category</h3>
                <p className="text-sm">Hackathon Achievement</p>
              </div>
            </div>
            <h4 className="text-lg font-bold mb-2">Project: Automated Visual Audit for PPE Compliance</h4>
            <ul className="space-y-1 text-sm">
              <li>• <strong>Team Lead</strong> for the project</li>
              <li>• 3-day overnight hackathon</li>
              <li>• Built AI-based compliance detection using Python</li>
              <li>• Won among <strong>26 teams</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
