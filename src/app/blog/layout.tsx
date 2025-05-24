import fs from "fs/promises";
import path from "path";
import BlogLayout from "./BlogLayout";

// Type definitions for sidebar data
type Category = {
  slug: string;
  title: string;
};

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

export default async function Layout({ children }: { children: React.ReactNode }) {
  // Get all category folders for the sidebar
  const postsDirectory = path.join(process.cwd(), "src/posts");
  const categoryFolders = await fs.readdir(postsDirectory);

  // Process each category for the sidebar
  const categories: Category[] = categoryFolders.map((folder) =>
    getCategoryInfoFromFolderName(folder)
  );

  return <BlogLayout categories={categories}>{children}</BlogLayout>;
}
