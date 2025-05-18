import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-transparent">
      {/* Hero section */}
      <div className="relative text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h1>
          <p className="mt-6 max-w-3xl text-xl">
            I'm a software engineer and technology enthusiast passionate about creating efficient,
            scalable, and maintainable solutions.
          </p>
        </div>
      </div>

      {/* Bio section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
              <Image
                src="/images/profile-placeholder.jpg"
                alt="Profile"
                width={400}
                height={500}
                className="object-cover"
              />
            </div>

            <div className="mt-6 flex flex-col space-y-4">
              <div className="flex items-center">
                <svg
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="ml-3 text-gray-700">Software Engineer</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="ml-3 text-gray-700">San Francisco, CA</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:contact@yourdomain.com"
                  className="ml-3 text-blue-600 hover:text-blue-800"
                >
                  contact@yourdomain.com
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Connect with me</h3>
              <div className="mt-4 flex space-x-5">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900"
                >
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900"
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:col-span-8">
            <div className="prose prose-lg prose-blue max-w-none">
              <h2>My Story</h2>
              <p>
                With over 10 years of experience in software development, I've had the opportunity
                to work on a wide range of projects, from enterprise-level applications to startup
                innovations. My journey began with a fascination for building things and solving
                complex problems, which eventually led me to pursue a career in software
                engineering.
              </p>

              <p>
                Throughout my career, I've specialized in developing scalable backend systems,
                designing efficient APIs, and implementing robust data processing pipelines. I'm
                passionate about clean code, thoughtful system design, and creating software that
                makes a real difference for users and businesses.
              </p>

              <h2>Experience</h2>
              <ul>
                <li>
                  <strong>Senior Software Engineer, Tech Innovations Inc.</strong> (2020-Present)
                  <p>
                    Lead developer for cloud-native applications, implementing microservices
                    architecture and improving system reliability.
                  </p>
                </li>
                <li>
                  <strong>Software Engineer, DevSolutions</strong> (2016-2020)
                  <p>
                    Designed and implemented RESTful APIs, optimized database queries, and built
                    data processing pipelines.
                  </p>
                </li>
                <li>
                  <strong>Junior Developer, StartupVision</strong> (2014-2016)
                  <p>
                    Contributed to the development of web applications and customer-facing features.
                  </p>
                </li>
              </ul>

              <h2>Skills</h2>
              <div className="grid grid-cols-2 gap-4 mt-6 not-prose">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Languages</h3>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: '95%' }}
                        ></div>
                      </div>
                      <span className="ml-3 text-sm font-medium text-gray-700">
                        JavaScript/TypeScript
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: '85%' }}
                        ></div>
                      </div>
                      <span className="ml-3 text-sm font-medium text-gray-700">Python</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: '80%' }}
                        ></div>
                      </div>
                      <span className="ml-3 text-sm font-medium text-gray-700">Go</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: '70%' }}
                        ></div>
                      </div>
                      <span className="ml-3 text-sm font-medium text-gray-700">Java</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Technologies</h3>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: '90%' }}
                        ></div>
                      </div>
                      <span className="ml-3 text-sm font-medium text-gray-700">React/Next.js</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: '85%' }}
                        ></div>
                      </div>
                      <span className="ml-3 text-sm font-medium text-gray-700">Node.js</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: '90%' }}
                        ></div>
                      </div>
                      <span className="ml-3 text-sm font-medium text-gray-700">AWS/Cloud</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: '80%' }}
                        ></div>
                      </div>
                      <span className="ml-3 text-sm font-medium text-gray-700">
                        Docker/Kubernetes
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="mt-8">Interests</h2>
              <p>
                Beyond coding, I enjoy contributing to open-source projects, writing technical
                articles, and sharing knowledge with the developer community. I'm particularly
                interested in distributed systems, software architecture, and DevOps practices.
              </p>
              <p>
                When I'm not in front of a computer, you'll find me hiking in the mountains,
                experimenting with photography, or exploring new cuisines.
              </p>

              <div className="mt-8 not-prose">
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Check out my blog
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-16 flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to collaborate?</span>
            <span className="block text-blue-600">Let's discuss your project.</span>
          </h2>
          <div className="mt-8 md:mt-0">
            <a
              href="mailto:contact@yourdomain.com"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
