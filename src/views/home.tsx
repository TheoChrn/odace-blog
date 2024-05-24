import React from "react";
import { ScrollRestoration, useNavigation } from "react-router-dom";
import BlogPostWrapper from "../components/blogPost/blogPostWrapper";
import Loader from "../components/loader/loader";
import FilterTagsWrapper from "../components/tags/filterTagsWrapper";

const Home = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const FilterTagsWrapperMemo = React.memo(FilterTagsWrapper);

  return (
    <div className="text-background text-base   min-h-[100svh] ">
      <ScrollRestoration />
      <h2 className="relative w-auto m-auto mb-[6rem] mt-[5rem] text-center first-letter:uppercase text-foreground text-7xl backdrop-blur-xl h1 ">
        <span className="">blog</span>
      </h2>
      <FilterTagsWrapperMemo />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <BlogPostWrapper />
        </>
      )}
    </div>
  );
};

export default Home;
