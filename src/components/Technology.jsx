import React, { useState } from "react";
import {
  Code2,
  Database,
  Server,
  Wrench,
  GitBranch,
  Brain,
  Globe,
  Layers,
  Terminal,
  Cpu,
  FileCode,
} from "lucide-react";

const skillsData = [
  {
    title: "Frontend",
    icon: <Globe className="w-6 h-6" />,
    skills: [
      {
        name: "React.js",
        icon: <Code2 className="w-5 h-5" />,
        color: "from-blue-400 to-blue-600",
      },
      {
        name: "JavaScript",
        icon: <FileCode className="w-5 h-5" />,
        color: "from-yellow-400 to-yellow-600",
      },
      {
        name: "TypeScript",
        icon: <Code2 className="w-5 h-5" />,
        color: "from-blue-500 to-blue-700",
      },
      {
        name: "HTML/CSS",
        icon: <Layers className="w-5 h-5" />,
        color: "from-orange-400 to-red-500",
      },
      {
        name: "Tailwind CSS",
        icon: <Layers className="w-5 h-5" />,
        color: "from-cyan-400 to-cyan-600",
      },
      {
        name: "Next.js",
        icon: <Code2 className="w-5 h-5" />,
        color: "from-gray-400 to-gray-600",
      },
    ],
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6" />,
    skills: [
      {
        name: "Node.js",
        icon: <Server className="w-5 h-5" />,
        color: "from-green-400 to-green-600",
      },
      {
        name: "Express.js",
        icon: <Server className="w-5 h-5" />,
        color: "from-gray-400 to-gray-600",
      },
      {
        name: "Python",
        icon: <Code2 className="w-5 h-5" />,
        color: "from-blue-400 to-yellow-500",
      },
      {
        name: "FastAPI",
        icon: <Server className="w-5 h-5" />,
        color: "from-green-500 to-teal-500",
      },
      {
        name: "REST APIs",
        icon: <Globe className="w-5 h-5" />,
        color: "from-purple-400 to-purple-600",
      },
    ],
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6" />,
    skills: [
      {
        name: "MongoDB",
        icon: <Database className="w-5 h-5" />,
        color: "from-green-400 to-green-600",
      },
      {
        name: "PostgreSQL",
        icon: <Database className="w-5 h-5" />,
        color: "from-blue-400 to-blue-600",
      },
      {
        name: "MySQL",
        icon: <Database className="w-5 h-5" />,
        color: "from-orange-400 to-orange-600",
      },
      {
        name: "Supabase",
        icon: <Database className="w-5 h-5" />,
        color: "from-green-400 to-blue-500",
      },
    ],
  },
  {
    title: "AI/ML",
    icon: <Brain className="w-6 h-6" />,
    skills: [
      {
        name: "OpenAI",
        icon: <Cpu className="w-5 h-5" />,
        color: "from-blue-400 to-purple-500",
      },
      {
        name: "Prompt Engineering",
        icon: <FileCode className="w-5 h-5" />,
        color: "from-indigo-400 to-purple-600",
      },
      {
        name: "LLMs",
        icon: <Brain className="w-5 h-5" />,
        color: "from-green-400 to-blue-500",
      },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      {
        name: "Git/GitHub",
        icon: <GitBranch className="w-5 h-5" />,
        color: "from-gray-400 to-gray-600",
      },
      {
        name: "AWS",
        icon: <Wrench className="w-5 h-5" />,
        color: "from-orange-400 to-yellow-500",
      },
      {
        name: "Linux",
        icon: <Terminal className="w-5 h-5" />,
        color: "from-gray-400 to-gray-600",
      },
      {
        name: "Visual Studio Code",
        icon: <FileCode className="w-5 h-5" />,
        color: "from-indigo-400 to-blue-500",
      },
      {
        name: "Insomnia",
        icon: <Terminal className="w-5 h-5" />,
        color: "from-pink-400 to-purple-500",
      },
      {
        name: "Postman",
        icon: <Terminal className="w-5 h-5" />,
        color: "from-orange-400 to-pink-500",
      },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section
      id="technology"
      className="py-8 sm:py-20 bg-[#0f172a] text-white scroll-mt-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl h-12 font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Technology Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {skillsData.map((category, index) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeCategory === index
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105"
                  : "bg-[#1e293b] text-gray-300 hover:text-white hover:bg-[#334155] border border-white/10"
              }`}
            >
              {category.icon}
              <span className="font-medium">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData[activeCategory].skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group bg-[#1e293b] border border-white/10 rounded-xl p-4 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {skill.icon}
                  </div>
                  <span className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
