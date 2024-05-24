import BlogPostController from "../controllers/blogPostController";
import { TagModel } from "../models/tagModel";
import { LoaderFunctionArgs } from "react-router-dom";

export async function homeFilterLoader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const tag = url.searchParams.get("tag");
  const blogController = new BlogPostController();
  const tagModel = new TagModel();
  const tags = await tagModel.retrievesTags();

  const blogPosts = tag
    ? await blogController.getBlogPostsByTag(tag)
    : await blogController.getBlogPosts();
  return { blogPosts, tags, currentTag: tag };
}
