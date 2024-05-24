import { BlogPost } from "../models/blostPostModel";

class BlogPostController {
  private dataUrl = "../data/data.json";

  public async getBlogPosts(): Promise<BlogPost[]> {
    try {
      const response = await fetch(this.dataUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (!data.articles.length) {
        throw new Error("Not posts were found");
      }
      return data.articles;
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? `Fetching posts failed: ${error.message}`
          : "Failed to fetch"
      );
    }
  }

  public async getBlogPostById(
    id: number
  ): Promise<{ BlogPost: BlogPost }> {
    try {
      const response = await fetch(this.dataUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const blogPost = data.articles.find((post: BlogPost) => post.id === id);

      if (!blogPost) {
        throw new Error("This post doesn't exist yet");
      }
      return blogPost;
    } catch (error) {
      throw new Error(
        error instanceof Error ? `${error.message}` : "Failed to fetch"
      );
    }
  }

  public async getBlogPostsByTag(
    tag: string
  ): Promise<{ BlogPosts: BlogPost[] }> {
    try {
      const response = await fetch(this.dataUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      const blogPosts = data.articles.filter((post: BlogPost) =>
        post.tags.includes(tag)
      );

      if (!blogPosts.length) {
        throw new Error("404 Not Found");
      }
      return blogPosts;
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? `Fetching post failed: ${error.message}`
          : "Failed to fetch"
      );
    }
  }
}

export default BlogPostController;
