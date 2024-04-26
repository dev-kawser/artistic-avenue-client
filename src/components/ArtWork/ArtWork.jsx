

const ArtWork = () => {
    return (
        <div>
            <section className="p-6 mt-20 dark:bg-gray-100 dark:text-gray-800">
                <div className="container mx-auto">
                    <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase dark:text-violet-600">
                        Art is the journey of a free soul. - Alev Oguz</span>
                    <h2 className="text-5xl font-bold text-center fira-sans dark:text-gray-900">Our Simple Art Works</h2>
                    <div className="grid gap-6 my-16 lg:grid-cols-3">
                        <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
                            <div>
                                <img className="w-64 h-[270px] hover:scale-105 transition-all border border-black" src="https://i.ibb.co/p4VsYMc/Landscape-Painting.webp" alt="" />
                            </div>
                            <p className="text-2xl font-semibold">
                                <b>Landscape Painting.</b>
                                Landscape painting portrays natural scenery, capturing its beauty and atmosphere through color, light, and texture.
                            </p>
                        </div>
                        <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
                            <div>
                                <img className="w-64 hover:scale-105 transition-all border border-black" src="https://i.ibb.co/Yt4BQ4c/Portrait-Drawing.jpg" alt="" />
                            </div>
                            <p className="text-2xl font-semibold">
                                <b>Portrait Drawing.</b>Portrait drawing captures the likeness and personality of individuals through skilled observation and rendering of facial features and expressions.
                            </p>
                        </div>
                        <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
                            <div>
                                <img className="w-64 hover:scale-105 transition-all border border-black" src="https://i.ibb.co/XjZ9NzX/Cartoon-Drawing.jpg" alt="" />
                            </div>
                            <p className="text-2xl font-semibold">
                                <b>Cartoon Drawing.</b>Cartoon drawing simplifies and exaggerates features to create humorous or satirical representations in a playful and engaging style.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                    <button className="btn btn-secondary -my-4 mb-2 mr-5">View More</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ArtWork;