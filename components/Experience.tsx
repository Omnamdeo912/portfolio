const experiences = [
  {
    title: "Product Management Intern",
    company: "I-Hub Data",
    period: "Feb 2024 – Aug 2024",
    description: "Led product initiatives for OpenHLS and Data Foundations, focusing on user satisfaction and stakeholder management.",
    achievements: [
      "Increased user satisfaction by 25% for OpenHLS through end-to-end product development",
      "Boosted user engagement by 15% by integrating post-processing tools",
      "Improved user retention by 20% for Data Foundations and introduced monetization strategies",
      "Spearheaded GDPR compliance, increasing platform engagement by 30%"
    ]
  },
  {
    title: "Software Engineer",
    company: "Infosys Ltd.",
    period: "Aug 2021 – Mar 2023",
    description: "Contributed to cloud migration project, coordinating with the chief architect on virtual machine and database strategy.",
    achievements: [
      "Increased efficiency by 30% through process automation",
      "Enhanced client satisfaction through successful project delivery",
      "Utilized tools such as Git, GitHub, JIRA, Jenkins, Ansible, ReactJS, Docker, and more"
    ]
  },
  {
    title: "Cofounder - Helpnet",
    company: "Azteck Technologies",
    period: "Mar 2019 – Dec 2019",
    description: "Launched Helpnet's MVP in a closed NGO community, facilitating collaboration and resource sharing.",
    achievements: [
      "Achieved 200+ help requests per month",
      "Enhanced user experience, resulting in a 60% retention rate",
      "Iterated on product features based on stakeholder feedback"
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                <p className="text-sm text-gray-600">{exp.company} | {exp.period}</p>
                <p className="mt-2 text-gray-700">{exp.description}</p>
                <ul className="mt-4 list-disc pl-5">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-gray-600">{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

