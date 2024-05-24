const Tag = ({ tag, className }: { tag: string; className?: string }) => {
  return (
    <div
      className={`bg-white px-8 py-2 text-xs md:text-lg first-letter:uppercase w-fit" ${className}`}
    >
      <span
        className={`textClip  bg-gradient-to-r from-accent via-accent to-accent-darker text-sm  font-extrabold`}
      >{`#${tag}`}</span>
    </div>
  );
};

export default Tag;
