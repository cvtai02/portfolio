import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-transparent">
      {/* Hero section */}
      <div className="relative text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h1>
          <p className="mt-6 max-w-3xl text-xl">
            I&apos;m a software engineer and technology enthusiast passionate about creating
            efficient, scalable, and maintainable solutions.
          </p>
        </div>
      </div>

      {/* Bio section */}

      {/* Footer CTA */}
      <div className="">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-16 flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-white">Ready to collaborate?</span>
            <span className="block text-blue-600">Let&apos;s discuss your project.</span>
          </h2>
          <div className="mt-8 md:mt-0">
            <Link
              href="mailto:contact@yourdomain.com"
              className="relative inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black"
            >
              <span className="collaboration-button_highlightBackground__kh_oj -z-1"></span>
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
