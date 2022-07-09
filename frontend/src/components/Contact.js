import React from "react";

const Contact = () => {
    return (
        <section
            name="contact"
            className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
        >
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Contact
                    </p>
                    <p className="py-6">
                        Veuillez remplir le formulaire afin de collaborer avec
                        moi.
                    </p>
                </div>

                <div className="flex justify-center items-center">
                    <form
                        action="https://getform.io/f/6289acff-22b6-4f47-a97c-7fae8354bf3b"
                        method="POST"
                        className="flex flex-col w-full md:w-1/2"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Entrer votre nom"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Entrer votre email"
                            className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <input
                            type="text"
                            name="objet"
                            placeholder="Objet"
                            className="p-2 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <textarea
                            name="message"
                            rows="10"
                            placeholder="Entrer votre message"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none resize-none"
                        ></textarea>

                        <button
                            type="submit"
                            className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
                        >
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
