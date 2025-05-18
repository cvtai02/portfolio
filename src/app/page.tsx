import Image from 'next/image';
import projectsData from '@/data/projects.json';
import experiencesData from '@/data/experiences.json';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <section className="bg-[url(images/deskbg.jpg)] relative bg-no-repeat bg-cover text-white h-screen grid grid-cols-1 ">
        <div className="absolute inset-0 z-10 h-full bg-gradient-to-b from-black to-black/0 to-20% pointer-events-none"></div>
        <div className="w-full mx-auto flex flex-col items-start px-12 md:px-24 justify-center bg-gradient-to-r from-black to-transparent">
          <h1 className="text-5xl font-bold mb-2">Tai Chu Van</h1>
          <div className="mb-8">
            <p className="text-gray-300 mt-2">A passionate and eager-to-learn software engineer</p>
            <p className="text-gray-300">
              dedicated to delivering comprehensive solutions to your challenges
            </p>
            <p className="text-gray-300"></p>
          </div>
          <div>
            <Link href="/blog" className="transform-button">
              Blog
            </Link>
            <Link href="/about" className="transform-button">
              About
            </Link>
          </div>
        </div>

        <ul className="absolute items-stretch h-8 bottom-0 gap-4 mb-4 ms-4 flex justify-center">
          <Link
            className="flex items-stretch"
            href="https://www.facebook.com/cv.tai02"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 32 32"
              width="32"
              height="32"
            >
              <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
            </svg>
          </Link>
          <Link className="flex items-stretch" href="https://github.com/cvtai02" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0,0,256,256"
              width="32"
              height="32"
            >
              <g transform="scale(8,8)">
                <path d="M16,4c-6.62891,0 -12,5.37109 -12,12c0,5.30078 3.4375,9.80078 8.20703,11.38672c0.60156,0.10938 0.82031,-0.25781 0.82031,-0.57812c0,-0.28516 -0.01172,-1.03906 -0.01562,-2.03906c-3.33984,0.72266 -4.04297,-1.60937 -4.04297,-1.60937c-0.54687,-1.38672 -1.33203,-1.75781 -1.33203,-1.75781c-1.08984,-0.74219 0.08203,-0.72656 0.08203,-0.72656c1.20313,0.08594 1.83594,1.23438 1.83594,1.23438c1.07031,1.83594 2.80859,1.30469 3.49219,1c0.10938,-0.77734 0.42188,-1.30469 0.76172,-1.60547c-2.66406,-0.30078 -5.46484,-1.33203 -5.46484,-5.92969c0,-1.3125 0.46875,-2.38281 1.23438,-3.22266c-0.12109,-0.30078 -0.53516,-1.52344 0.11719,-3.17578c0,0 1.00781,-0.32031 3.30078,1.23047c0.95703,-0.26562 1.98438,-0.39844 3.00391,-0.40234c1.01953,0.00391 2.04688,0.13672 3.00391,0.40234c2.29297,-1.55078 3.29688,-1.23047 3.29688,-1.23047c0.65625,1.65234 0.24609,2.875 0.12109,3.17578c0.76953,0.83984 1.23047,1.91016 1.23047,3.22266c0,4.60938 -2.80469,5.62109 -5.47656,5.92188c0.42969,0.36719 0.8125,1.10156 0.8125,2.21875c0,1.60547 -0.01172,2.89844 -0.01172,3.29297c0,0.32031 0.21484,0.69531 0.82422,0.57813c4.76563,-1.58984 8.19922,-6.08594 8.19922,-11.38672c0,-6.62891 -5.37109,-12 -12,-12z"></path>
              </g>
            </svg>
          </Link>
          <Link
            className="flex items-stretch"
            href="https://www.linkedin.com/in/tai-chu-van-aa3590262/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 50 50"
              width="32"
              height="32"
            >
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
          </Link>
        </ul>
      </section>

      <section id="what-i-do" className=" text-white py-20 relative">
        <div className=" mx-auto px-6 relative z-20">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="border-b-2 border-white pb-2">What I Do</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* UI/UX Design Card */}
            <div className="backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-gray-800/50 transition-all duration-300 hover:border-purple-500/30 hover:shadow-purple-900/20 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-purple-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">UI/UX Design</h3>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Creating intuitive and visually appealing interfaces that deliver exceptional user
                experiences. I blend aesthetic design with functional usability to craft interfaces
                that users love.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-900/40 text-purple-300 text-xs px-2.5 py-1 rounded">
                  Figma
                </span>
                <span className="bg-purple-900/40 text-purple-300 text-xs px-2.5 py-1 rounded">
                  Wireframing
                </span>
                <span className="bg-purple-900/40 text-purple-300 text-xs px-2.5 py-1 rounded">
                  Prototyping
                </span>
                <span className="bg-purple-900/40 text-purple-300 text-xs px-2.5 py-1 rounded">
                  User Flows
                </span>
              </div>
            </div>

            {/* Web Application Card */}
            <div className="backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-gray-800/50 transition-all duration-300 hover:border-blue-500/30 hover:shadow-blue-900/20 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Web Development</h3>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Building robust, scalable, and performant web applications with modern technologies.
                I focus on clean architecture and best practices to deliver high-quality software
                solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-900/40 text-blue-300 text-xs px-2.5 py-1 rounded">
                  React
                </span>
                <span className="bg-blue-900/40 text-blue-300 text-xs px-2.5 py-1 rounded">
                  TypeScript
                </span>
                <span className="bg-blue-900/40 text-blue-300 text-xs px-2.5 py-1 rounded">
                  ASP.NET
                </span>
                <span className="bg-blue-900/40 text-blue-300 text-xs px-2.5 py-1 rounded">
                  Next.js
                </span>
              </div>
            </div>

            {/* Deployment Card */}
            <div className="backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-gray-800/50 transition-all duration-300 hover:border-green-500/30 hover:shadow-green-900/20 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-green-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Deployment</h3>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Ensuring smooth and efficient deployment processes for applications. I focus on
                automating deployment pipelines and optimizing cloud infrastructure to enhance
                performance and reliability.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-900/40 text-green-300 text-xs px-2.5 py-1 rounded">
                  Docker
                </span>
                <span className="bg-green-900/40 text-green-300 text-xs px-2.5 py-1 rounded">
                  CI/CD
                </span>
                <span className="bg-green-900/40 text-green-300 text-xs px-2.5 py-1 rounded">
                  Azure
                </span>
                <span className="bg-green-900/40 text-green-300 text-xs px-2.5 py-1 rounded">
                  GitHub Actions
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="h-[0vh] relative flex items-center justify-center">
        <div className="absolute inset-0 z-10 h-full bg-gradient-to-b from-black to-black/0 to-20% pointer-events-none"></div>

        <div className="absolute inset-0 z-10 h-full bg-gradient-to-t from-black to-black/0 to-20% pointer-events-none"></div>
      </section>
      <section id="projects" className="min-h-screen  text-white relative">
        <div className="mx-auto px-6 relative z-20">
          <div className="">
            <h2 className="text-4xl font-bold mb-16 text-center">
              <span className="border-b-2 border-white pb-2">My Projects</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {projectsData.map(project => (
                <div
                  key={project.id}
                  className="group backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-gray-800/50 transition-all duration-300 hover:border-blue-500/30 hover:shadow-blue-900/20"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-gray-900 opacity-90 group-hover:opacity-80 transition-all duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-7xl opacity-30 group-hover:opacity-40 transition-opacity duration-300">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover object-center"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                        {project.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-gray-800/80 text-gray-300 text-xs px-2.5 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                        <Link
                          href={project.links.live}
                          className="inline-flex items-center gap-1 px-4 py-2 bg-blue-900/30 hover:bg-blue-800/50 text-blue-300 text-sm font-medium rounded-md transition-all duration-200"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                          View Project
                        </Link>
                        <Link
                          href={project.links.github}
                          className="inline-flex items-center gap-1 px-4 py-2 border border-gray-700 hover:border-gray-600 text-gray-400 hover:text-gray-300 text-sm font-medium rounded-md transition-colors duration-200"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                          GitHub Repo
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen text-white relative py-20">
        <div className="mx-auto px-6 relative z-20">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="border-b-2 border-white pb-2">Work Experience</span>
          </h2>

          <div className="space-y-12">
            {experiencesData.map(exp => (
              <div
                key={exp.id}
                className="backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-gray-800/50 transition-all duration-300 hover:border-purple-500/30 hover:shadow-purple-900/20 p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <div className="text-purple-400 font-medium">{exp.company}</div>
                  </div>
                  <div className="text-gray-400 mt-2 md:mt-0 text-sm">
                    <span>
                      {exp.startDate} — {exp.endDate}
                    </span>
                    <span className="ml-3 text-gray-500">| {exp.location}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{exp.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-white">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    {exp.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-white">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-purple-900/40 text-purple-300 text-xs px-2.5 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
