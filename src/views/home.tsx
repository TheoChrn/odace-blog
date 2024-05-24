import BlogPostCard from "../components/blogPost/blogPostCard";
import {
  LoaderFunctionArgs,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import FilterTag from "../components/tags/filterTag";
import BlogPostController from "../controllers/blogPostController";
import { BlogPost } from "../models/blostPostModel";
import Loader from "../components/loader/loader";
import { TagModel } from "../models/tagModel";

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

const Home = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const { blogPosts, tags, currentTag } = useLoaderData() as {
    blogPosts: BlogPost[];
    tags: string[];
    currentTag: string;
  };

  return (
    <div className="text-background text-base   min-h-screen ">
      <ScrollRestoration />
      <h2 className="relative w-auto m-auto mb-[6rem] mt-[5rem] text-center first-letter:uppercase text-foreground text-7xl backdrop-blur-xl h1 ">
        <span className="">blog</span>
      </h2>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ul className="flex flex-wrap text-white gap-small justify-center items-center mb-[12rem] max-w-[100rem] m-auto">
            {tags.map((tag, index) => (
              <FilterTag tag={tag} currentTag={currentTag} key={index} />
            ))}
          </ul>

          <div className="grid m-auto p-small gap-[10rem] md:gap-[24rem] overflow-hidden max-w-[1110px] ">
            {blogPosts.map((post, index) => {
              return <BlogPostCard blogPost={post} key={index} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
