import React from "react";
import meeticphp from "../assets/portfolio/meetic.png";
import reactSpotify from "../assets/portfolio/spotify.png";
import reactCelebrityLaravelCRUD from "../assets/portfolio/celebrity.png";
import reactCharacterStarWars from "../assets/portfolio/starwars.png";

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: meeticphp,
            href: "https://github.com/Merce213/My_Meetic",
            title: "Meetic",
            description:
                "Site de rencontre pour les adultes célibataires. (PHP MVC) projet réalisé en 1 semaine",
        },
        {
            id: 2,
            src: reactSpotify,
            href: "https://github.com/Merce213/Spotify",
            title: "Spotify",
            description:
                "Projet en groupe, 2 jours pour recréer un site similaire a spotify. (React,Klein).",
        },
        {
            id: 3,
            src: reactCelebrityLaravelCRUD,
            href: "https://github.com/Merce213/Celebrity",
            title: "Celebrity",
            description:
                "Site contenant le profil autobiographique des stars. (CRUD Laravel,React)",
        },
        {
            id: 4,
            src: reactCharacterStarWars,
            href: "https://github.com/Merce213/StarWars",
            title: "Star Wars",
            description:
                "Site contenant les informations des personnages de Star Wars. (React, API)",
        },
    ];

    return (
        <section
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:min-h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">
                        Découvrez certains de mes projets ici
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, href, title, description }) => (
                        <div
                            key={id}
                            className="shadow-md shadow-gray-600 rounded-lg"
                        >
                            <img
                                src={src}
                                alt="project"
                                className="rounded-md hover:scale-105 duration-200"
                            />
                            <div className="px-4 flex flex-col items-center">
                                <p className="py-6 text-lg font-bold">
                                    {title}
                                </p>
                                <p className="pb-6">{description}</p>
                            </div>
                            <div className="flex items-center justify-center border-t border-gray-700">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    Demo
                                </button>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                                >
                                    Code
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
