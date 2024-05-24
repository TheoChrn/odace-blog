import { Link } from "react-router-dom";

const FilterTag = ({
  currentTag,
  tag,
}: {
  currentTag: string | null;
  tag: string;
}) => {
  return (
    <li
      className={`first-letter:uppercase bg-tag py-2 px-5 cursor-pointer rounded-xl duration-200 hover:bg-white ${
        currentTag === tag ? "bg-white" : "bg-tag"
      }`}
    >
      <Link
        className="textClip bg-gradient-to-r from-accent via-accent to-accent-darker font-extrabold text-xl "
        to={!currentTag !== null && currentTag === tag ? "/" : `?tag=${tag}`}
      >
        {tag}
      </Link>
    </li>
  );
};

export default FilterTag;
