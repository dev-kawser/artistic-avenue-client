import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slide = () => {


    return (
        <div className="mx-2 mt-6 lg:mt-10">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero lg:h-[600px] md:h-[300px] h-[450px] mt-4 rounded-2xl" style={{
                        backgroundImage: `url("https://i.ibb.co/FHfTr4f/roman-kraft-WOz-Vqzp-Scrk-unsplash.jpg")`
                    }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white acme">Whispers of the Brush: A Symphony of Colors Dancing Across the Canvas</h1>
                                <p className="mb-5 text-[14px] text-slate-450">This painting evokes a sense of delicate movement, as if the colors are gracefully swirling and intertwining upon the canvas.</p>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero lg:h-[600px] md:h-[300px] h-[450px] mt-4 rounded-2xl" style={{
                        backgroundImage: `url("https://i.ibb.co/s1zCp5f/tamanna-rumee-KMb41z-L7-SU-unsplash.jpg")`
                    }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white acme">Ethereal Reverie: Capturing Dreams with Every Stroke of the Pen</h1>
                                <p className="mb-5 text-[14px] text-slate-450">In this captivating artwork, dreams take shape with each stroke of the pen. The ethereal quality of the piece invites viewers into a world of imagination.</p>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero lg:h-[600px] md:h-[300px] h-[450px] mt-4 rounded-2xl" style={{
                        backgroundImage: `url("https://i.ibb.co/hyRq3cj/emily-webster-sl-Hj-A9-HQp0-unsplash.jpg")`
                    }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white acme">Strokes of Serenity: Finding Peace in the Chaos of Creation</h1>
                                <p className="mb-5 text-[14px] text-slate-450">Amidst the chaos of creation, there exists a serene beauty in the meticulous strokes of this artwork. Each brushstroke seems purposeful.</p>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero lg:h-[600px] md:h-[300px] h-[450px] mt-4 rounded-2xl" style={{
                        backgroundImage: `url("https://i.ibb.co/pn6zNky/sydney-rae-Llqd-Lp6-KU0-U-unsplash.jpg")`
                    }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white acme">Infinite Imagination: Exploring Boundless Worlds Through Artistic Expression</h1>
                                <p className="mb-5 text-[14px] text-slate-450">This artwork is a testament to the boundless nature of imagination. It invites viewers to embark on a journey of exploration and discovery.</p>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero lg:h-[600px] md:h-[300px] h-[450px] mt-4 rounded-2xl" style={{
                        backgroundImage: `url("https://i.ibb.co/hMjSNKN/elena-mozhvilo-xw8-Df-YBa-Nb-Q-unsplash.jpg")`
                    }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white acme">Melodies in Color: Harmonizing Emotions through the Language of Paint</h1>
                                <p className="mb-5 text-[14px] text-slate-450">Like a symphony of colors, this painting harmonizes emotions with the subtle nuances of paint. Each brushstroke carries a melody of its own.</p>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slide;