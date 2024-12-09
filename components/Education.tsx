const education = [
  {
    degree: "M.Tech in Product Design and Management",
    institution: "International Institute of Information Technology",
    location: "Hyderabad, India",
    period: "Aug 2023 – May 2025",
    gpa: "CGPA: 8.5/10"
  },
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Lakshmi Narain College of Technology",
    location: "Bhopal, India",
    period: "Aug 2017 – May 2021",
    gpa: "CGPA: 8.8/10"
  }
]

export default function Education() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Education</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {education.map((edu, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-sm text-gray-600">{edu.institution}</p>
                <p className="text-sm text-gray-600">{edu.location}</p>
                <p className="text-sm text-gray-600">{edu.period}</p>
                <p className="text-sm font-semibold text-gray-700 mt-2">{edu.gpa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

