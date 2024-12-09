const skillCategories = [
  {
    name: "Product Management",
    skills: [
      "Design Thinking", "Problem Solving", "Prototyping", "Roadmapping", "Prioritization",
      "Analytical Thinking", "Competitive Analysis", "UX/UI", "Marketing", "A/B Testing",
      "Agile", "Leadership", "Teamwork"
    ]
  },
  {
    name: "Technical Skills",
    skills: [
      "Data Analytics", "SQL", "Web Development (MERN)", "NextJS", "Flask", "AWS",
      "DevOps", "System Design", "Machine Learning", "Generative AI"
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Skills & Expertise</h2>
        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

