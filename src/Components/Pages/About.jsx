import { useEffect } from "react";
import { TitleMaster, AboutData } from "../../Content";
import Loading from "../Load/Loading";
import { Suspense } from "react";

import { FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitSquare } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiFlask, SiExpress, SiSqlalchemy, SiTailwindcss } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { BiLogoMongodb } from "react-icons/bi";
import { TbFileTypeSql } from "react-icons/tb";
import { MdNoEncryption } from "react-icons/md";
import { IoMdCode } from "react-icons/io";

import { BsClockFill } from "react-icons/bs";
import { LuExternalLink } from "react-icons/lu";

import techjay from "../../Assets/Company/Techjay.png";
import agam from "../../Assets/Company/agam.jpeg";
import mgenn from "../../Assets/Company/microgenn.png";

const SkillArray = [
    { name: "Python", percentage: "90%", icon: <FaPython size={52} color="#306998" />, color: "" },
    { name: "Java Script", percentage: "90%", icon: <SiJavascript size={52} color="#F7DF1E" className="bg-[#000000]" />, color: "" },
    { name: "Flask", percentage: "90%", icon: <SiFlask size={52} />, color: "" },
    { name: "API", percentage: "70%", icon: <AiFillApi size={52} />, color: "" },
    { name: "React", percentage: "90%", icon: <FaReact size={52} color="#61DAFB" />, color: "" },
    { name: "MongoDB", percentage: "80%", icon: <BiLogoMongodb size={52} color="#47A248" />, color: "" },
    { name: "Node.js", percentage: "60%", icon: <FaNodeJs size={52} color="#8CC84B" />, color: "" },
    { name: "Express.js", percentage: "80%", icon: <SiExpress size={52} />, color: "" },
    { name: "SQL", percentage: "90%", icon: <TbFileTypeSql size={52} color="#00758F" />, color: "" },
    { name: "SQLAlchecmy", percentage: "90%", icon: <SiSqlalchemy size={52} color="#d71f00" />, color: "" },
    { name: "HTML", percentage: "95%", icon: <FaHtml5 size={52} color="#EF652A" />, color: "" },
    { name: "CSS", percentage: "95%", icon: <FaCss3Alt size={52} color="#1572B6" />, color: "" },
    { name: "Tailwind Css", percentage: "95%", icon: <SiTailwindcss size={52} color="#06B6D4" />, color: "" },
    { name: "API Design", percentage: "70%", icon: <IoMdCode size={52} />, color: "" },
    { name: "Encryption & Decryption", percentage: "75%", icon: <MdNoEncryption size={52} color="#00FFFF" />, color: "" },
    { name: "Git", percentage: "80%", icon: <FaGitSquare size={52} color="#F05032" />, color: "" },
]

const work = [
    { name: "Techjay's", designation: "Internship", duration: "April 2023 - July 2023", logo: techjay, link: "https://www.techjays.com/", icon: <LuExternalLink size={20} />, certificate: "#Internship", certificateLink: "" },
    { name: "Agam Technology Service", designation: "Software Developer Engineer", duration: "December 2023 - July 2024", logo: agam, link: "https://www.agamtech.com/", icon: <LuExternalLink size={20} />, certificate: "#Exprience", certificateLink: "" },
    { name: "Microgenn Software Solution's", designation: "Software Support Engineer", duration: "October 2024 - Present", logo: mgenn, link: "https://microgenn.com/" },
];

export default function About() {

    useEffect(() => {
        document.title = TitleMaster.about;
    }, []);

    return (
        <section
            className="h-auto w-full mt-28"
        >

            <Suspense fallback={<div className='h-auto w-auto bg-transparent'><Loading /></div>}>

                <header className="overflow-hidden ml-5 text-8xl font-thin">{AboutData.title}</header>
                <div className="line mt-2 ml-5 h-1 w-[40%] bg-red-600"></div>

                <div className="mt-5 ml-5 h-auto w-[82.5%] py-10 bg-transparent flex flex-col justify-start items-start gap-5 text-start">
                    <h1 className="text-4xl font-serif">{AboutData.self}</h1>
                    <p className="md:text-xl text-lg font-thin">{AboutData.selfdescription.one}</p>
                    <p className="md:text-xl text-lg font-thin">{AboutData.selfdescription.two}</p>
                    <p className="md:text-xl text-lg font-thin">{AboutData.selfdescription.three}</p>
                    <h4 className="font-semibold font-serif text-lg">{AboutData.thank}</h4>
                </div>

                <div className="ml-5 h-auto w-[82.5%] py-5 bg-transparent flex flex-col justify-start items-start gap-5 text-justify">
                    <h1 className="text-4xl font-serif">{AboutData.skill}</h1>
                    <div className="w-full h-auto py-5 flex flex-wrap justify-start items-center gap-5">
                        {SkillArray.map((item, i) => (
                            <button
                                key={i}
                                className="relative p-3 bg-transparent rounded-sm border-2 border-gray-300 flex justify-center items-center gap-2 transition-all duration-300 hover:bg-gray-800 hover:text-white"
                            >
                                {item.icon}
                                {item.name}

                                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-90 text-white text-sm font-semibold opacity-0 transition-opacity font-sans duration-500 hover:opacity-100">
                                    {item.percentage}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="ml-5 w-[82.5%] py-6 bg-transparent flex flex-col gap-6 text-justify">
                    <h1 className="text-4xl font-serif">{AboutData.work}</h1>
                    <div className="overflow-x-auto h-auto w-full">
                        {work.map((item, i) => (
                            <div
                                key={i}
                                className="h-auto w-full flex flex-col justify-start gap-2"
                            >
                                <div className="h-auto w-full bg-transprent p-4 mb-0 rounded-md flex gap-6 items-center">
                                    <div className="h-20 w-20 flex-shrink-0"
                                        onClick={() => window.open(item.link, "_blank")}
                                    >
                                        <img
                                            src={item.logo}
                                            className="h-full w-full object-cover rounded"
                                            alt={`${item.name} logo`}
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center items-start gap-2">
                                        <h2 className="font-serif text-xl overflow-hidden">{item.name} || <span className="p-1 text-black bg-white">{item.designation}</span></h2>
                                        <div className="flex items-center gap-2">
                                            <BsClockFill size={18} />
                                            <h3 className="font-serif text-lg">{item.duration}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative -top-4 left-32 text-black">
                                    <a className="p-2 bg-white w-fit rounded-md flex justify-center items-center gap-1 hover:text-blue-500" href={item.certificateLink}>{item.certificate}{item.icon}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </Suspense>

        </section>
    );
}