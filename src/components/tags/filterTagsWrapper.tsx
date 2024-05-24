import { useLoaderData } from "react-router-dom";
import FilterTag from "./filterTag";

const FilterTagsWrapper = () => {
  const { tags, currentTag } = useLoaderData() as {
    tags: string[];
    currentTag: string;
  };

  return (
    <ul className="flex flex-wrap text-white gap-small justify-center items-center mb-[12rem] max-w-[100rem] m-auto">
      {tags.map((tag, index) => (
        <FilterTag tag={tag} currentTag={currentTag} key={index} />
      ))}
    </ul>
  );
};

export default FilterTagsWrapper;
