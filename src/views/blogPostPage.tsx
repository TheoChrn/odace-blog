import Loader from "../components/loader/loader";
import Tag from "../components/tags/tag";
import BlogPostController from "../controllers/blogPostController";
import { BlogPost, BlogPostModel } from "../models/blostPostModel";

import {
  LoaderFunctionArgs,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
} from "react-router-dom";

export async function blogPostLoader({ params }: LoaderFunctionArgs) {
  const id = Number(params.id);
  const blogController = new BlogPostController();
  const blogPost = await blogController.getBlogPostById(id);
  return { blogPost };
}

const BlogPostPage = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const { blogPost } = useLoaderData() as { blogPost: BlogPost };
  const blogPostClass = new BlogPostModel(blogPost);

  if (!blogPost) return <div>Spinner</div>;

  return (
    <>
      <ScrollRestoration />
      {isLoading ? (
        <Loader />
      ) : (
        <main className="flex flex-col justify-center items-center text-white min-h-screen">
          <div className="flex flex-col gap-y-medium items-center justify-center  w-full py-[12rem] px-[1rem]   ">
            <h2 className="text-center text-xl md:text-4xl">
              {blogPost.title}
            </h2>
            <h3 className="text-center ">{blogPost.content}</h3>
            <ul className="flex gap-[1.2rem]">
              {blogPost.tags.map((tag, index) => (
                <Tag tag={tag} key={index} />
              ))}
            </ul>
            <i className="grid text-center text-sm mt-24">
              Written by &#8213; {`${blogPost.author}`}
              <span>{blogPostClass.formatDate()}</span>
            </i>
          </div>
          <div className=" w-full  bg-gradient-to-b from-accent-darker via-background  to-background ">
            <div className="max-w-[1110px] m-auto  -translate-y-24 px-5 flex flex-col items-center justify-center">
              <div className=" flex flex-col items-center justify-center gap-y-[8rem]">
                <figure className="relative w-fit">
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-xl md:text-4xl lg:text-7xl bg-white  rotate-45">
                    ILLUSTRATION
                  </span>
                  <img
                    src={`../${blogPost.src}`}
                    alt="ILLUSTRATION"
                    className="h-full w-full rounded-xl  max-w-[50rem]"
                  />
                </figure>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto adipisci voluptatum eveniet quam non dolorem hic
                  doloribus quaerat cumque dolores alias inventore expedita
                  voluptatem, maxime autem ut at quibusdam. Autem. Veniam culpa
                  reiciendis error doloribus qui recusandae est eligendi tempore
                  autem omnis adipisci pariatur velit voluptas voluptatum
                  perspiciatis, fugit, vitae facilis sit, non tenetur ullam
                  libero facere corrupti delectus. Nobis. Voluptatibus, ratione,
                  earum neque omnis, voluptates eius placeat vero at animi
                  repellat nam architecto. Soluta similique molestias,
                  laudantium reiciendis saepe ad tempora amet vel nostrum
                  consequatur quibusdam, magnam odit necessitatibus? Voluptatum,
                  cumque distinctio? Quae quo minus aperiam sit, impedit
                  repellendus illo temporibus qui accusamus quasi at eaque modi
                  necessitatibus dolor ducimus, nam tempore blanditiis facere
                  voluptatibus quis laudantium fugiat quam!
                </p>
                <figure className="relative flex flex-col w-full lg:flex-row justify-center gap-8 items-center lg:justify-between">
                  <span className="absolute top-3/4 lg:top-1/2 lg:right-0  -translate-y-1/2 text-black text-xl md:text-4xl lg:text-7xl bg-white rotate-45">
                    ILLUSTRATION
                  </span>
                  <span className="absolute top-1/4 lg:top-1/2 lg:left-0  -translate-y-1/2 text-black text-xl md:text-4xl lg:text-7xl bg-white rotate-45">
                    ILLUSTRATION
                  </span>
                  <img
                    src={`../${blogPost.src}`}
                    alt="ILLUSTRATION"
                    className="w-full  rounded-xl max-w-[50rem]"
                  />
                  <img
                    src={`../${blogPost.src}`}
                    alt="ILLUSTRATION"
                    className="w-full  rounded-xl max-w-[50rem]"
                  />
                </figure>
                <p className="">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolore, voluptas inventore! Ex molestiae, corrupti expedita
                  neque sunt quae dolor sapiente quidem nisi eum harum saepe,
                  veritatis sint voluptate dolorum dignissimos. Temporibus
                  veritatis obcaecati ut nemo ullam excepturi, tenetur et alias
                  unde. Quisquam perspiciatis quidem nobis numquam. Praesentium
                  dolor numquam nobis reiciendis, impedit nesciunt quibusdam.
                  Neque vitae illum maiores corporis amet. Reiciendis velit
                  accusamus eius libero molestiae, unde officiis odit explicabo
                  ipsum tempore eum sed nemo atque delectus laboriosam rerum
                  itaque consequatur quam? Recusandae minima iure asperiores
                  obcaecati, architecto modi? Sunt!
                </p>
                <figure className="relative w-full">
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-xl md:text-4xl lg:text-7xl bg-white  rotate-45">
                    ILLUSTRATION
                  </span>
                  <img
                    src={`../${blogPost.src}`}
                    alt="ILLUSTRATION"
                    className="w-full rounded-xl aspect-video object-cover"
                  />
                </figure>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default BlogPostPage;
