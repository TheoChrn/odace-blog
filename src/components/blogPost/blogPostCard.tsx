import { Link } from "react-router-dom";
import Tag from "../tags/tag";
import { BlogPost } from "@/models/blostPostModel";

const BlogPostCard = ({ blogPost }: { blogPost: BlogPost }) => {
  return (
    <Link
      to={`/posts/${blogPost.id}`}
      className="relative post w-8/12 md:w-7/12  h-auto bg-no-repeat bg-cover text-foreground group"
    >
      <article className="h-full">
        <figure className="relative w-fit h-full">
          <Tag
            tag={blogPost.tags[0]}
            className="z-[9999]  absolute top-0 group-even:right-0 group-odd:left-0 first-letter:uppercase  group-even:justify-self-start group-odd:justify-self-end group-odd:-rotate-12 group-even:rotate-12 "
          />

          <div className="opacity-0 blur-[0px] z-0 lg:block  group-hover:opacity-100 absolute top-0 left-0 w-full h-full rounded-xl"></div>
          <img
            src={blogPost.src}
            alt="Illustration Image"
            className="rounded-xl object-cover group-hover:blur-[6px]  duration-500 group-hover:brightness-[70%] h-full w-full"
          />
          <figcaption className="z-title text-base max-w-[25ch] absolute title w-full bg-white text-black  duration-500 -bottom-4 group-odd:-right-16 group-even:-left-16  group-odd:text-end px-4 py-2 group-[&:nth-child(3n+12)]:text-start lg:group-[&:nth-child(3n+12)]:-left-1/4 lg:opacity-0 lg:group-hover:opacity-100 lg:group-even:-left-1/4 lg:group-odd:-right-1/4 lg:text-white lg:bg-transparent lg:top-1/2 lg:-translate-y-1/2 lg:text-5xl lg:blur-[5px] lg:group-hover:blur-0 lg:bottom-[inherit] lg:w-full group-even:shadow-[-.8rem_.8rem_0_0] group-odd:shadow-[.8rem_.8rem_0_0]  group-odd:shadow-accent-darker group-even:shadow-accent-darker lg:group-odd:shadow-white lg:group-even:shadow-white">
            <h1 className="textClip  lg:text-white bg-gradient-to-r from-accent via-accent to-accent-darker font-bold lg:bg-none">
              {blogPost.title}
            </h1>
          </figcaption>
        </figure>
      </article>
    </Link>
  );
};

export default BlogPostCard;
