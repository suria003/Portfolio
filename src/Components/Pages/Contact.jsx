import { useEffect } from "react";
import SocialMedia from "./Component/SocialMedia";
import Form from "./Component/Form";

import { ContactData, TitleMaster } from "../../Content";

export default function Contact() {

    useEffect( () => {
        document.title = TitleMaster.contact;
    }, []);
    
    return (
        <section className="h-screen w-full bg-transprent flex justify-center items-center">
            <div className="h-full w-1/2 hidden md:flex flex-col justify-end items-start gap-16">
                <h1 className="text-8xl relative -top-32 left-10 overflow-hidden">{ContactData.head}</h1>
                <SocialMedia />
            </div>
            <div className="h-full md:w-1/2 w-full overflow-hidden">
                <Form />
            </div>
        </section>
    );
}