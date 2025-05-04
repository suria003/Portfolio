import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const socialLinks = [
    { icon: <FaLinkedinIn size={22} />, hover_text: "LinkedIn", link: "https://www.linkedin.com/in/suriyaprakash-rd-71b559238/" },
    { icon: <FaGithub size={22} />, hover_text: "GitHub", link: "https://github.com/suria003" },
    { icon: <SiGeeksforgeeks size={22} />, hover_text: "GeeksForGeeks", link: "https://www.geeksforgeeks.org/user/20csa53/" },
    { icon: <SiLeetcode size={22} />, hover_text: "LeetCode", link: "https://leetcode.com/u/suriyadr1111/" }
];

export default function SocialMedia() {
    return (
        <div className="h-auto w-full fixed bottom-20 md:bottom-10 left-5 md:left-10 flex flex-row items-center gap-5">
            {socialLinks.map(({ icon, hover_text, link }) => (
                <a
                    key={link}
                    href={link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-200"
                    aria-label={hover_text}
                >
                    {icon}
                </a>
            ))}
        </div>
    );
}
