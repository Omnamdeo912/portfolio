const projects = [
  {
    title: "OpenHLS",
    description: "AI-based platform to onboard Bio-informatics projects with streamlined workflows.",
    achievements: [
      "Led end-to-end product development",
      "Increased user satisfaction by 25%",
      "Boosted user engagement by 15%"
    ],
    tags: ["Product Management", "AI", "Bio-informatics"]
  },
  {
    title: "Data Foundations",
    description: "Dataset management platform focusing on GDPR compliance and monetization.",
    achievements: [
      "Improved user retention by 20%",
      "Introduced monetization strategies",
      "Increased platform engagement by 30%"
    ],
    tags: ["Data Management", "GDPR", "Monetization"]
  },
  {
    title: "ANNADATA",
    description: "Mobile app leveraging Decision Tree model to enhance farmers' ROI and strategic decision-making.",
    achievements: [
      "Google Hackathon Finalist",
      "Led cross-functional team",
      "Developed AI-driven prototype"
    ],
    tags: ["Mobile App", "AI", "Agriculture"]
  },
  {
    title: "ProAi Guard",
    description: "Framework to detect and mitigate bias in LLM generated code.",
    achievements: [
      "Enhanced model fairness",
      "Improved user trust",
      "Developed strategic framework"
    ],
    tags: ["AI Ethics", "LLM", "Bias Detection"]
  }
]

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <ul className="list-disc pl-5 mb-4">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-gray-600">{achievement}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

