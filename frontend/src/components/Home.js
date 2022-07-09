import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <section
            name="accueil"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white max-w-4xl">
                        Je suis un Développeur Full Stack
                    </h2>
                    <p className="text-gray-500 py-4 max-w-lg">
                        Hey, je me présente, Nassim un développeur full stack
                        junior. Je suis un étudiant à la Web@cadémie d'Epitech à
                        Lyon. J'aime utilisé des technologies comme React,
                        Tailwind, NodeJS, Laravel et MySQL.
                    </p>

                    <div>
                        <Link
                            to="portfolio"
                            smooth
                            duration={500}
                            className="group flex items-center text-white w-fit px-6 py-3 my-2 bg-gradient-to-r from-cyan-500 to to-blue-500 hover:scale-105 duration-300 rounded-md cursor-pointer"
                        >
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight
                                    size={25}
                                    className="ml-1"
                                />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
