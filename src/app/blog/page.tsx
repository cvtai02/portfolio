import fs from "fs/promises";
import path from "path";
import Link from "next/link";

// Type definitions
type Post = {
  slug: string;
  title: string;
  date: string;
};

type Category = {
  slug: string;
  title: string;
  posts: Post[];
};

// The PageProps interface is required by Next.js
export interface PageProps {
  params: Record<string, never>;
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata() {
  return {
    title: "Blog",
    description: "Read the latest articles and tutorials.",
  };
}

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

// Function to get category info from folder name
function getCategoryInfoFromFolderName(folderName: string): {
  slug: string;
  title: string;
} {
  // Extract the category name (remove the number prefix)
  const slug = folderName.split("-").slice(1).join("-");

  // Convert to title case
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    slug: folderName,
    title,
  };
}

export default async function BlogPage() {
  // Get all category folders
  const postsDirectory = path.join(process.cwd(), "src/posts");
  const categoryFolders = await fs.readdir(postsDirectory);

  // Process each category
  const categories: Category[] = await Promise.all(
    categoryFolders.map(async (folder) => {
      const categoryInfo = getCategoryInfoFromFolderName(folder);
      const categoryPath = path.join(postsDirectory, folder);
      const postFiles = await fs.readdir(categoryPath);

      // Get posts in this category
      const posts = postFiles
        .filter((file) => file.endsWith(".md") && !file.includes("description.md"))
        .map((file) => getPostInfoFromFilename(file))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

      return {
        slug: categoryInfo.slug,
        title: categoryInfo.title,
        posts,
      };
    })
  );

  // Get all posts for featured section
  const allPosts = categories
    .flatMap((category) =>
      category.posts.map((post) => ({
        ...post,
        category: {
          slug: category.slug,
          title: category.title,
        },
      }))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Get the featured posts (most recent 6)
  const featuredPosts = allPosts.slice(0, 6);

  return (
    <div>
      {/* Featured posts section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>

        {featuredPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Main featured post */}
            <div className="col-span-1 md:col-span-2">
              <div className="backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800/50 transition-all hover:border-blue-500/30 hover:shadow-blue-900/20">
                <Link
                  href={`/blog/${featuredPosts[0].category.slug}/${featuredPosts[0].slug}`}
                  className="block group"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-xs text-blue-400 border border-blue-400/30 bg-blue-400/10 px-2 py-1 rounded-md">
                        {featuredPosts[0].category.title}
                      </span>
                      <span className="mx-2 text-gray-500">•</span>
                      <span className="text-sm text-gray-400">{featuredPosts[0].date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {featuredPosts[0].title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Dive deep into the principles and practices of{" "}
                      {featuredPosts[0].title.toLowerCase()}
                      that can transform your software development approach.
                    </p>
                    <div className="inline-flex items-center gap-1 text-blue-400 group-hover:text-blue-500 transition-colors">
                      Read article
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
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* Secondary featured posts */}
            {featuredPosts.slice(1, 5).map((post) => (
              <div
                key={post.slug}
                className="backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800/50 transition-all hover:border-blue-500/30 hover:shadow-blue-900/20"
              >
                <Link
                  href={`/blog/${post.category.slug}/${post.slug}`}
                  className="block p-6 h-full group"
                >
                  <div className="flex items-center mb-3">
                    <span className="text-xs text-blue-400 border border-blue-400/30 bg-blue-400/10 px-2 py-1 rounded-md">
                      {post.category.title}
                    </span>
                    <span className="mx-2 text-gray-500">•</span>
                    <span className="text-sm text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <div className="inline-flex items-center gap-1 text-blue-400 group-hover:text-blue-500 transition-colors">
                    Read article
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
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Browse by category section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-8">Browse by Category</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              href={`/blog/${category.slug}`}
              key={category.slug}
              className="backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800/50 p-6 transition-all hover:border-blue-500/30 hover:shadow-blue-900/20 group"
            >
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-400 text-sm mb-2">{category.posts.length} articles</p>
              <div className="inline-flex items-center gap-1 text-blue-400 group-hover:text-blue-500 transition-colors">
                View all
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
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent articles by category */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-8">Latest Articles</h2>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.slug} className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                <Link
                  href={`/blog/${category.slug}`}
                  className="text-blue-400 hover:text-blue-500 inline-flex items-center gap-1 transition-colors"
                >
                  View all
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
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.posts.slice(0, 3).map((post) => (
                  <div
                    key={post.slug}
                    className="backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800/50 transition-all hover:border-blue-500/30 hover:shadow-blue-900/20"
                  >
                    <Link href={`/blog/${category.slug}/${post.slug}`} className="block p-6 group">
                      <div className="flex items-center mb-3">
                        <span className="text-xs text-gray-400">{post.date}</span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h4>
                      <div className="inline-flex items-center gap-1 text-blue-400 group-hover:text-blue-500 transition-colors">
                        Read article
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
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
