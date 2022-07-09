import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import jquery from "../assets/jquery.png";
import php from "../assets/php.png";
import laravel from "../assets/laravel.png";
import symfony from "../assets/symfony.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import node from "../assets/node.png";
import socket from "../assets/socket-io.svg";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500 hover:text-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500 hover:text-blue-500",
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500 hover:text-yellow-500",
        },
        {
            id: 4,
            src: react,
            title: "React",
            style: "shadow-sky-300 hover:text-sky-300",
        },
        {
            id: 5,
            src: jquery,
            title: "JQuery",
            style: "shadow-blue-400 hover:text-blue-400",
        },
        {
            id: 6,
            src: node,
            title: "NodeJS",
            style: "shadow-lime-500 hover:text-lime-500",
        },
        {
            id: 7,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400 hover:text-sky-400",
        },
        {
            id: 8,
            src: php,
            title: "PHP",
            style: "shadow-slate-700 hover:text-slate-700",
        },
        {
            id: 9,
            src: laravel,
            title: "Laravel",
            style: "shadow-red-500 hover:text-red-500",
        },
        {
            id: 10,
            src: symfony,
            title: "Symfony",
            style: "shadow-slate-700 hover:text-slate-700",
        },
        {
            id: 11,
            src: mongodb,
            title: "MongoDB",
            style: "shadow-green-500 hover:text-green-500",
        },
        {
            id: 12,
            src: socket,
            title: "Socket.IO",
            style: "shadow-white",
        },
        {
            id: 13,
            src: mysql,
            title: "MySQL",
            style: "shadow-blue-600 hover:text-blue-600",
        },
        {
            id: 14,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400 hover:text-gray-400",
        },
    ];

    return (
        <section
            name="expérience"
            className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Expérience
                    </p>
                    <p className="py-6">
                        Voici les technologies avec lesquelles j'ai travaillé
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img
                                src={src}
                                alt="technologie"
                                className="w-20 mx-auto"
                            />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
