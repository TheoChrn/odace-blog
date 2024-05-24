import { BlogPost } from "./blostPostModel";

export class TagModel {
  private dataUrl = "../data/data.json";

  public async retrievesTags(): Promise<string[]> {
    try {
      const response = await fetch(this.dataUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const blogPosts: BlogPost[] = data.articles;

      const tags = blogPosts.reduce((acc: Set<string>, article) => {
        article.tags.forEach((tag) => acc.add(tag));
        return acc;
      }, new Set<string>());

      return [...tags];
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? `Fetching posts failed: ${error.message}`
          : "Failed to fetch"
      );
    }
  }
}
