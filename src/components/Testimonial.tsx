import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiRefreshCw } from "react-icons/fi";
import Thumb1 from '../assets/thumb1.jpg'
import Thumb2 from '../assets/thumb2.jpg'
// import Thumb3 from '../assets/thumb3.jpg'
import Thumb4 from '../assets/thumb4.jpg'

import Video1 from '../assets/video1.mp4'
import Video2 from '../assets/video2.mp4'
import Video3 from '../assets/video3.mp4'
import b from '../assets/b.jpeg'

const testimonials = [
    {
        id: 1,
        videoUrl: Video1,
        poster: Thumb1
    },
    {
        id: 2,
        videoUrl: Video2,
        poster: Thumb2
    },
    {
        id: 3,
        videoUrl: Video3,
        poster: Thumb4
    },
    // {
    //     id: 4,
    //     videoUrl: "https://res.cloudinary.com/dquq0mrkt/video/upload/v1747562811/vargees.mp4",
    //     poster: Thumb3
    // },
];

export const TestimonialSection = () => {
    const [reloadKeys, setReloadKeys] = useState(
        testimonials.reduce((acc, t) => ({ ...acc, [t.id]: 0 }), {})
    );

    const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

    const handleReload = (id: number) => {
        setReloadKeys((prev: any) => ({
            ...prev,
            [id]: prev[id] + 1,
        }));
    };

    const handlePlay = (id: number) => {
        Object.entries(videoRefs.current).forEach(([key]) => {
            const vid = videoRefs.current[parseInt(key)];
            if (parseInt(key) !== id && vid && !vid.paused) {
                vid.pause();
                vid.currentTime = 0;
            }
        });
    };

    return (
        <section className="relative text-white px-6 md:px-12 overflow-hidden"

            style={{ backgroundImage: `url(${b})`, backgroundSize: 'cover' }}
        >
            {/* Background */}
            <div className="absolute inset-0 bg-[url('/testimonial-bg.jpg')] bg-cover bg-center opacity-5" />

            <div className="relative z-10 max-w-6xl mx-auto text-center">
                <motion.h2
                    className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-[#FFD700] via-[#FFC300] to-[#FFB000] text-transparent bg-clip-text mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* ഇനിയും തീരുമാനമെടുക്കാൻ പറ്റിയിട്ടില്ലേ? */}
                    Real People. Real Change.
                </motion.h2>

                <motion.p
                    className="text-white/60 mb-12 text-sm md:text-base"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Here’s what our students are saying
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            // @ts-ignore
                            key={`${testimonial.id}-${reloadKeys[testimonial.id]}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative group bg-white/5 border border-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg"
                        >
                            {/* Reload Button */}
                            <button
                                onClick={() => handleReload(testimonial.id)}
                                className="absolute z-10 top-2 right-2 opacity-0 group-hover:opacity-100 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                                title="Reload Video"
                            >
                                <FiRefreshCw className="w-5 h-5 cursor-pointer" />
                            </button>

                            {/* Video Element */}
                            <div className="aspect-video w-full">
                                <video
                                    // @ts-ignore
                                    key={`${testimonial.id}-${reloadKeys[testimonial.id]}`}
                                    // @ts-ignore
                                    ref={(el) => (videoRefs.current[testimonial.id] = el)}
                                    src={testimonial.videoUrl}
                                    controls
                                    className="w-full h-full"
                                    onPlay={() => handlePlay(testimonial.id)}
                                    poster={testimonial.poster}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
