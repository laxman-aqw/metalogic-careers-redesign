import React, { useState } from "react";

interface Job {
  id: number;
  title: string;
  type: string;
  location: string;
  status: "Apply" | "Closed";
  postedDate: string;
  deadline: string;
}

const VacanciesSection: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const jobs: Job[] = [
    {
      id: 1,
      title: "MERN Stack Intern",
      type: "Full Time",
      location: "Kathmandu",
      status: "Closed",
      postedDate: "2025-04-01",
      deadline: "2025-04-30",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      type: "Full Time",
      location: "Kathmandu",
      status: "Apply",
      postedDate: "2025-05-01",
      deadline: "2025-05-31",
    },
    {
      id: 3,
      title: "Frontend Developer",
      type: "Full Time",
      location: "Kathmandu",
      status: "Closed",
      postedDate: "2025-03-10",
      deadline: "2025-04-10",
    },
    {
      id: 4,
      title: "Frontend Developer",
      type: "Full Time",
      location: "Lalitpur",
      status: "Closed",
      postedDate: "2025-02-20",
      deadline: "2025-03-15",
    },
    {
      id: 5,
      title: "MERN Stack Intern",
      type: "Full Time",
      location: "Lalitpur",
      status: "Closed",
      postedDate: "2025-01-15",
      deadline: "2025-02-15",
    },
    {
      id: 6,
      title: "Backend Developer",
      type: "Full Time",
      location: "Lalitpur, Nepal",
      status: "Closed",
      postedDate: "2025-03-05",
      deadline: "2025-03-31",
    },
    {
      id: 7,
      title: "React-Native Intern",
      type: "Full Time",
      location: "Lalitpur, Nepal",
      status: "Closed",
      postedDate: "2025-02-01",
      deadline: "2025-02-28",
    },
    {
      id: 8,
      title: "Flutter Developer",
      type: "Full Time",
      location: "Lalitpur, Nepal",
      status: "Closed",
      postedDate: "2025-03-01",
      deadline: "2025-03-31",
    },
    {
      id: 9,
      title: "FRONTEND DEVELOPER",
      type: "Full Time",
      location: "Lalitpur",
      status: "Closed",
      postedDate: "2025-01-10",
      deadline: "2025-01-31",
    },
    {
      id: 10,
      title: "Junior UI/UX Designer",
      type: "Full Time",
      location: "Lalitpur, Nepal",
      status: "Closed",
      postedDate: "2025-02-15",
      deadline: "2025-03-15",
    },
    {
      id: 11,
      title: "Marketing Executive",
      type: "Full Time",
      location: "Nepal (with potential for international travel)",
      status: "Closed",
      postedDate: "2025-01-20",
      deadline: "2025-02-20",
    },
    {
      id: 12,
      title: "Frontend Intern (MERN Stack)",
      type: "Full Time",
      location: "Lalitpur, Kathmandu",
      status: "Closed",
      postedDate: "2025-04-01",
      deadline: "2025-04-25",
    },
  ];

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );
return (
    <section id="open-positions" className="py-20 px-4 max-w-6xl mx-auto">

      <div className="text-center mb-12">
        <h5 className="text-lg text-yellow-500 font-semibold">Opportunities</h5>
        <h2 className="text-4xl font-bold text-blue-900 mt-2">Available Vacancies</h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="🔍 Job Title or Keyword"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select className="w-full md:w-40 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Level</option>
          <option value="intern">Intern</option>
          <option value="junior">Junior</option>
          <option value="mid">Mid</option>
          <option value="senior">Senior</option>
        </select>
      </div>

      <div className="text-sm text-gray-600 mb-6">
        {filteredJobs.length} Job Offer{filteredJobs.length !== 1 ? "s" : ""}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="group relative bg-white border rounded-xl p-5 shadow hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-900 mb-2">{job.title}</h3>
            <div className="text-sm text-gray-600 mb-1">💼 {job.type}</div>
            <div className="text-sm text-gray-600 mb-4">📍 {job.location}</div>

            <div>
              {job.status === "Apply" ? (
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 group-hover:opacity-100 group-hover:scale-110 duration-300 text-white text-sm px-4 py-2 rounded-lg transition">
                  Apply Now
                </button>
              ) : (
                <span className="inline-block bg-red-100 text-red-600 text-sm font-medium px-3 py-1 rounded-full">
                  Closed
                </span>
              )}
            </div>

            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-gray-50 border p-2 rounded-md text-xs text-gray-700 shadow transition duration-300">
              <p><strong>Posted:</strong> {job.postedDate}</p>
              <p><strong>Deadline:</strong> {job.deadline}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="text-center text-gray-500 mt-16">
          <p className="text-lg">😕 No job offers match your search.</p>
          <p className="text-sm mt-1">Try different keywords or reset your filters.</p>
        </div>
      )}
    </section>
  );
};

export default VacanciesSection;