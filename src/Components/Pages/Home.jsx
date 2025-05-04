import React from "react";
import Typewriter from "typewriter-effect";
import { HomeData } from "../../Content";
import HmeButton from "./Component/HmeButton";

export default function Home() {

    return (
        <section className="h-auto w-[90%] sm:w-[60%] flex justify-center items-center">
            <div className="flex flex-col justify-start items-start gap-3">
                <h1 className="text-lg sm:text-xl font-mono">{HomeData.title}</h1>
                <h2 className="font-mono font-semibold text-2xl">
                    <Typewriter
                        options={{
                            strings: [
                                HomeData.typing.first,
                                HomeData.typing.second,
                                HomeData.typing.third,
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 10,
                        }}
                    />
                </h2>
                <p className="text-sm sm:text-lg text-justify mt-2 mb-3">{HomeData.description}</p>
                <div className="h-auto w-full flex justify-center sm:justify-start items-center sm:items-start">
                    <HmeButton />
                </div>
            </div>
        </section>
    );
}