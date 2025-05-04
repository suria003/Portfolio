import React, { useState, useEffect, useRef, useCallback, Suspense } from "react";
import shichan from "./../Assets/shichan.png";

import { NavData } from "../Content";

const menuarr = [
  { name: 'Home', link: "/" },
  { name: 'Project', link: "/project" },
  { name: 'About', link: "/about" },
  { name: 'Contact', link: "/contact" },
]

export default function Nav() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const onIntersect = useCallback(
    (entries, observer) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      rootMargin: "0px",
      threshold: 0.1,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [onIntersect]);

  return (
    <nav className="absolute top-0 h-20 w-full bg-transparent flex flex-col md:flex-row justify-between items-center px-0 md:px-5">
      <div className="h-full w-full md:w-auto py-1 flex justify-center items-center px-5">
        <h1
          className="text-3xl cursor-pointer font-thin overflow-hidden"
          onClick={() => (window.location.href = "/")}
        >
          {NavData.title}
        </h1>

        <Suspense fallback={<div>Loading...,</div>}>
          <div
            ref={ref}
            className="h-full w-24 bg-cover bg-center transition-all duration-500 overflow-hidden"
            style={{
              backgroundImage: isVisible ? `url(${shichan})` : "none",
            }}
          />
        </Suspense>
      </div>

      <div className="menucontent md:relative fixed bottom-0 right-0 md:bg-transparent bg-transprent md:w-auto w-full py-3.5 px-3.5 flex flex-row md:justify-center justify-between items-center md:gap-24 z-10">
        {menuarr.map((item, index) => (
          <button key={index} onClick={() => (window.location.href = item.link)} className="relative text-2xl md:text-3xl cursor-pointer font-thin overflow-hidden hover:text-red-400">{item.name}</button>
        ))}
      </div>

    </nav>
  );
}