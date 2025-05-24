"use client";

import Link from "next/link";

type Category = {
  slug: string;
  title: string;
};

type BlogLayoutProps = {
  children: React.ReactNode;
  categories: Category[];
};

export default function BlogLayout({ children, categories }: BlogLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Navigation bar */}
      <header className="border-b border-gray-800/50 backdrop-blur-sm bg-black/30 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <Link
                href="/"
                className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
              >
                Nora blog
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-blue-400 border-b border-blue-400 pb-1">
                Blog
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Blog header with title */}
      <div className="bg-gradient-to-b from-black to-black/50 py-16 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Blog</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
          Thoughts, ideas, and insights on software engineering, DevOps, and more
        </p>
      </div>

      {/* Main content with sidebar */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 xl:w-1/5 order-2 lg:order-1">
            <div className="backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-gray-800/50 p-6 sticky top-24">
              <h2 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-700">
                Categories
              </h2>
              <nav className="space-y-4">
                {categories.map((category) => (
                  <div key={category.slug} className="mb-4">
                    <Link
                      href={`/blog/${category.slug}`}
                      className="text-gray-300 hover:text-blue-400 font-medium transition-colors block"
                    >
                      {category.title}
                    </Link>
                  </div>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="font-bold text-white mb-3">Follow Me</h3>
                <div className="flex space-x-3">
                  <Link
                    href="https://github.com/cvtai02"
                    target="_blank"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/tai-chu-van-aa3590262/"
                    target="_blank"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Link>
                  <Link
                    href="https://www.facebook.com/cv.tai02"
                    target="_blank"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content area */}
          <div className="w-full lg:w-3/4 xl:w-4/5 order-1 lg:order-2">
            <div className="backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-gray-800/50 p-6">
              {children}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm border-t border-gray-800/50 mt-12">
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Tai Chu Van. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
