import { NavLink } from "react-router-dom";

interface FilterTagProps {
  currentTag: string | null;
  tag: string;
}

const FilterTag = ({ currentTag, tag }: FilterTagProps) => {
  const isActive = currentTag === tag;

  const destinationURL = isActive ? "/" : `?tag=${tag}`;

  const linkClasses = `first-letter:uppercase bg-tag py-2 px-5 cursor-pointer rounded-xl duration-200 hover:bg-white ${
    isActive ? "bg-white" : "bg-tag"
  }`;

  return (
    <NavLink to={destinationURL} className={linkClasses}>
      <span className="textClip bg-gradient-to-r from-accent via-accent to-accent-darker font-extrabold text-xl">
        {tag}
      </span>
    </NavLink>
  );
};

export default FilterTag;
