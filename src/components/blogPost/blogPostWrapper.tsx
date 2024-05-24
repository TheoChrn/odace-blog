import { BlogPost } from "@/models/blostPostModel";
import { useLoaderData } from "react-router-dom";
import BlogPostCard from "./blogPostCard";

const BlogPostWrapper = () => {
  const { blogPosts } = useLoaderData() as {
    blogPosts: BlogPost[];
  };

  console.log(blogPosts);
  return (
    <ul className="grid m-auto p-small gap-[10rem] md:gap-[24rem] overflow-hidden max-w-[1110px] ">
      {blogPosts.map((post, index) => {
        return <BlogPostCard blogPost={post} key={index} />;
      })}
    </ul>
  );
};

export default BlogPostWrapper;
