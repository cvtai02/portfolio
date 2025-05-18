import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";

// Type for post metadata
type PostMeta = {
  title: string;
  date: string;
  tags: string[];
  description: string;
  // [key: string]: any;
};

// Function to parse markdown frontmatter
function parseFrontMatter(content: string): {
  meta: PostMeta;
  content: string;
} {
  // Default metadata
  const defaultMeta: PostMeta = {
    title: "",
    date: "",
    tags: [],
    description: "",
  };

  // Check for frontmatter
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { meta: defaultMeta, content };
  }

  const frontMatter = match[1];
  const contentWithoutFrontMatter = content.replace(match[0], "");

  // Parse frontmatter
  const meta: PostMeta = { ...defaultMeta };

  // Extract title
  const titleMatch = frontMatter.match(/title:\s*"([^"]*)"/);
  if (titleMatch) meta.title = titleMatch[1];

  // Extract date
  const dateMatch = frontMatter.match(/date:\s*"([^"]*)"/);
  if (dateMatch) meta.date = dateMatch[1];

  // Extract description
  const descMatch = frontMatter.match(/description:\s*"([^"]*)"/);
  if (descMatch) meta.description = descMatch[1];

  // Extract tags
  const tagsMatch = frontMatter.match(/tags:\s*\[([\s\S]*?)\]/);
  if (tagsMatch) {
    const tagsStr = tagsMatch[1];
    meta.tags = tagsStr
      .split(",")
      .map((tag) => tag.trim().replace(/"/g, "").replace(/,/g, ""))
      .filter((tag) => tag);
  }

  return { meta, content: contentWithoutFrontMatter };
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

export default async function PostPage({ params }: { params: { catalog: string; post: string } }) {
  const { catalog, post } = params;

  // Find the post file
  const postsDirectory = path.join(process.cwd(), "src/posts", catalog);

  try {
    const files = await fs.readdir(postsDirectory);

    // Look for files that match the post slug
    const postFile = files.find(
      (file) =>
        file.endsWith(".md") &&
        file !== "description.md" &&
        file.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/\.md$/, "") === post
    );

    if (!postFile) {
      notFound();
    }

    // Read post content
    const fullPath = path.join(postsDirectory, postFile);
    const fileContent = await fs.readFile(fullPath, "utf8");

    // Parse frontmatter and content
    const { meta, content } = parseFrontMatter(fileContent);

    // Convert markdown content to HTML
    const contentHtml = await markdownToHtml(content);

    // Get category title
    const categoryTitle = getCategoryTitleFromSlug(catalog);

    // Formatted date
    const formattedDate = new Date(meta.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col space-y-1">
              <Link
                href={`/blog/${catalog}`}
                className="text-blue-600 hover:text-blue-800 flex items-center"
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
                Back to {categoryTitle}
              </Link>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-grow">
          <article className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              {/* Post header */}
              <div className="px-6 py-8 border-b">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <time dateTime={meta.date}>{formattedDate}</time>
                  <span className="mx-2">•</span>
                  <span>{categoryTitle}</span>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">{meta.title}</h1>

                {meta.description && (
                  <p className="text-xl text-gray-500 leading-relaxed">{meta.description}</p>
                )}

                {meta.tags && meta.tags.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {meta.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Post content */}
              <div className="prose prose-blue max-w-none p-6 lg:p-8">
                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
              </div>

              {/* Post footer */}
              <div className="px-6 py-4 bg-gray-50 border-t flex justify-between items-center">
                <Link
                  href={`/blog/${catalog}`}
                  className="text-blue-600 hover:text-blue-800 flex items-center"
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
                  Back to all {categoryTitle} posts
                </Link>

                <Link href="/blog" className="text-blue-600 hover:text-blue-800">
                  View all categories
                </Link>
              </div>
            </div>
          </article>
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
  } catch (error) {
    console.error("Error loading post:", error);
    notFound();
  }
}
