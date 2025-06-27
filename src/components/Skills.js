export default function Skills() {
  const skillCategories = {
    "Programming Languages": ["C", "Java", "Python", "JavaScript", "Dart"],
    "Front-End Development": ["HTML", "CSS", "JavaScript", "React", "React Native", "Tailwind CSS"],
    "Back-End Development": ["Node.js", "Express.js"],
    "Databases": ["SQL", "MongoDB"],
    "DevOps": ["Docker"],
    "Frameworks & Libraries": ["React", "React Native"],
    "Version Control": ["Git", "GitHub"],
    "Other Skills": ["Problem-Solving", "Logical Thinking", "Teamwork", "Adaptability"]
  };

  return (
    <section className="bg-primary py-20 px-5 text-white" id="skills">
      <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
      <div className="space-y-8 max-w-4xl mx-auto">
        {Object.entries(skillCategories).map(([category, skills], idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
