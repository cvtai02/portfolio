import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";

// Type definitions
type Post = {
  slug: string;
  title: string;
  date: string;
};

// Function to get post info from filename
function getPostInfoFromFilename(filename: string): Post {
  // Remove date and extension, convert to title
  const slug = filename.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/\.md$/, "");
  const date = filename.substring(0, 10);
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    slug,
    title,
    date,
  };
}

// Function to get category title from folder name
function getCategoryTitleFromSlug(slug: string): string {
  // Extract the category name (remove the number prefix)
  const name = slug.split("-").slice(1).join("-");

  // Convert to title case
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Convert markdown to HTML
async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

// Default descriptions for categories if description.md is empty
const defaultDescriptions: Record<string, string> = {
  "1-software-engineer":
    "# Software Engineering\n\n" +
    "Explore the art and science of software engineering. This category covers " +
    "topics like clean architecture, domain-driven design, and best practices for " +
    "building maintainable and scalable software systems.\n\n" +
    "Whether you're a beginner or an experienced developer, you'll find valuable " +
    "insights to improve your software engineering skills.",

  "2-dev.ops":
    "# DevOps\n\n" +
    "DevOps bridges the gap between development and operations. This section covers " +
    "CI/CD pipelines, infrastructure as code, containerization, and other practices " +
    "that help teams deliver software faster and more reliably.\n\n" +
    "Learn how to implement DevOps practices in your organization to improve " +
    "collaboration and efficiency.",

  "3-software-automation":
    "# Software Automation\n\n" +
    "Automation is key to productivity and consistency. This category explores tools " +
    "and techniques for automating repetitive tasks in software development, testing, " +
    "and deployment.\n\n" +
    "Discover how to create effective automation solutions that save time and reduce errors.",

  "4-technologies":
    "# Technologies\n\n" +
    "Stay up-to-date with the latest technologies shaping the future of software development. " +
    "This section covers emerging tools, frameworks, languages, and platforms.\n\n" +
    "Explore how these technologies are changing the way we build software and solve problems.",
};

export default async function CatalogPage({
  params,
}: {
  params: { catalog: string };
}) {
  const { catalog } = params;

  // Check if the catalog exists
  const postsDirectory = path.join(process.cwd(), "src/posts");
  const categoryFolders = await fs.readdir(postsDirectory);

  if (!categoryFolders.includes(catalog)) {
    notFound();
  }

  // Get description content
  const descriptionPath = path.join(postsDirectory, catalog, "description.md");
  let descriptionContent;

  try {
    descriptionContent = await fs.readFile(descriptionPath, "utf-8");
    // If description is empty, use default
    if (!descriptionContent || descriptionContent.trim() === "") {
      descriptionContent =
        defaultDescriptions[catalog] ||
        `# ${getCategoryTitleFromSlug(
          catalog
        )}\n\nExplore all posts related to ${getCategoryTitleFromSlug(
          catalog
        )}.`;
    }
  } catch (error) {
    // If file doesn't exist or can't be read, use default
    descriptionContent =
      defaultDescriptions[catalog] ||
      `# ${getCategoryTitleFromSlug(
        catalog
      )}\n\nExplore all posts related to ${getCategoryTitleFromSlug(catalog)}.`;
  }

  // Convert markdown to HTML
  const descriptionHtml = await markdownToHtml(descriptionContent);

  // Get all posts in this category
  const categoryPath = path.join(postsDirectory, catalog);
  const files = await fs.readdir(categoryPath);

  const posts = files
    .filter((file) => file.endsWith(".md") && file !== "description.md")
    .map((file) => getPostInfoFromFilename(file))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Get category title
  const categoryTitle = getCategoryTitleFromSlug(catalog);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <Link
                href="/blog"
                className="text-blue-600 hover:text-blue-800 flex items-center mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L4.414 9H17a1 1 0 110 2H4.414l5.293 5.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Back to Blog
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">
                {categoryTitle}
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content area */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-lg shadow p-6">
                {/* Category description */}
                <div
                  className="prose max-w-none mb-8"
                  dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                />

                {/* Posts list */}
                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">
                  All Posts
                </h2>
                <div className="space-y-6">
                  {posts.map((post) => (
                    <div
                      key={post.slug}
                      className="border-b pb-6 last:border-0"
                    >
                      <p className="text-sm text-gray-500 mb-1">{post.date}</p>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        <Link
                          href={`/blog/${catalog}/${post.slug}`}
                          className="hover:text-blue-700"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <div className="flex mt-3">
                        <Link
                          href={`/blog/${catalog}/${post.slug}`}
                          className="text-blue-600 hover:text-blue-800 inline-flex items-center"
                        >
                          Read more
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1"
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
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Related information */}
            <aside className="w-full lg:w-1/3">
              <div className="bg-white rounded-lg shadow p-6 sticky top-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  About this Category
                </h2>
                <p className="text-gray-700 mb-6">
                  {categoryTitle} is one of our main content categories. Browse
                  through all {posts.length} posts to explore this topic in
                  depth.
                </p>

                <h3 className="font-medium text-gray-900 mb-3">Recent Posts</h3>
                <ul className="space-y-3 mb-6">
                  {posts.slice(0, 5).map((post) => (
                    <li
                      key={post.slug}
                      className="border-l-2 border-blue-500 pl-3"
                    >
                      <Link
                        href={`/blog/${catalog}/${post.slug}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline text-sm"
                      >
                        {post.title}
                      </Link>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </li>
                  ))}
                </ul>

                <div className="border-t pt-5">
                  <Link
                    href="/blog"
                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View all categories
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} My Tech Blog. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
