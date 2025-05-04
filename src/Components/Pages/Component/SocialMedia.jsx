import { IoIosArrowForward } from "react-icons/io";

const socialLinks = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/suriyaprakash-rd-71b559238/" },
  { name: "GitHub", link: "https://github.com/suria003" },
  { name: "GeeksForGeeks", link: "https://www.geeksforgeeks.org/user/20csa53/" },
  { name: "LeetCode", link: "https://leetcode.com/u/suriyadr1111/" },
];

export default function SocialMedia() {
  return (
    <div className="relative -top-32 left-10 flex justify-center items-center gap-10">
      {socialLinks.map(({ name, link }) => (
        <a
          key={link}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono flex items-center gap-2 group w-fit transition-all duration-300 hover:text-red-400"
          aria-label={name}
        >
          <span>{name}</span>
          <IoIosArrowForward
            size={22}
            className="transition-transform duration-300 ease-in-out group-hover:translate-x-1.5"
          />
        </a>
      ))}
    </div>
  );
}