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
        .filter((file) => file.endsWith(".md"))
        .map((file) => getPostInfoFromFilename(file))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

      return {
        slug: categoryInfo.slug,
        title: categoryInfo.title,
        posts,
      };
    })
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
          <p className="mt-1 text-lg text-gray-600">
            Explore articles about software engineering, DevOps, automation and more
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar with categories */}
            <aside className="w-full md:w-1/4 lg:w-1/5">
              <div className="bg-white rounded-lg shadow p-4 sticky top-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Categories</h2>
                <nav className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.slug} className="mb-6">
                      <h3 className="font-medium text-gray-800 mb-2">{category.title}</h3>
                      <ul className="pl-4 space-y-1.5">
                        {category.posts.map((post) => (
                          <li key={`${category.slug}-${post.slug}`}>
                            <Link
                              href={`/blog/${category.slug}/${post.slug}`}
                              className="text-blue-600 hover:text-blue-800 hover:underline text-sm"
                            >
                              {post.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main content area */}
            <div className="w-full md:w-3/4 lg:w-4/5">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome to My Blog</h2>

                <p className="text-gray-700 mb-4"></p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">Recent Posts</h3>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {categories.flatMap((category) =>
                    category.posts.slice(0, 2).map((post) => (
                      <div
                        key={`${category.slug}-${post.slug}-card`}
                        className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="p-4">
                          <p className="text-sm text-gray-500 mb-1">{post.date}</p>
                          <h4 className="font-medium text-gray-900 mb-2">{post.title}</h4>
                          <p className="text-sm text-gray-600 mb-3">From {category.title}</p>
                          <Link
                            href={`/blog/${category.slug}/${post.slug}`}
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
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
                    ))
                  )}
                </div>
              </div>
            </div>
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
