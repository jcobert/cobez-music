import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "/content/about");

export function getAboutData(slug) {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  const fileContents = matter(fs.readFileSync(fullPath, "utf8"));

  const frontmatter = fileContents.data;
  const markdown = fileContents.content;

  return {
    slug,
    frontmatter,
    markdown,
  };
}