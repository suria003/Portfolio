import { useState, useEffect } from "react";

import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";

import { Protection_content } from "../../Content";

export default function Protection() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleButton = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setDarkMode(savedTheme === "dark");
        }
      }, []);
    
      useEffect(() => {
        if (darkMode) {
          localStorage.setItem("theme", "dark");
          document.documentElement.classList.add("dark");
        } else {
          localStorage.setItem("theme", "light");
          document.documentElement.classList.remove("dark");
        }
      }, [darkMode]);
    

    return (
        <div className="h-10 w-auto p-2 fixed bottom-[80px] md:bottom-10 right-5 md:right-7 border-none rounded-md overflow-hidden">

            <div onClick={toggleButton} className="cursor-pointer">
                {darkMode ? (
                    <button className="isDarkMode flex justify-center items-center gap-2">
                        <h1 className="text-xl">{Protection_content.dark}</h1>
                        <FaLightbulb />
                    </button>
                ) : (
                    <button className="isDarkMode flex justify-center items-center gap-2">
                        <h1 className="text-xl">{Protection_content.light}</h1>
                        <FaRegLightbulb />
                    </button>
                )}
            </div>

        </div>
    );
}