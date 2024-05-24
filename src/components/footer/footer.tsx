import { Link } from "react-router-dom";
import InstagramIcon from "../Icons/instagramIcon";
import LinkedInIcon from "../Icons/linkedInIcon";
import TiktokIcon from "../Icons/tiktokIcon";
import XIcon from "../Icons/xIcon";

const socialMediaArr = [
  {
    name: "X",
    element: <XIcon />,
    url: "https://twitter.com/odaceworld",
  },
  {
    name: "Instagram",
    element: <InstagramIcon />,
    url: "https://www.instagram.com/odaceworld/",
  },
  {
    name: "TikTok",
    element: <TiktokIcon />,
    url: "https://www.tiktok.com/@odaceworld",
  },
  {
    name: "LinkedIn",
    element: <LinkedInIcon />,
    url: "https://www.linkedin.com/company/odaceworld/",
  },
];

const Footer = () => {
  return (
    <footer className="py-12 overflow-hidden bg-gradient-to-t from-accent-darkest via-accent-darkest  to-background  ">
      <div className="flex flex-col items-center justify-center px-5">
        <div className=" relative text-foreground flex items-center justify-center ">
          <p className="my-24 w-full md:w-fit text-center text-2xl sm:text-4xl md:text-6xl lg:text-7xl text font-bold ">
            Content for everything
          </p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex h-[10rem] sm:h-[6rem] flex-col sm:flex-row w-full max-w-[50rem] p-2 sm:bg-accent-darkest rounded-3xl gap-y-5 "
        >
          <label
            htmlFor="email"
            className="h-full flex-[0_0_50%] sm:flex-[0_0_70%] "
          >
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your email"
              className="w-full h-full rounded-3xl sm:rounded-r-none sm:pl-12 placeholder:text-center sm:placeholder:text-start "
            />
          </label>
          <button
            type="submit"
            className="flex-[0_0_50%] sm:flex-1  cursor-pointer rounded-3xl sm:rounded-l-none text-white bg-gradient-to-r from-accent-darker to-accent"
          >
            Pre-register
          </button>
        </form>
        <h2 className="text-foreground text-4xl w-full text-center py-16 ">
          odace+
        </h2>
      </div>
      <div className="px-6 flex flex-col border-gray-400/50 lg:flex-row lg:justify-between items-center justify-center border-t-2 text-foreground gap-y-[1.8rem] pt-12">
        <span>© odace+. All right reserved.</span>
        <div className="flex flex-col lg:flex-row gap-y-[1.8rem] gap-x-[16rem]">
          <Link to={"/"} className="hover:underline duration-300">
            Terms and conditions
          </Link>
          <ul className="flex items-center justify-center gap-[.8rem] ">
            {socialMediaArr.map((media, index) => (
              <li key={index}>
                <Link to={`${media.url}`} target="_blank">
                  <span className="sr-only">{media.name}</span>
                  {media.element}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
