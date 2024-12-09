const projects = [
  {
    title: (
      <a href="https://drive.google.com/file/d/11MgqY6yTGCJudso259ictYUdNf4omCAz/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        Product School Case Competition: Boosting Creator Monetization on Instagram      </a>
    ),
    description: "Instagram faces growing competition from TikTok and YouTube in the creator monetization space. With over 2 billion monthly active users and 50 million creators, retaining creator loyalty requires innovative and impactful direct monetization solutions.",
    achievements: [
      "Developed mobile-first monetization features, addressing competition and market gaps.",
      "Prioritized rollouts using the RICE framework with prototypes in Balsamiq and Figma.",
      "Defined KPIs and GTM strategies to ensure success."
    ],
    tags: ["Product Management", "Case Study", "Creator Monetization"]
  },
  {
    title: (
      <a href="https://www.behance.net/gallery/202299389/Salesforece-Design-Challenge" target="_blank" rel="noopener noreferrer">
        Salesforce Design Days - Entrepreneurship Program for Marginalized Women      </a>
    ),
    description: "Design an entrepreneurial program to empower marginalized women entrepreneurs",
    achievements: [
      "Empowered marginalized women through mentorship and entrepreneurship training.",
      "Leveraged ASHA workers for outreach and provided digital resources.",
      "Fostered community growth via sustainable women-led ventures.",
      "Planning to prototype a scalable platform for broader impact."
    ],
    tags: ["Design Days", "Entrepreneures", "Community"]
  },
  {
    title: (
      <a href="  https://www.behance.net/gallery/195239731/Google-Product-Challenge" target="_blank" rel="noopener noreferrer">
        ANNA-DATA    
        </a>),
    description: "Mobile app leveraging Decision Tree model to enhance farmers' ROI and strategic decision-making.",
    achievements: [
      "Google Hackathon Finalist",
      "Led cross-functional team and developed application Backed by ML backend",
      "Developed AI-driven prototype for farmers"
    ],
    tags: ["Mobile App", "AI", "Agriculture","User Centric design"]
  },
  {
    title: (
      <a href="https://youtu.be/tnUIhfSO5VU?si=IvbnJUbrR7j8wtzO" target="_blank" rel="noopener noreferrer">
        ProAI-Guard : Bias Detection and Mitigation  
        </a>),
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

