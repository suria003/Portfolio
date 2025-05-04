import { useEffect } from "react";
import { ProjectData, TitleMaster } from "../../Content";
import { FaGithubSquare } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";

import src from "../../Assets/Project/portfolio.png";

export default function Project() {

    useEffect(() => {
        document.title = TitleMaster.project;
    }, []);

    return (
        <main
            className="h-auto w-full mt-28 flex flex-col justify-start items-start gap-5"
        >
            <header className="overflow-hidden ml-5 text-8xl font-thin">{ProjectData.title}</header>
            <div className="line ml-5 h-1 w-[40%] bg-red-400"></div>

            <section className="h-auto w-full bg-transpernt p-5">
                <div className="bg-transprent w-[30%] h-auto">
                    <header className="projectHead ">#TITLE</header>
                    <p>#DESCRIPTION</p>
                    <div className="ProjectImage h-52 w-full bg-transprent rounded-lg">
                        <img src={src} alt="" className="h-full w-full object-cover rounded-lg" />
                    </div>
                    <div className="relative -top-36 opacity-50 py-2 w-full bg-[#000000] flex justify-end">
                        <a href="/" className="text-black">
                            <RiExternalLinkFill size={60} />
                        </a>
                    </div>
                    <div className="LinkDiv ">
                        <FaGithubSquare size={30} />
                    </div>
                </div>
            </section>
        </main>
    );
}