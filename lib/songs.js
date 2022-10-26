import fs from "fs";
import path from "path";
import matter from "gray-matter";

const songsDirectory = path.join(process.cwd(), "/content/songs");

export function getAllSongIds() {
  const fileNames = fs.readdirSync(songsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export function getSongData(id) {
  const fullPath = path.join(songsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  return {
    id,
    ...matterResult.data,
  };
}
