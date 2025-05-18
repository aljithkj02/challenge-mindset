import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiRefreshCw } from "react-icons/fi";

const testimonials = [
    { id: 1, videoUrl: "https://res.cloudinary.com/dquq0mrkt/video/upload/v1747562537/%E0%B4%9C%E0%B5%80%E0%B4%B5%E0%B4%BF%E0%B4%A4%E0%B4%82_%E0%B4%AE%E0%B4%BE%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF_%E0%B4%AE%E0%B4%B1%E0%B4%BF%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%B5%E0%B4%B0%E0%B5%81%E0%B4%9F%E0%B5%86_%E0%B4%85%E0%B4%A8%E0%B5%81%E0%B4%AD%E0%B4%B5%E0%B4%82_%E0%B4%87%E0%B4%A4%E0%B4%BE_%E0%B4%A8%E0%B4%BF%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B4%B3%E0%B5%81%E0%B4%82_Ready_%E0%B4%86%E0%B4%A3%E0%B5%8B_muynko.mp4" },
    { id: 2, videoUrl: "https://res.cloudinary.com/dquq0mrkt/video/upload/v1747563959/Sreelakshmi_online-video-cutter.com_1_ruadp3.mp4" },
    { id: 3, videoUrl: "https://res.cloudinary.com/dquq0mrkt/video/upload/v1747562811/20-40_%E0%B4%AA%E0%B5%8D%E0%B4%B0%E0%B4%BE%E0%B4%AF%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B5%BC_%E0%B4%88_%E0%B4%85%E0%B4%A8%E0%B5%81%E0%B4%AD%E0%B4%B5%E0%B4%82_%E0%B4%95%E0%B4%BE%E0%B4%A3%E0%B4%BE%E0%B4%A4%E0%B5%86_%E0%B4%AA%E0%B5%8B%E0%B4%95%E0%B4%B0%E0%B5%81%E0%B4%A4%E0%B5%8D_Thought_Provoking_Interview_online-video-cutter.com_ryc8yl.mp4" },
    { id: 4, videoUrl: "https://res.cloudinary.com/dquq0mrkt/video/upload/v1747564223/Praseetha_online-video-cutter.com_1_b5n34u.mp4" },
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
        <section className="relative bg-black text-white py-28 px-6 md:px-12 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[url('/testimonial-bg.jpg')] bg-cover bg-center opacity-5" />

            <div className="relative z-10 max-w-6xl mx-auto text-center">
                <motion.h2
                    className="text-2xl md:text-4xl font-semibold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    ഇനിയും തീരുമാനമെടുക്കാൻ നിനക്ക് പറ്റിയിട്ടില്ല?
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
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
