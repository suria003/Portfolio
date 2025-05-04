import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { email } from "../../email";
import { ContactData } from "../../../Content";
import { MdAlternateEmail, MdWhatsapp } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const array = [
    {
        name: "WhatsApp",
        icon: <MdWhatsapp size={24} />,
        link: "https://wa.me/+918838060247?text=Hello,%20I%20want%20to%20discuss...",
    },
    {
        name: "Mail",
        icon: <MdAlternateEmail size={24} />,
        link: "mailto:suryadr1111@gmail.com?subject=Feedback&body=Hello,%0D%0A%0D%0A I want to discuss...",
    },
];

export default function Form() {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const navigate = useNavigate();
    const [popup, setPopup] = useState({ show: false, message: "", success: false });

    const changes = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                email.service_id,
                email.template_id,
                e.target,
                email.user_id
            )
            .then(
                () => {
                    setPopup({ show: true, message: "Message sent successfully!", success: true });

                    setTimeout(() => {
                        setData({ name: "", email: "", message: "" }); // Reset form
                    }, 1000);
                },
                () => {
                    setPopup({ show: true, message: "Something went wrong, please try again.", success: false });

                    setTimeout(() => {
                        navigate("/contact");
                    }, 2000);
                }
            );

        // Hide pop-up after 3 seconds
        setTimeout(() => {
            setPopup({ show: false, message: "", success: false });
        }, 4000);
    };

    return (
        <div className="relative md:top-14 top-0 h-full w-full flex flex-col justify-center items-center gap-6">
            {popup.show && (
                <div
                    className={`fixed top-5 right-5 px-6 py-3 text-white rounded-lg shadow-md ${
                        popup.success ? "bg-green-600" : "bg-red-600"
                    } transition-opacity duration-500`}
                >
                    {popup.message}
                </div>
            )}

            <form onSubmit={submit} className="w-full flex flex-col justify-center items-center gap-6">
                <div className="w-[90%] flex justify-between items-center gap-3">
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={changes}
                        placeholder={ContactData.inputdata.name}
                        className="text-xl font-mono h-14 w-[50%] bg-transparent border-2 outline-none px-4 transition-all duration-300 focus:border-blue-500"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={changes}
                        placeholder={ContactData.inputdata.email}
                        className="text-xl font-mono h-14 w-[50%] bg-transparent border-2 outline-none px-4 transition-all duration-300 focus:border-blue-500"
                        required
                    />
                </div>

                <div className="w-[90%]">
                    <textarea
                        name="message"
                        value={data.message}
                        onChange={changes}
                        placeholder={ContactData.inputdata.message}
                        className="w-full h-40 text-xl font-mono bg-transparent border-2 outline-none px-4 py-2 transition-all duration-300 focus:border-blue-500 resize-none"
                        required
                    ></textarea>
                </div>

                <div className="w-[90%]">
                    <button type="submit" className="w-full h-14 bg-blue-900 text-white text-2xl uppercase font-mono tracking-wide transition-all duration-300 hover:bg-blue-700">
                        Send
                    </button>
                </div>
            </form>

            <div className="w-[90%] flex flex-row justify-center items-center gap-3">
                <div className="h-1 w-[50%] bg-blue-950"></div>
                <span className="text-xl font-mono text-gray-600">or</span>
                <div className="h-1 w-[50%] bg-blue-950"></div>
            </div>

            <div className="w-[90%] flex justify-start items-center gap-6">
                {array.map((item, i) => (
                    <a
                        key={i}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center gap-3 px-6 py-3 bg-blue-900 text-white text-xl font-mono shadow-md transition-all duration-300 hover:bg-blue-700"
                    >
                        {item.icon} <span>{item.name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}