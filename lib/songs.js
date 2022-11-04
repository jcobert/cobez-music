import fs from "fs";
import path from "path";
import matter from "gray-matter";

const songsDirectory = path.join(process.cwd(), "/content/songs");

export function getAllSongIds() {
  const fileNames = fs.readdirSync(songsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export function getSongData(slug) {
  const fullPath = path.join(songsDirectory, `${slug}.md`);
  const fileContents = matter(fs.readFileSync(fullPath, "utf8"));

  const frontmatter = fileContents.data;
  const markdown = fileContents.content;

  return {
    slug,
    frontmatter,
    markdown,
  };
}

export function getAllSongData() {
  const fileNames = fs.readdirSync(songsDirectory);
  const content = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(songsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      slug,
      ...matterResult,
    };
  });
  return JSON.stringify(content);
}
