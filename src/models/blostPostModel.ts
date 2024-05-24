export interface BlogPost {
  id: number;
  title: string;
  content: string;
  src: string;
  author: string;
  tags: string[];
  createdAt: string;
}

export class BlogPostModel implements BlogPost {
  id: number;
  title: string;
  content: string;
  src: string;
  author: string;
  tags: string[];
  createdAt: string;

  constructor(blogPost: BlogPost) {
    this.id = blogPost.id;
    this.title = blogPost.title;
    this.content = blogPost.content;
    this.src = blogPost.src;
    this.author = blogPost.author;
    this.tags = blogPost.tags;
    this.createdAt = blogPost.createdAt;
  }

  formatDate(): string {
    return new Date(this.createdAt)
      .toLocaleDateString("en-UK")
      .replace(/\//g, ".");
  }
}
