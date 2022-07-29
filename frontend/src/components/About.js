import React from "react";

const About = () => {
    return (
        <section
            name="à propos"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        À Propos de moi
                    </p>
                </div>

                <p className="text-xl mt-20">
                    Après une terminale S SI non achevé dû à des problèmes de
                    santé, j'ai décidé d'apprendre à coder. Je me suis intéressé
                    au développement web et logiciel car j'étais curieux de
                    savoir comment les sites fonctionnaient étant un grand
                    utilisateur d'internet depuis petit.
                </p>

                <br />

                <p className="text-xl">
                    j'ai intégré la Web@cadémie d'Epitech avec la volonté de me
                    former aux langages et au métiers du web. Je suis
                    actuellement à la recherche d'une alternance pour un rythme
                    de 1 semaine à l'école / 3 semaines en entreprise.
                </p>
            </div>
        </section>
    );
};

export default About;
